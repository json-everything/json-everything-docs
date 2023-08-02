---
layout: page
title: Extending JSON Schema Using Vocabularies
bookmark: Vocabularies
permalink: /schema/:title/
icon: fas fa-tag
order: "1.3"
---
JSON Schema draft 2019-09 introduced the idea of vocabularies to enable some spec support for custom keywords.

A vocabulary is just a collection of keywords.  It will be identified by a URI and should have an associated specification that describes the function of each of the keywords.  There *may* also be an associated meta-schema.

Creating a vocabulary in *JsonSchema.Net* isn't strictly required in order to add custom keywords, but if you're using it to create a meta-schema that will consume and validate other draft 2019-09 or later schemas, it is strongly suggested.

## How vocabularies work {#schema-vocabs-how-it-works}

This is best explained with an example.  Suppose we have a meta-schema **M**, a schema **S** that uses **M** as its `$schema`, and a couple instances **I1** and **I2** to be validated by **S**.

```jsonc
// meta-schema M
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",               // 1
  "$id": "https://myserver.net/meta-schema",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/core": true,              // 2
    "https://json-schema.org/draft/2020-12/vocab/applicator": true,
    "https://json-schema.org/draft/2020-12/vocab/validation": true,
    "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
    "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
    "https://json-schema.org/draft/2020-12/vocab/content": true,
    "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
    "https://myserver.net/my-vocab": true
  },
  "allOf": [                                                                // 3
    { "$ref": "https://json-schema.org/draft/2020-12/schema" }
  ],
  "properties": {
    "minDate": {                                                            // 4
      "type": "string",
      "format": "date"
    }
  }
}

// schema S
{
  "$schema": "https://myserver.net/meta-schema",                           // 5
  "$id": "https://myserver.net/schema",
  "properties": {
    "publishedOnDate": {
      "minDate": "2019-01-01"                                               // 6
    }
  }
}

// instance I1
{
  "publishedOnDate": "2019-06-22"                                           // 7
}
// instance I2
{
  "publishedOnDate": "1998-06-22"                                           // 8
}
```

1. We declare a meta-schema.  In this case, it's the draft 2020-12 meta-schema.  This will validate our schema and declare the set of rules it should be processed with.
2. We list the vocabularies that the *JsonSchema.Net* should know about in order to process schemas that declare this meta-schema as their `$schema` (see #5).  This includes all of the vocabularies from 2020-12 (because we want all of the 2020-12 capabilities) as well as the vocab for this meta-schema.  We'll explain a bit more about this later.
3. We also need all of the syntactic validation from 2020-12, so we include it in an `allOf`.
4. We define a new keyword, `minDate`, that takes a date-formatted string value.
5. We create a schema that uses our new meta-schema (because we want to use the new keyword).
6. We use the new keyword to define a property to be found in the instance.
7. The first instance defines a date after the minimum required date.
8. The second date defines a date before the minimum required date.

The kicker here is that we can read "minDate" and know that its value represents the minimum acceptable date... because we're human, and we understand things like that.  However, a validator isn't going to be able to infer that.  It can only validate that a date-formatted string was given for `minDate` in the schema (**S**).

That's where the vocabulary comes in.  The vocabulary is a human-readable document that gives *semantic* meaning to `minDate`.  It is documentation of business logic that allows a programmer to code an extension that provides additional validation.  For example, this is the documentation for `minLength` in the Schema Validation specification:

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

Any validator can validate that `minDate` is a date-formatted string, but only a validator that understands `https://myserver.net/my-vocab` as a vocabulary will understand that `minDate` should validate that a date in the instance should be later than that in the schema.

Now, if you look at the `$vocabulary` entry for `https://myserver.net/my-vocab`, the vocabulary has its ID as the key with a boolean value.  In this case, that value is `true`.  That means that if *JsonSchema.Net* *doesn't* know about the vocabulary, it **must** refuse to process any schema that declares **M** as its `$schema` (as **S** does).  If this value were `false`, then *JsonSchema.Net* would be allowed to continue, which means that only syntactic analysis (i.e. "Is `minDate` a date-formatted string?") would be performed.

So, back to the example, because we declare the vocabulary to be required (by giving it a value of `true`) *and* because *JsonSchema.Net* knows about it, **I1** is reported as valid and **I2** is not.  If the vocabulary had not been required and *JsonSchema.Net* didn't know about the vocabulary, both **I1** and **I2** would be reported as valid because the `minDate` keyword would not have been enforced.

## Registering a vocabulary {#schema-vocabs-registration}

To tell *JsonSchema.Net* about a vocabulary, you need to create a `Vocabulary` instance and register it using `VocabularyRegistry.Add<T>()`.

The `Vocabulary` class is quite simple.  It defines the vocabulary's ID and lists the keywords which it supports.

The keywords must still be registered separately (see "Defining Custom Keywords" below).

It's not always necessary to have a meta-schema for your vocabulary.  However, if you want to enable `EvaluationOptions.ValidateMetaschema`, you will need to register it.

# Defining Custom Keywords {#schema-vocabs-custom-keywords}

`JsonSchema` has been designed to allow you to create your own keywords.  There are several steps that need to be performed to do this.

1. Implement `IJsonSchemaKeyword`.
1. Optionally implement one of the schema-container interfaces.
   1. `ISchemaContainer`
   2. `ISchemaCollector`
   3. `IKeyedSchemaCollector`
   4. `ICustomSchemaCollector`
2. Apply some attributes.
3. Register the keyword.
4. Create a JSON converter.

And your new keyword is ready to use.

Lastly, remember that the best resource building keywords is [the code](https://github.com/gregsdennis/json-everything/tree/master/JsonSchema) where all of the built-in keywords are defined.

## Evaluation philosophy

Starting with version 5 of _JsonSchema.Net_, schema evaluation occurs in two stages: gathering constraints and processing evaluations.  Constraints represent all of the work that can be performed by the keyword without an instance, while evaluations complete the work.  By separating these stages, _JsonSchema.Net_ can reuse the constraints for subsequent runs, allowing faster run times and fewer memory allocations.

Both stages are defined by implementing the single method on `IJsonSchemaKeyword`.

## 1. Implement `IJsonSchemaKeyword` {#schema-vocabs-custom-keywords-1}

Implementing your keyword will require some initial thought and design around what work the keyword can perform without the instance and what work requires the instance.  To illustrate this, let's look at a couple of the existing keyword implementations.

### `maximum`

The `maximum` keyword is basically all instance.  It asks, "Is the instance a number, and, if so, does it exceed some maximum value?"  As such, there's not really much in the way of pre-processing that can be accomplished here that isn't handled in the background.  Therefore, all of the work is done by an `Evaluator()` method.

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint,
                                       IReadOnlyList<KeywordConstraint> localConstraints,
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
        evaluation.Results.Fail(Name, ErrorMessages.Maximum, ("received", number), ("limit", Value));
}
```

> Although the `.Evaluator()` method contains an `EvaluationContext` parameter, it's very important that you don't pass the context from the `.GetConstraint()` method.  Each evaluation creates a new context object which could carry different options (and schema registries), which could create some unpredictable behaviors.
{: .prompt-warning }

Here, getting the constraint means just pointing to the evaluation function, which will be called once we have the instance.  Behind the scenes, the constraint manages evaluation path, instance location, and some other details.  But this is all that's needed for this keyword.

Once the constraints have all been collected, _JsonSchema.Net_ will move on to the evaluation phase, which creates an "evaluation" object for each constraint, which contains things that are specific to the current evaluation, including the local instance being evaluated, any options (which include the schema and vocabulary registries), and the local results object.

For `maximum`, evaluation means we check if the value is a number.  If not, we indicate that the keyword doesn't apply by calling `.MarkAsSkipped()`.  (This tells _JsonSchema.Net_ that that any nested results don't need to be added.)  If the instance is a number, and it doesn't meet the requirement, then we fail the keyword with an error.

> `maximum` doesn't have any nested results, but it's still good form to explicitly indicate this.
{: .prompt-info }

### `properties`

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
                                       IReadOnlyList<KeywordConstraint> localConstraints,
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

### Other variations

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

### Saving evaluation results

Once you have validated the instance, you'll need to record the results.  These methods are available on the local result object.

- `Fail()` - Fails the validation without a message
- `Fail(string keyword, string? message)` - Sets a failed validation along with a predefined error message.
- `Fail(string keyword, string message, params (string token, object? value)[] parameters)` - Sets a failed validation along with a templated error message (see [Custom Error Messages](/schema/basics/#schema-errors))

> Validation assumes to have passed unless one of these methods is called.
{: .prompt-info }

Set any annotations by using `.SetAnnotation()` on the local result object.  Generally this needs to be done whether the keyword passes or fails validation.  Annotations are stored as a key-value pair, using the keyword name as the key.  The value can be anything, but it _should_ be JSON-serializable in order to be rendered properly in the output.

## 2. Implement one of the schema-container interfaces {#schema-vocabs-custom-keywords-2}

If your keyword contains one or more subschemas, you'll need to implement one of these:

- `ISchemaContainer` - your keyword simply contains a single schema (e.g. `additionalProperties`)
- `ISchemaCollector` - your keyword contains an array of schemas (e.g. `allOf`)
- `IKeyedSchemaCollector` - your keyword contains a key-value collection of schemas (e.g. `properties`)
- `ICustomSchemaCollector` - your keyword contains schemas in some other arrangement (e.g. `propertyDependencies`)

These will be used at the beginning of the first evaluation and during schema registration to traverse all of the subschemas a provide IDs where none is explicitly declared.  This goes on to help `$ref` and friends to their job while also making that job faster.

## 3. Apply some attributes {#schema-vocabs-custom-keyword-3}

*JsonSchema.Net* contains several attributes that you should use to specify some metadata about your keyword.

- `SchemaKeyword` - Defines the keyword as it appears in the schema.
- `SchemaPriority` - Defines a priority that will be used to order keyword evaluation properly.  Keywords with the same priority are evaluated in the order they appear in the schema.
- `SchemaVersion` - Declares a version that supports the keyword.  This can be used multiple times to declare additional drafts.
- `Vocabulary` - Declares the ID of the vocabulary which defines the the keyword.

## 4. Register your keyword {#schema-vocabs-custom-keywords-4}

To make *JsonSchema.Net* aware of your keyword, you must register it with `SchemaKeywordRegistry.Register<T>()`.  This will enable deserialization.

### Now make it nice to use {#schema-vocabs-custom-extensions}

To enable the fluent construction interface for your keyword, simply create an extension method on `JsonSchemaBuilder` that adds the keyword and returns the builder.  For example, adding a `description` keyword is implemented by this method:

```c#
public static JsonSchemaBuilder Description(this JsonSchemaBuilder builder, string description)
{
    builder.Add(new DescriptionKeyword(description));
    return builder;
}
```

## 5. Create a JSON converter {#schema-vocabs-custom-converter}

To enable serialization and deserialization, you'll need to provide the converter for it.

Implement a `JsonConverter<T>` and apply a `JsonConverter` attribute to the keyword.
