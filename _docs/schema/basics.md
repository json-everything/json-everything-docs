---
layout: page
title: JsonSchema.Net Basics
md_title: _JsonSchema.Net_ Basics
bookmark: Basics
permalink: /schema/:title/
icon: fas fa-tag
order: "01.1"
---
The occasion may arise when you wish to validate that a JSON object is in the correct form (has the appropriate keys and the right types of values), or perhaps you wish to annotate that data.  Enter JSON Schema.  Much like XML Schema with XML, JSON Schema defines a pattern for JSON data.  A JSON Schema validator can verify that a given JSON object meets the requirements as defined by the JSON Schema as well as provide additional information to the application about the data.  This evaluation can come in handy as a precursor step before deserializing.

More information about JSON Schema can be found at [json-schema.org](http://json-schema.org).

To support JSON Schema, *JsonSchema.Net* exposes the `JsonSchema` type.  This type is implemented as a list of keywords, each of which correspond to one of the keywords defined in the JSON Schema specifications.

## Specification versions {#schema-versions}

There are currently six drafts of the JSON Schema specification that have known use:

- Draft 3
- Draft 4
- Draft 6
- Draft 7
- Draft 2019-09
- Draft 2020-12

The JSON Schema team recommends using draft 7 or later.  *JsonSchema.Net* supports draft 6 and later.

> The next version of JSON Schema, which is supported by v4.0.0 and later of this library, is currently in development and will start a new era for the project which includes various backward- and forward-compatibility guarantees.  Have a read of the various discussions happening in the [JSON Schema GitHub org](https://github.com/json-schema-org) for more information.
{: .prompt-tip }

> This library uses [`decimal`](https://learn.microsoft.com/en-us/dotnet/api/system.decimal?view=net-8.0) for floating point number representation.  While `double` (and even `float`) may support a larger range, the higher precision of `decimal` is often more important (for example, in financial applications).  This also aligns with [JSON](https://datatracker.ietf.org/doc/html/rfc8259#section-6) itself, which uses arbitrary-precision numbers.  [This site](https://www.geeksforgeeks.org/difference-between-decimal-float-and-double-in-net/) has a good summary of the differences between the numeric types.
{: .prompt-warning }

### Meta-schemas {#schema-metaschemas}

Each version defines a meta-schema.  This is a special JSON Schema that describes all of the keywords available for that version.  They are intended to be used to validate other schemas.  Usually, a schema will declare the version it should adhere to using the `$schema` keyword.

*JsonSchema.Net* declares the meta-schemas for the supported versions as members of the `MetaSchemas` static class.

Draft 2019-09 introduced vocabularies.  As part of this new feature, the meta-schemas for this version and those which follow it have been split into vocabulary-specific meta-schemas.  Additionally, the specification recognizes that the meta-schemas aren't perfect and may need to be updated occasionally.  As such, the meta-schemas defined by this library will be updated to match, in most cases only triggering a patch release.

## Keywords {#schema-keywords}

JSON Schema is expressed as a collection of keywords, each of which provides a specific constraint on a JSON instance.  For example, the `type` keyword specifies what JSON type an instance may be, whereas the `minimum` keyword specifies a minimum numeric value *for only numeric data* (it will not apply any assertion to non-numeric values).  These keywords can be combined to express the expected shape of any JSON instance.  Once defined, the schema evaluates the instance, providing feedback on what errors occurred, including where in the instance and in the schema produced them.

# Building a schema {#schema-build}

There are two options when building a schema: defining it inline using the fluent builder and defining it externally and deserializing.  Which method you use depends on your specific requirements.

## Serialization and Deserialization {#schema-deserialization}

Serialization is how we convert between the textual representation of JSON Schema and a `JsonSchema` .Net object.  In many cases, you'll compose your schemas in separate JSON files and deserialize them into the `JsonSchema` model.  However if you [define your schemas in code](#schema-inlining) or [generate them from a type](/schema/schemagen/schema-generation/) you won't have a textual representation of those schemas on hand.

To facilitate this, _JsonSchema.Net_ schemas are fully serializable.

```c#
var mySchema = JsonSchema.FromText(content);
```

which just does

```c#
var mySchema = JsonSerializer.Deserialize<JsonSchema>(content);
```

Done.

> You can either use the JSON serializer as shown above, or the YAML serializer found in [_Yaml2JsonNode_](/yaml/basics/).
{: .prompt-tip}

### Ahead of Time (AOT) compatibility {#aot}

_JsonSchema.Net_ v6 includes updates to support [Native AOT applications](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).  In order to take advantage of this, there are a few things you'll need to do.

First, on your `JsonSerializerContext`, add the following attributes:

```c#
[JsonSerializable(typeof(JsonSchema))]
[JsonSerializable(typeof(EvaluationResults))]
```

It's recommended that you create a single `JsonSerializerOptions` object (or a few if you need different configurations) and reuse it rather than creating them ad-hoc.  When you create one, you'll need to configure its `TypeInfoResolverChain` with your serializer context:

```c#
var serializerOptions = new()
{
    TypeInfoResolverChain = { MySerializerContext.Default }
};
```

If you don't have any custom keywords, you're done.  Congratulations.

If you do have custom keywords, please see the AOT section on the [Vocabularies docs](/schema/vocabs#aot).

> The vocabulary library extensions for _JsonSchema.Net_ are also AOT-compatible and require no further setup.
{: .prompt-tip}

## Inline {#schema-inlining}

There are many reasons why you would want to hard-code your schemas.  This library actually hard-codes all of the meta-schemas.  Whatever your reason, the `JsonSchemaBuilder` class is going to be your friend.

The builder class itself is pretty simple.  It just has an `.Add()` method which takes an instance of `IJsonSchemaKeyword`.  The real power comes from the multitudes of extension methods.  There's at least one for every keyword, and they all take the appropriate types for the data that the keyword expects.

Once you've added all of your properties, just call the `.Build()` method to get your schema object.

```c#
var builder = new JsonSchemaBuilder()
    // builder methods
    ;
var schema = builder.Build();
```

Let's take a look at some of the builder extension methods.

### Easy mode {#schema-how-to-1}

Some of the more straightforward builder methods are for like the `title` and `$comment` keywords, which just take a string:

```c#
builder.Comment("a comment")
    .Title("A title for my schema");
```

Notice that these methods implement a fluent interface so that you can chain them together.

### A little spice {#schema-how-to-2}

Other extension methods can take multiple values.  These have been overloaded to accept both `IEnumerable<T>` and `params` arrays just to keep things flexible.

```c#
var required = new List<string>{"prop1", "prop2"};
builder.Required(required);
```

or just

```c#
builder.Required("prop1", "prop2");
```

### Now you're cooking with gas {#schema-how-to-3}

Lastly, we have the extension methods which take advantage of C# 7 tuples.  These include keywords like `$defs` and `properties` which take objects to mimic their JSON form.

```c#
builder.Properties(
        ("prop1", new JsonSchemaBuilder()
            .Type(SchemaValueType.String)
            .MinLength(8)
        ),
        ("prop2", new JsonSchemaBuilder()
            .Type(SchemaValueType.Number)
            .MultipleOf(42)
        )
    );
```

Did you notice how the `JsonSchemaBuilder` is just included directly without the `.Build()` method?  These methods actually require `JsonSchema` objects.  This leads us into the next part.

### Conversions {#schema-implicit-cast}

`JsonSchemaBuilder` defines an implicit cast to `JsonSchema` which calls the `.Build()` method.

To help things further, `JsonSchema` also defines implicit conversions from `bool`.  This allows you to simply use `true` and `false` to create their respective schemas.

```c#
builder.Properties(
        ("prop1", new JsonSchemaBuilder()
            .Type(SchemaValueType.String)
            .MinLength(8)
        ),
        ("prop2", new JsonSchemaBuilder()
            .Type(SchemaValueType.Number)
            .MultipleOf(42)
        ),
        ("prop3", true)
    );
```

This cast can be used anywhere a `JsonSchema` is needed, such as in the `additionalProperties` or `items` keywords.

```c#
builder.Properties(
        ("prop1", new JsonSchemaBuilder()
            .Type(SchemaValueType.String)
            .MinLength(8)
        ),
        ("prop2", new JsonSchemaBuilder()
            .Type(SchemaValueType.Number)
            .MultipleOf(42)
        ),
        ("prop3", true),
        ("prop4", new JsonSchemaBuilder()
            .Type(SchemaValueType.Array)
            .Items(true)
        )
    )
    .AdditionalProperties(false);
```

# Evaluation & annotations {#schema-evaluation}

Among the myriad of uses for JSON Schema, _JsonSchema.Net_ is considered a "validator".  That is, it evaluates schemas against a data instance and produces a validation result and annotations.

## Evaluating instances {#schema-evaluation-2}

`JsonSchema` exposes an `Evaluate()` method which is used to evaluate JSON instances.  Let's begin with the following schema and a few JSON objects:

```json 
{
  "properties":{
    "myProperty":{
      "type":"string",
      "minLength":10
    }
  },
  "required":["myProperty"]
}

{}
{"myProperty":false}
{"myProperty":"some string"}
{"otherProperty":35.4}
"nonObject"
```

To evaluate these, all we have to do is pass these into our schema's `Evaluate(JsonNode)` method.

```csharp
JsonSchema schema = new JsonSchemaBuilder()
    .Properties(
        ("myProperty", new JsonSchemaBuilder()
            .Type(SchemaValueType.String)
            .MinLength(10)
        )
    )
    .Required("myProperty");

// you can build or parse you JsonNode however you like
var emptyJson = new JsonObject();
var booleanJson = JsonNode.Parse("{\"myProperty\":false}");
var stringJson = new JsonObject { ["myProperty"] = "some string" };
var shortJson = new JsonObject { ["myProperty"] = "short" };
var numberJson = new JsonObject { ["otherProperty"] = 35.4 };
var nonObject = JsonNode.Parse("\"not an object\"");

var emptyResults = schema.Evaluate(emptyJson);
var booleanResults = schema.Evaluate(booleanJson);
var stringResults = schema.Evaluate(stringJson);
var shortResults = schema.Evaluate(shortJson);
var numberResults = schema.Evaluate(numberJson);
var nonObjectResults = schema.Evaluate(nonObject);
```

> Don't pass your JSON to `Evaluate()` as a string.  You must parse it with `JsonNode.Parse()` first.  Otherwise, your string will be implicitly cast to `JsonNode` and you're just validating a string instance.
{: .prompt-warning }

The various results objects are of type `EvaluationResults`.  More information about the results object can be found in the next section.

In the above example, the following would result:

- `emptyJson` and `numberJson` failed because `"myProperty"` was not found.
- `booleanJson` failed because the value of `"myProperty"` is of the wrong type.
- `stringJson` passed validation.
- `shortJson` failed because the value of `"myProperty"` was too short.
- `nonObject` also passed validation because `properties` and `required` ignore non-object JSON.

No errors would actually be reported here because the output format defaults to a "flag" format, which is a basic pass/fail.  To get specific errors, the output format will need to be configured.

## Evaluation results {#schema-results}

JSON Schema draft 2019-09 began the process to standardize the format for evaluation output in order to support cross-platform and cross-implementation compatibility.

For the next release of JSON Schema, these formats have been extracted into their own specification.  In addition, the formats themselves have been updated to increase clarity and readability.

> More information on the changes can be found in [this blog post](https://json-schema.org/blog/posts/fixing-json-schema-output).
{: .prompt-tip}

_JsonSchema.Net_ supports the new, upcoming formats by default, however it can be configured for limited support of the specification requirements.  See [this example](/schema/examples/legacy-output) for more information.

In summary, there are three levels of verbosity for output: Flag, List, and Hierarchy.

The flag format will simply return a boolean value indicating a pass/fail result.  All other formats include JSON Pointers and URIs to indicate the source of the errors or annotations that were produced.

A list format reduces all of the errors to a flat list, housed in a top-level object that summarizes the validation result.

The hierarchical output format follows the structure of the schema.

> The output formats can contain a lot of information you're probably going to end up ignoring (but can nevertheless be useful in some cases).  [This blog post](https://json-schema.org/blog/posts/interpreting-output) gives some examples and explanations of how to read JSON Schema output.
{: .prompt-tip}

The default output format is Flag, but this can be configured via the `EvaluationOptions.OutputFormat` property.

> It's only possible to translate from a more detailed to a less detailed format.
{: .prompt-info }

### Examples of output {#schema-output}

<details markdown="1">
  <summary><em>Hierarchical</em></summary>

```json
{
  "valid": false,
  "evaluationPath": "",
  "schemaLocation": "https://json-schema.org/schemas/example#",
  "instanceLocation": "",
  "details": [
    {
      "valid": false,
      "evaluationPath": "/properties/foo",
      "schemaLocation": "https://json-schema.org/schemas/example#/properties/foo",
      "instanceLocation": "/foo",
      "details": [
        {
          "valid": false,
          "evaluationPath": "/properties/foo/allOf/0",
          "schemaLocation": "https://json-schema.org/schemas/example#/properties/foo/allOf/0",
          "instanceLocation": "/foo",
          "errors": {
            "required": "Required properties [\"unspecified-prop\"] were not present"
          }
        },
        {
          "valid": false,
          "evaluationPath": "/properties/foo/allOf/1",
          "schemaLocation": "https://json-schema.org/schemas/example#/properties/foo/allOf/1",
          "instanceLocation": "/foo",
          "droppedAnnotations": {
            "properties": [ "foo-prop" ],
            "title": "foo-title"
          },
          "details": [
            {
              "valid": false,
              "evaluationPath": "/properties/foo/allOf/1/properties/foo-prop",
              "schemaLocation": "https://json-schema.org/schemas/example#/properties/foo/allOf/1/properties/foo-prop",
              "instanceLocation": "/foo/foo-prop",
              "errors": {
                "const": "Expected \"1\""
              },
              "droppedAnnotations": {
                "title": "foo-prop-title"
              }
            },
            {
              "valid": true,
              "evaluationPath": "/properties/foo/allOf/1/additionalProperties",
              "schemaLocation": "https://json-schema.org/schemas/example#/properties/foo/allOf/1/additionalProperties",
              "instanceLocation": "/foo/other-prop"
            }
          ]
        }
      ]
    },
    {
      "valid": false,
      "evaluationPath": "/properties/bar",
      "schemaLocation": "https://json-schema.org/schemas/example#/properties/bar",
      "instanceLocation": "/bar",
      "details": [
        {
          "valid": false,
          "evaluationPath": "/properties/bar/$ref",
          "schemaLocation": "https://json-schema.org/schemas/example#/$defs/bar",
          "instanceLocation": "/bar",
          "droppedAnnotations": {
            "properties": [ "bar-prop" ],
            "title": "bar-title"
          },
          "details": [
            {
              "valid": false,
              "evaluationPath": "/properties/bar/$ref/properties/bar-prop",
              "schemaLocation": "https://json-schema.org/schemas/example#/$defs/bar/properties/bar-prop",
              "instanceLocation": "/bar/bar-prop",
              "errors": {
                "minimum": "2 is less than or equal to 10"
              },
              "droppedAnnotations": {
                "title": "bar-prop-title"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

</details>

<details markdown="1">
  <summary><em>List</em></summary>

```json
{
  "valid": false,
  "details": [
    {
      "valid": false,
      "evaluationPath": "/properties/foo/allOf/0",
      "schemaLocation": "https://json-schema.org/schemas/example#/properties/foo/allOf/0",
      "instanceLocation": "/foo",
      "errors": {
        "required": "Required properties [\"unspecified-prop\"] were not present"
      }
    },
    {
      "valid": false,
      "evaluationPath": "/properties/foo/allOf/1/properties/foo-prop",
      "schemaLocation": "https://json-schema.org/schemas/example#/properties/foo/allOf/1/properties/foo-prop",
      "instanceLocation": "/foo/foo-prop",
      "errors": {
        "const": "Expected \"1\""
      }
    },
    {
      "valid": false,
      "evaluationPath": "/properties/bar/$ref/properties/bar-prop",
      "schemaLocation": "https://json-schema.org/schemas/example#/$defs/bar/properties/bar-prop",
      "instanceLocation": "/bar/bar-prop",
      "errors": {
        "minimum": "2 is less than or equal to 10"
      }
    }
  ]
}
```

</details>

## Value format validation {#schema-format}

The `format` keyword has been around a while.  It's available in all of the versions supported by *JsonSchema.Net*.  Although this keyword is technically classified as an annotation, the specification does allow (the word used is "SHOULD") that implementation provide some level of validation on it so long as that validation may be configured on and off.

*JsonSchema.Net* makes a valiant attempt at validating a few of them.  These are hardcoded as static fields on the `Formats` class.  Out of the box, these are available:

- `date`
- `date-time`
- `duration`
- `email`
- `hostname`
- `ipv4`
- `ipv6`
- `iri`
- `iri-reference`
- `json-pointer`
- `regex`
- `relative-json-pointer`
- `uri`
- `uri-reference`
- `uri-template` (not supported by default, see [this user solution](https://github.com/gregsdennis/json-everything/issues/244#issuecomment-1081842470) for a workaround)

I'm not going to claim that the validation on any of these is perfect, but it will likely suffice for most applications.  In the (rare) event that it doesn't support your needs, they are completely overridable.  Additionally, if you find a method that works better than what's in the library, feel free to [contribute a PR](https://github.com/gregsdennis/json-everything/pulls) and make the library better for everyone.

New formats must be registered via the `Formats.Register()` static method.  This method will overwrite any existing registration for that format, so this can be used to override the default behavior for known formats.  This also makes the format available for deserialization.

> Format implementations MUST not contain state as the same instance will be shared by all of the schema instances that use it.
{: .prompt-warning }

## Options {#schema-options}

> For the best performance, use a cached evaluation options object.
>
> *JsonSchema.Net* optimizes repeated evaluations with the same schema by performing some static analysis during the first evaluation.  However because changes to evaluation options can affect this analysis, the analysis is recalculated if the options change or a new options object is detected.
{: .prompt-warning }

The `EvaluationOptions` class gives you a few configuration points for customizing how the evaluation process behaves.  It is an instance class and can be passed into the `JsonSchema.Evaluate()` method.  If no options are explicitly passed, a copy of `JsonSchemaOptions.Default` will be used.

- `EvaluateAs` - Indicates which schema version to process as.  This will filter the keywords of a schema based on their support.  This means that if any keyword is not supported by this version, it will be ignored.  This will need to be set when you create the options.
- `SchemaRegistry` - Provides a way to register schemas only for the evaluations that use this set of options.
- `ValidateAgainstMetaSchema` - Indicates whether the schema should be validated against its `$schema` value (its meta-schema).  This is not typically necessary.  Note that the evaluation process will still attempt to resolve the meta-schema. \*
- `OutputFormat` - You already read about output formats above.  This is the property that controls it all.  By default, a single "flag" node is returned.  This also yields the fastest evaluation times as it enables certain optimizations.
- `RequireFormatValidation` - Forces `format` validation.
- `OnlyKnownFormats` - Limits `format` validation to only those formats which have been registered through `Formats.Register()`.  Unknown formats will fail validation.
- `ProcessCustomKeywords` - For schema versions which support the vocabulary system (i.g. 2019-09 and after), allows custom keywords to be processed which haven't been included in a vocabulary.  This still requires the keyword type to be registered with `SchemaRegistry`.
- `PreserveDroppedAnnotations` - Adds a `droppedAnnotations` property to the output nodes for subschemas that fail validation.
- `IgnoredAnnotations` - Gets the set of annotations that will be excluded from the output.

_\* If you're using a custom meta-schema, you'll need to load it per the [Schema Registration](json-schema#schema-registration) section below.  Custom meta-schemas form a chain of meta-schemas (e.g. your custom meta-schema may reference another which references the draft 2020-12 meta-schema).  Ultimately, the chain MUST end at a JSON-Schema-defined meta-schema as this defines the processing rules for the schema.  An error will be produced if the meta-schema chain ends at a meta-schema that is unrecognized._

### Annotation management {#annotation-mgmt}

Several in the JSON Schema community have raised issues that collecting annotations can be costly in both memory consumption and time.  As such, one proposal has been to allow for filtering which annotation are collected and reported in the output.

> Some annotations, like those for `properties`, are still collected but not reported as they are required for other keywords, like `unevaluatedProperties`, to operate.
{: .prompt-info }

By default, all annotations are collected.

The following methods allow you to manage the set of annotations to collect and report.

- `.IgnoreAnnotationsFrom<T>()` - Ignores annotations from the specified keyword.
- `.IgnoreAllAnnotations()` - Ignores all annotations.
- `.ClearIgnoredAnnotations()` - Clears the "ignore" set and collects all annotations.
- `.CollectAnnotationsFrom<T>()` - Collects annotations from the specified keyword.

These methods make it easy to either ignore or collect annotations from a single or a few keywords.

For example, to ignore `title` annotations:

```c#
options.IgnoreAnnotationsFrom<TitleKeyword>();
```

Or to only collect `title` annotations:

```c#
options.IgnoreAllAnnotations();
options.CollectAnnotationsFrom<TitleKeyword>();
```

# Managing references (`$ref`) {#schema-ref}

By default, *JsonSchema.Net* handles all references as defined in the draft 2020-12 version of the JSON Schema specification.  What this means for draft 2019-09 and later schemas is that `$ref` can now exist alongside other keywords; for earlier versions (i.e. Drafts 6 and 7), keywords as siblings to `$ref` will be ignored.

## Schema resolution {#schema-ref-resolution}

In order to resolve references more quickly, *JsonSchema.Net* maintains two registries for all schemas and identifiable subschemas that it has encountered.  The first is a global registry, and the second is a local registry that is contained in the options and is passed around on the evaluation context.  If a schema is not found in the local registry, it will automatically search the global registry.

A `JsonSchema` instance will automatically register itself with the local registry upon calling `Evaluate()`.  However, there are some cases where this may be insufficient.  For example, in cases where schemas are separated across multiple files, it is necessary to register the schema instances prior to evaluation.

For example, given these two schemas

```json
{
  "$id": "http://localhost/my-schema",
  "type": "object",
  "properties": {
    "refProp": { "$ref": "http://localhost/random-string" }
  }
}

{
  "$id": "http://localhost/random-string",
  "type": "string"
}
```

Here's the schema with an inline declaration:

```c#
var schema = new JsonSchemaBuilder()
    .Id("http://localhost/my-schema")
    .Type(SchemaValueType.Object)
    .Properties(("refProp", new JsonSchemaBuilder().Ref("http://localhost/random-string")))
    .Build();
```

You must register `random-string` before you attempt to evaluate with `my-schema`.

```c#
var randomString = JsonSchema.FromFile("random-string.json");
SchemaRegistry.Global.Register(new Uri("http://localhost/random-string"), randomString);
```

Now _JsonSchema.Net_ will be able to resolve the reference.

> `JsonSchema.FromFile()` automatically sets the schema's base URI to the file path.  If you intend to use file paths in your references (e.g. `file:///C:\random-string.json`), then just register the schema without passing a URI:
>
> ```c#
> SchemaRegistry.Global.Register(randomString);
> ```
{: .prompt-warning}

## Resolving embedded schemas {#schema-embedded-schemas}

In addition to schemas, other identifiable documents can be registered.  For example, Open API documents _contain_ schemas but are not themselves schemas.  Additionally, references between schemas within these documents are relative to the document root.  Registering the Open API document will allow these references to be resolved.

A type may be registered if it implements `IBaseDocument`.  For convenience, `JsonNodeBaseDocument` is included to support general JSON data.

To create referenceable JSON data, simply create a `JsonNodeBaseDocument` wrapper for it and pass the data along with the URI that will be used to identify it.

```c#
var json = JsonNode.Parse(@"{
  ""foo"": 42,
  ""schema"": { ""type"": ""string"" }
}");

var referenceableJson = new JsonNodeBaseDocument(json, "http://localhost/jsondata");
SchemaRegistry.Global.Register(referenceableJson);

var schema = new JsonSchemaBuilder()
    .Ref("http://localhost/jsondata#/schema")
    .Build();
```

With the JSON document registered, the reference can resolve properly.

## Automatic resolution {#schema-ref-fetch}

In order to support scenarios where schemas cannot be registered ahead of time, the `SchemaRegistry` class exposes the `Fetch` property which is defined as `Func<Uri, JsonSchema>`.  This property can be set to a method which downloads the content from the supplied URI and deserializes it into a `JsonSchema` object.

The URI that is passed may need to be transformed, based on the schemas you're dealing with.  For instance if you're loading schemas from a local filesystem, and the schema `$ref`s use relative paths, you may need to prepend the working folder to the URI in order to locate it.

## Bundling

JSON Schema can be bundled so that they include all of their referenced documents.  This process can make sharing schemas significantly easier as only a single file need to be shared.

This library bundles schemas by collecting all of the referenced documents along with the root schema into a new schema's `$defs` keyword, then adding a `$ref` to the definition for the root schema.

For example, given this root and external schema:

```jsonc
// root
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-everything.net/foo",
  "type": "object",
  "properties": {
    "bar": {
      "$ref": "bar"
    }
  }
}

// external
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-everything.net/bar",
  "type": "string"
}
```

calling `schema.Bundle()`

```c#
var bundled = rootSchema.Bundle();
```

generates the following bundled schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-everything.net/foo(bundled)",
  "$defs": {
    "26f6f0d167": {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://json-everything.net/foo",
      "type": "object",
      "properties": {
        "bar": {
          "$ref": "bar"
        }
      }
    },
    "c6e748adb1": {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://json-everything.net/bar",
      "type": "string"
    }
  },
  "$ref": "https://json-everything.net/foo"
}
```

> This process requires that all external documents are registered or automatic resolution be enabled.
{: .prompt-info }

## Customizing error messages {#schema-errors}

The library exposes the `ErrorMessages` static type which includes read/write properties for all of the error messages.  Customization of error messages can be achieved by setting these properties.

### Templates {#schema-error-templates}

Most of the error messages support token replacement.  Tokens will use the format `[[foo]]` and will be replaced by the JSON serialization of the associated value.

For example, the default message for `minimum` is:

```
[[received]] is less than or equal to [[limit]]
```

In this case, `[[received]]` will be replaced by the value in the JSON instance, and `[[limit]]` will be replaced by the value of the `minimum` keyword.  This results in a message similar to:

```
5 is less than or equal to 10
```

> Since this example uses numbers, they appear without any particular formatting as this is how numbers serialize into JSON.  Similarly, strings will render surrounded by double quotes, `true`, `false`, and `null` will appear using those literals, and more complex values like object and arrays will be rendered in their JSON representation.
{: .prompt-info }

### Localization {#schema-error-localization}

In addition to customization, using resource files enables support for localization.  The default locale is determined by `CultureInfo.CurrentCulture` and can be overridden by setting the `ErrorMessages.Culture` static property.

```c#
ErrorMessages.Culture = CultureInfo.GetCultureInfo("es");
```

If you need to change the culture setting for an individual evaluation, you can do that by setting the `Culture` evaluation option, which will override the static setting.

```c#
var options = new EvaluationOptions
{
    Culture = CultureInfo.GetCultureInfo("es")
}
```

Currently available translations are:

| Language | Culture Code | Nuget package |
|:-|:-:|:-:|
|Italian|`it`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.it) |
|Norwegian|`nb-NO`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.nb-NO) |
|Polish|`pl-PL`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.pl-PL) |
|Russian|`ru`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.ru) |
|Spanish|`es`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.es) |
|German|`de`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.de) |
|Swedish|`sv-SE`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.sv-SE) |
|Turkish|`tr-TR`| ![NuGet Version](https://img.shields.io/nuget/v/JsonSchema.Net.tr-TR) |

PRs are welcome to help create additional translations.

> For languages to become available, you need to add extra dependencies on the specific nuget packages.
{: .prompt-info }
