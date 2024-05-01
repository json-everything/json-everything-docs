---
layout: page
title: Extending JSON Schema Using Vocabularies
bookmark: Vocabularies
permalink: /schema/:title/
icon: fas fa-tag
order: "01.3"
---
JSON Schema draft 2019-09 introduced the idea of vocabularies to enable some spec support for custom keywords.

A vocabulary is just a collection of keywords.  It will be identified by a URI and should have an associated specification that describes the function of each of the keywords.  There *may* also be an associated meta-schema.

Creating a vocabulary in *JsonSchema.Net* isn't strictly required in order to add custom keywords, but if you're using it to create a meta-schema that will consume and validate other draft 2019-09 or later schemas, it is strongly suggested.

## Defining a vocabulary

To make all of this work, we need a few things:

- A vocab schema that provides the syntax requirements for any new keywords defined by the vocabulary.
- A vocab URI ID, this is different from the vocab schema's `$id` value.
- A meta-schema that includes a `$vocabulary` keyword that references the vocab ID (along with any other vocabs you want to include) and a `$ref` keyword that references any vocab schemas (or meta-schemas that already include them).

This is best explained with an example.  Let's suppose we want to define new keywords `minDate` and `maxDate`.

We'll start by defining our vocab schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://myserver.net/meta/dateMath",
  "properties": {
    "minDate": {
      "type": "string",
      "format": "date"
    },
    "maxDate": {
      "type": "string",
      "format": "date"
    }
  }
}
```

> If you're defining keywords that contain subschemas (e.g. `allOf` or `properties`), you'll want to add a `"$dynamicAnchor": "meta"` to the root schema and then use `{ "$dynamicRef": "#meta" }` where you need schemas.
{: .prompt-hint }

For the vocab URI ID, we'll use `https://myserver.net/vocab/dateMath`.

And then we need a meta-schema to tie everything together:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://myserver.net/meta-schema",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/core": true,
    "https://json-schema.org/draft/2020-12/vocab/applicator": true,
    "https://json-schema.org/draft/2020-12/vocab/validation": true,
    "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
    "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
    "https://json-schema.org/draft/2020-12/vocab/content": true,
    "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
    "https://myserver.net/vocab/dateMath": true
  },
  "allOf": [
    { "$ref": "https://json-schema.org/draft/2020-12/schema" },
    { "$ref": "https://myserver.net/meta/dateMath" }
  ]
}
```

> It's not always necessary to have a vocab schema.  If you decide to not have one, then any meta-schema evaluations won't be able to validate your keyword's syntax.  Maybe your keyword doesn't require any specific syntax... or validating syntax isn't important to you.
{: .prompt-info }

## How this works

When a schema evaluator loads a schema that uses our meta-schema in its `$schema` keyword, it loads the meta-schema and looks at the `$vocabulary` keyword to determine the set of vocabularies which the meta-schema uses.

That set of vocabularies specifies which keywords to process, defining a "dialect".  Any keywords that are not defined by the dialect have their values collected as annotations (or they're ignored).

The catch is that while we can read "minDate" and know that its value represents the minimum acceptable date... because we're human, and we understand things like that, a validator isn't going to be able to infer what a keyword is supposed to do by its name or the subschema that defines its syntax.  It can only validate that the schema uses a date-formatted string.

That's where the vocabulary specification comes in.

## Defining keyword functionality

The vocabulary specification is a human-readable document that gives *semantic* meaning to the vocab's keywords.  It is documentation of business logic that allows a programmer to code an extension that provides additional validation.  For example, this is the documentation for `minLength` in the Schema Validation specification:

> **6.3.2. minLength**
>
> The value of this keyword MUST be a non-negative integer.
>
> A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.
>
> The length of a string instance is defined as the number of its characters as defined by RFC 8259.
>
> Omitting this keyword has the same behavior as a value of 0.

It gives meaning to the keyword beyond how the meta-schema describes it: a non-negative integer.

Any validator can validate that `minDate` is a date-formatted string, but only a validator that understands `https://myserver.net/vocab/dateMath` _as a vocabulary_ will understand that `minDate` should validate that the date in the instance should be later than the date in the schema.

Now, if you look at the `$vocabulary` entry for `https://myserver.net/vocab/dateMath`, the vocabulary has its ID as the key with a boolean value.  In this case, that value is `true`.  That means that if the evaluator *doesn't* know about the vocabulary, it **must** refuse to process any schema that uses our meta-schema.  If this value were `false`, then the validator would be allowed to continue, but it would only be able to collect the keyword's value as an annotation (or ignore it).

## Registering a vocabulary {#schema-vocabs-registration}

To tell *JsonSchema.Net* about a vocabulary, you need to create a `Vocabulary` instance and register it using `VocabularyRegistry.Register<T>()`.

The `Vocabulary` class is quite simple.  It defines the vocabulary's ID and lists the keywords which it supports.

The keywords must still be registered separately (keep reading for instructions on creating and registering keywords).

## Defining Custom Keywords {#schema-vocabs-custom-keywords}

_JsonSchema.Net_ has been designed with custom keywords in mind.  There are several steps that need to be performed to do this.

1. Implement `IJsonSchemaKeyword`.
2. Optionally implement one of the schema-container interfaces.
   1. `ISchemaContainer`
   2. `ISchemaCollector`
   3. `IKeyedSchemaCollector`
   4. `ICustomSchemaCollector`
3. Apply some attributes.
4. Register the keyword.
5. Create a JSON converter.

And your new keyword is ready to use.

Lastly, remember that the best resource building keywords is [the code](https://github.com/gregsdennis/json-everything/tree/master/JsonSchema) where all of the built-in keywords are defined.

### Evaluation philosophy

Starting with version 5 of _JsonSchema.Net_, schema evaluation occurs in two stages: gathering constraints and processing evaluations.  Constraints represent all of the work that can be performed by the keyword without an instance, while evaluations complete the work.  By separating these stages, _JsonSchema.Net_ can reuse the constraints for subsequent runs, allowing faster run times and fewer memory allocations.

Both stages are defined by implementing the single method on `IJsonSchemaKeyword`.

### Ahead of Time (AOT) compatibility {#aot}

_JsonSchema.Net_ v6 includes updates to support [Native AOT applications](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).  Please be sure to read the main AOT section on the [overview page](/schema/basics#aot).

First, on your serialization context, you'll need to add `[JsonSerializable]` attributes for any custom keywords.

```c#
[JsonSerializable(typeof(MyKeyword))]
```

Second, you'll need to register your keywords using the `SchemaKeywordRegistry.Register<T>(JsonSerializerContext)` method overload, passing in your serializer context, to provide the library access to the `JsonTypeInfo` for your keyword type.

Lastly, due to the dynamic nature of how rules are serialized, your JSON converter MUST implement `IWeaklyTypedJsonConverter` which is defined by _Json.More.Net_.  The library also defines a `WeaklyTypeJsonConverter<T>` abstract class that you can use as a base.  It's also highly recommended that you take advantage of the `JsonSerializerOptions` [read/write extensions](/more/json-more/#ahead-of-time-aot-compilation-support) provided by _Json.More.Net_.

### 1. Implement `IJsonSchemaKeyword` {#schema-vocabs-custom-keywords-1}

Implementing your keyword will require some initial thought and design around what work the keyword can perform without the instance and what work requires the instance.  To illustrate this, let's look at a couple of the existing keyword implementations.

#### `maximum`

The `maximum` keyword is basically all instance.  It asks, "Is the instance a number, and, if so, does it exceed some maximum value?"  As such, there's not really much in the way of pre-processing that can be accomplished here that isn't handled in the background.  Therefore, all of the work is done by an `Evaluator()` method.

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint,
                                       ReadOnlySpan<KeywordConstraint> localConstraints,
                                       EvaluationContext context)
{
    return new KeywordConstraint(Name, Evaluator);
}

private void Evaluator(KeywordEvaluation evaluation, EvaluationContext context)
{
    var schemaValueType = evaluation.LocalInstance.GetSchemaValueType();
    if (schemaValueType is not (SchemaValueType.Number or SchemaValueType.Integer))
    {
        evaluation.MarkAsSkipped();
        return;
    }

    var number = evaluation.LocalInstance!.AsValue().GetNumber();
    if (Value < number)
        evaluation.Results.Fail(Name,
                                ErrorMessages.GetMaximum(context.Options.Culture),
                                ("received", number),
                                ("limit", Value));
}
```

> Although the `.Evaluator()` method contains an `EvaluationContext` parameter, it's very important that you don't pass the context from the `.GetConstraint()` method.  Each evaluation creates a new context object which could carry different options (and schema registries), which could create some unpredictable behaviors.
{: .prompt-warning }

Here, getting the constraint means just pointing to the evaluation function, which will be called once we have the instance.  Behind the scenes, the constraint manages evaluation path, instance location, and some other details.  But this is all that's needed for this keyword.

Once the constraints have all been collected, _JsonSchema.Net_ will move on to the evaluation phase, which creates an "evaluation" object for each constraint, which contains things that are specific to the current evaluation, including the local instance being evaluated, any options (which include the schema and vocabulary registries), and the local results object.

For `maximum`, evaluation means we check if the value is a number.  If not, we indicate that the keyword doesn't apply by calling `.MarkAsSkipped()`.  (This tells _JsonSchema.Net_ that that any nested results don't need to be added to the output.)  If the instance is a number, and it doesn't meet the requirement, then we fail the keyword with an error.

> `maximum` doesn't have any nested results, but it's still good form to explicitly indicate this.
{: .prompt-info }

#### `properties`

The `properties` keyword presents an opportunity to calculate some things before we have the instance.  For example, with this schema

```json
{
  "type": "object",
  "properties": {
    "foo": { "type": "string" },
    "bar": { "type": "number" }
  }
}
```

we _know_:

1. that the instance **must** be an object
2. if that object has a `foo` property, its value **must** be a string
3. if that object has a `bar` property, its value **must** be a number

More specifically to our task here, `properties` gives us a list of subschemas that must validate values at specific instance locations.  So for each property listed in the keyword, we need to generate a constraint for the associated subschema.  To support this, the `JsonSchema` object exposes a `.GetConstraint()` method of its own that returns a `SchemaConstraint`.

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint,
                                       ReadOnlySpan<KeywordConstraint> localConstraints,
                                       EvaluationContext context)
{
    var subschemaConstraints = Properties
        .Select(x => x.Value.GetConstraint(relativeEvaluationPath: JsonPointer.Create(Name, x.Key),
                                           baseInstanceLocation: schemaConstraint.BaseInstanceLocation,
                                           relativeInstanceLocation: JsonPointer.Create(x.Key),
                                           context: context))
        .ToArray();

    return new KeywordConstraint(Name, Evaluator)
    {
        ChildDependencies = subschemaConstraints
    };
}

private static void Evaluator(KeywordEvaluation evaluation, EvaluationContext context)
{
    var annotation = evaluation.ChildEvaluations
        .Select(x => (JsonNode)x.RelativeInstanceLocation.Segments[0].Value!)
        .ToJsonArray();
    evaluation.Results.SetAnnotation(Name, annotation);

    if (!evaluation.ChildEvaluations.All(x => x.Results.IsValid))
		    evaluation.Results.Fail();
}
```

Here you can see there's a lot more going on in the `.GetConstraint()` method than with `maximum`.  Because we know the instance locations, although we don't have the instance itself, we can go ahead and set up the constraints for those locations.  Once we have an array of subschema constraints, they are added to the keyword constraint's `.ChildDependencies` property.  _JsonSchema.Net_ will ensure that those evaluations are processed prior to running the one for this keyword.

When we move into the evaluation phase, all of the child constraints that align with locations actually present in the instance will have `SchemaEvaluation`s generated for them, which are accessible on the `KeywordEvaluation.ChildEvaluations` property.  Because we did a lot of the work up front, to evaluate `properties`, we only need to verify that all of our child evaluations passed.  We set an annotation, and then verify.

> The specification requires that annotations are not reported when validation fails, however this requirement is enforced at the (sub)schema level, not at the keyword level.  Annotations are still generally required for sibling keywords (i.e. within the same subschema) to interoperate correctly.
{: .prompt-warning }

#### Other variations

There are a few other variations of keyword interactions, and it may be worth inspecting the code for some of these examples.

- **Pure annotation keywords** - These keywords perform no validation, but instead only apply an annotation.
  - `title` & `description`
- **Keyword dependencies** - These communicate mainly through annotations set by the dependent keywords.
  - `additionalProperties` depends on `properties` and `patternProperties`
  - `then` and `else` depend on `if`
- **Constraint templating** - These keywords have one or more subschemas that each potentially apply to multiple locations which cannot be known without an instance.
  - `patternProperties` applies subschemas to all instance locations that match each regular expression
  - `additionalItems` applies its subschema to instance properties not addressed by `properties` or `patternProperties`
- **No-op keywords** - Keywords that play no validation or annotation role can be skipped during evaluation.
  - `$defs` & `$comment`
  - `then` or `else` when `if` isn't present

> In order to prevent unnecessary allocations, there is a static `KeywordConstraint.Skip` that can be re-used as needed to represent a constraint that doesn't need to do anything.
{: .prompt-tip }

Understanding the patterns that already exist will help you build your own keyword implementations.

#### Saving evaluation results

Once you have validated the instance, you'll need to record the results.  These methods are available on the local result object.

- `Fail()` - Fails the validation without a message
- `Fail(string keyword, string? message)` - Sets a failed validation along with a predefined error message.
- `Fail(string keyword, string message, params (string token, object? value)[] parameters)` - Sets a failed validation along with a templated error message (see [Custom Error Messages](/schema/basics/#schema-errors))

> Validation assumes to have passed unless one of these methods is called.
{: .prompt-info }

Set any annotations by using `.SetAnnotation()` on the local result object.  Generally this needs to be done whether the keyword passes or fails validation.  Annotations are stored as a key-value pair, using the keyword name as the key.  The value can be anything, but it _should_ be JSON-serializable in order to be rendered properly in the output.

### 2. Implement one of the schema-container interfaces {#schema-vocabs-custom-keywords-2}

If your keyword contains one or more subschemas, you'll need to implement one of these:

- `ISchemaContainer` - your keyword simply contains a single schema (e.g. `additionalProperties`)
- `ISchemaCollector` - your keyword contains an array of schemas (e.g. `allOf`)
- `IKeyedSchemaCollector` - your keyword contains a key-value collection of schemas (e.g. `properties`)
- `ICustomSchemaCollector` - your keyword contains schemas in some other arrangement (e.g. `propertyDependencies`)

These will be used at the beginning of the first evaluation and during schema registration to traverse all of the subschemas a provide IDs where none is explicitly declared.  This goes on to help `$ref` and friends to their job while also making that job faster.

### 3. Apply some attributes {#schema-vocabs-custom-keyword-3}

*JsonSchema.Net* contains several attributes that you should use to specify some metadata about your keyword.

- `SchemaKeyword` - Defines the keyword as it appears in the schema.
- `SchemaPriority` - Defines a priority that will be used to order keyword evaluation properly.  Keywords with the same priority are evaluated in the order they appear in the schema.
- `SchemaVersion` - Declares a version that supports the keyword.  This can be used multiple times to declare additional drafts.
- `Vocabulary` - Declares the ID of the vocabulary which defines the the keyword.

### 4. Register your keyword {#schema-vocabs-custom-keywords-4}

To make *JsonSchema.Net* aware of your keyword, you must register it with `SchemaKeywordRegistry.Register<T>()`.  This will enable deserialization.

#### Now make it nice to use {#schema-vocabs-custom-extensions}

To enable the fluent construction interface for your keyword, simply create an extension method on `JsonSchemaBuilder` that adds the keyword and returns the builder.  For example, adding a `description` keyword is implemented by this method:

```c#
public static JsonSchemaBuilder Description(this JsonSchemaBuilder builder, string description)
{
    builder.Add(new DescriptionKeyword(description));
    return builder;
}
```

You might also want to create a keyword-access extension method on `JsonSchema`.  This provides an easy, safe way to get a keyword's value, if it exists.  Here's the extension method for getting the `description` keyword value:

```c#
public static string? GetDescription(this JsonSchema schema)
{
    return schema.TryGetKeyword<DescriptionKeyword>(DescriptionKeyword.Name, out var k)
      ? k.Value
      : null;
}
```

### 5. Create a JSON converter {#schema-vocabs-custom-converter}

To enable serialization and deserialization, you'll need to provide the converter for it.

Implement a `JsonConverter<T>` and apply a `JsonConverter` attribute to the keyword.
