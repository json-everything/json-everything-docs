---
layout: page
title: Example - Extending JSON Schema Validation With Your Own Vocabularies
bookmark: Custom Vocabs
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "1.4.4"
---
These examples will show how to extend JSON Schema validation by creating a new keyword and incorporating it into a new vocabulary.

> These examples are actually defined in one of the library's unit tests.
{: .prompt-info }

For a more detailed explanation about the concepts behind vocabularies, please see the Vocabularies page.

## Defining a Keyword {#example-schema-vocabs-keyword}

We want to define a new `maxDate` keyword that allows a schema to enforce a maximum date value to appear in an instance property.  We'll start with the keyword.

```c#
// The SchemaKeyword attribute is how the deserializer knows to use this
// class for the "maxDate" keyword.
[SchemaKeyword(Name)]
// Naturally, we want to be able to deserialize it.
[JsonConverter(typeof(MaxDateJsonConverter))]
// We need to declare which vocabulary this keyword belongs to.
[Vocabulary("http://mydates.com/vocabulary")]
// Specify which versions the keyword is compatible with.
[SchemaSpecVersion(SpecVersion.Draft201909 | SpecVersion.Draft202012)]
public class MaxDateKeyword : IJsonSchemaKeyword
{
    // Define the keyword in one place.
    public const string Name = "maxDate";

    // Define whatever data the keyword needs.
    public DateTime Date { get; }

    public MaxDateKeyword(DateTime date)
    {
        Date = date;
    }

    // Implements IJsonSchemaKeyword
    public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint,
        IReadOnlyList<KeywordConstraint> localConstraints,
        EvaluationContext context)
    {
        throw new NotImplementedException();
    }
}
```

We need to define that serializer, too.

```c#
class MaxDateJsonConverter : JsonConverter<MaxDateKeyword>
{
    public override MaxDateKeyword Read(ref Utf8JsonReader reader,
                                        Type typeToConvert,
                                        JsonSerializerOptions options)
    {
        // Check to see if it's a string first.
        if (reader.TokenType != JsonTokenType.String)
            throw new JsonException("Expected string");

        var dateString = reader.GetString();
        // If the parse fails, then it's not in the right format,
        // and we should throw an exception anyway.
        var date = DateTime.Parse(dateString, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);

        return new MaxDateKeyword(date);
    }

    public override void Write(Utf8JsonWriter writer,
                               MaxDateKeyword value,
                               JsonSerializerOptions options)
    {
        writer.WritePropertyName(MaxDateKeyword.Name);
        writer.WriteStringValue(value.Date.ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ssK"));
    }
}
```

## Registering the Keyword {#example-schema-vocabs-register-keyword}

If you're keen on creating a vocabulary, go on to the next section.  Otherwise, keep reading.

Now that we have the keyword, we need to tell the system about it.

```c#
SchemaKeywordRegistry.Register<MaxDateKeyword>();
```

> If you're building a dynamic system where you don't always want the keyword supported, it can be removed using the `SchemaKeywordRegistry.Unregister<T>()` static method.
{: .prompt-info }

You'll also want to set the `EvaluationOptions.ProcessCustomKeywords` option to true so that non-dialect keywords are processed.

That's technically all you need to do to support a custom keyword.  However, going forward for JSON Schema, custom keywords should be defined in a custom vocabulary.

## Defining a Vocabulary {#example-schema-vocabs-definition}

Vocabularies are used within JSON Schema to ensure that the validator you're using supports your new keyword.  Because we have already created the keyword and registered it, we know it is supported.

However, we might not be implementing _our_ vocabulary.  This keyword is likely from a third party who has written a schema that declares a vocabulary that defines `maxDate`, and we're trying to support _that_.

In accordance with the specification, JsonSchema<nsp>.Net will refuse to process any schema whose meta-schema declares a vocabulary it doesn't know about.  Because of this, it won't process the third-party schema unless we define the vocabulary on our end.

```c#
static class MyCustomVocabularies
{
    // Define the vocabulary and list the keyword types it defines.
    public static readonly Vocabulary DatesVocabulary =
        new Vocabulary("http://mydates.com/vocabulary", typeof(MaxDateKeyword));

    // Although not required a vocabulary may also define a vocab meta-schema.
    // It's a good idea to implement that as well.
    // This meta-schema only needs to validate that keyword syntax is correct.
    public static readonly JsonSchema DatesMetaSchema =
        new JsonSchemaBuilder()
            .Id("http://mydates.com/vocab/schema")
            .Schema(MetaSchemas.Draft202012Id)
            .Properties(
                (MaxDateKeyword.Name, new JsonSchemaBuilder()
                    .Type(SchemaValueType.String)
                    .Format(Formats.DateTime)
                )
            );

    // You'll also want to define a new dialect, usually based on an existing
    // dialect.  This one is based on the 2020-12 dialect.
    // Splitting the vocab and dialect meta-schemas this way makes it easier to
    // re-use the vocabulary across multiple dialects.
    public static readonly JsonSchema DatesDialectMetaSchema =
        new JsonSchemaBuilder()
            .Id("http://mydates.com/dialect/schema")
            .Schema(MetaSchemas.Draft202012Id)
            .Vocabulary(
                // You have to list all of the vocabularies you plan on using.
                (Vocabularies.Core202012Id, true),
                (Vocabularies.Applicator202012Id, true),
                (Vocabularies.Unevaluated202012Id, true),
                (Vocabularies.Validation202012Id, true),
                (Vocabularies.Metadata202012Id, true),
                (Vocabularies.FormatAnnotation202012Id, true),
                (Vocabularies.Content202012Id, true),
                // Don't forget to list your vocab.
                ("http://mydates.com/vocabulary", true)
            )
            // Now we need to reference the 2020-12 meta-schema and our
            // vocab meta-schema so that all the keywords are validated.
            .AllOf(
                new JsonSchemaBuilder().Ref(Vocabularies.Core202012Id),
                new JsonSchemaBuilder().Ref("http://mydates.com/vocab/schema")
            );
}
```

Then they need to be registered.  This is done on the schema validation options.

```c#
// Register both meta-schemas.
options.SchemaRegistry.Register(new Uri("http://mydates.com/vocab/schema"), DatesMetaSchema);
options.SchemaRegistry.Register(new Uri("http://mydates.com/dialect/schema"), DatesDialectMetaSchema);

// Register the vocabulary.  This automatically registers the keywords
// defined by the vocabulary.
options.VocabularyRegistry.Register(DatesVocabulary);
```

And that's it.  The vocabulary and keyword are ready for use.
