---
layout: page
title: JsonSchema.Net Basics
md_title: _JsonSchema.Net_ Basics
bookmark: Basics
permalink: /schema/:title/
icon: fas fa-tag
order: "01.01"
---
The occasion may arise when you wish to validate that a JSON object is in the correct form (has the appropriate keys and the right types of values), or perhaps you wish to annotate that data.  Enter JSON Schema.  Much like XML Schema with XML, JSON Schema defines a pattern for JSON data.  A JSON Schema validator can verify that a given JSON object meets the requirements as defined by the JSON Schema as well as provide additional information to the application about the data.  This evaluation can come in handy as a precursor step before deserializing.

More information about JSON Schema can be found at [json-schema.org](http://json-schema.org).

To support JSON Schema, *JsonSchema.Net* exposes the `JsonSchema` type.  This type is implemented as a list of keywords, each of which correspond to one of the keywords defined in the JSON Schema specifications.

> Keep this mantra in your head while using this library: **Build once; evaluate many times.**
{: .prompt-tip }

## Keywords {#schema-keywords}

JSON Schema is expressed as a collection of keywords, each of which provides a specific constraint on a JSON instance.  For example, the `type` keyword specifies what JSON type an instance may be, whereas the `minimum` keyword specifies a minimum numeric value *for only numeric data* (it will not apply any assertion to non-numeric values).  These keywords can be combined to express the expected shape of any JSON instance.  Once defined, the schema evaluates the instance, providing feedback on what errors occurred, including where in the instance and in the schema produced them.

_JsonSchema.Net_ implements keywords using singleton keyword handlers.  These handlers are responsible for validating that the keyword data is valid in the schema, building any subschemas, and instance evaluation.

## Versions, Meta-schemas, and Dialects {#schema-versions}

There are currently six versions of the JSON Schema specification that have known use:

- Draft 3
- Draft 4
- Draft 6
- Draft 7
- Draft 2019-09
- Draft 2020-12

The JSON Schema team recommends using draft 7 or 2020-12.  *JsonSchema.Net* supports draft 6 and later.

> The next version of JSON Schema, v1/2026, which is also supported by this library, is currently in development and will start a new era for the project which includes various backward- and forward-compatibility guarantees.  Have a read of the various discussions happening in the [JSON Schema GitHub org](https://github.com/json-schema-org) for more information.
{: .prompt-tip }

Each of these specification versions define a _dialect_.  A dialect is the specific group of keywords that a schema can use.  A dialect usually has a URI identifier.  A schema declares the dialect it's using by placing the dialect identifier in the `$schema` keyword.  Generally, though not required, a dialect will be accompanied by a meta-schema that uses the same URI in its `$id`.

A meta-schema is a special JSON Schema that syntactically describes all of the keywords available for the associated dialect.  They are intended to be used to validate other schemas.

Draft 2019-09 introduced the idea of vocabularies as re-usable collections of keywords, a kind of sub-dialect, if you will.  A vocabulary isn't a dialect on its own, but they can be combined to create a dialect, as 2019-09 is.  As part of this new feature, the meta-schemas for this version and those which follow it have been split into vocabulary-specific meta-schemas.

The specification recognizes that the meta-schemas aren't perfect and may need to be updated occasionally.  As such, the meta-schemas defined by this library will be updated to match, in most cases only triggering a patch release.
{: .prompt-info }

In _JsonSchema.Net_, dialects are supported through the `Dialect` class, which is instantiated using a URI identifier and the keywords supported by that dialect, and meta-schemas.  All of the dialects and meta-schemas assocated with supported JSON Schema specification versions are predefined by the library; you can also make your own.

Since keyword behavior has evolved over the various specification versions, each different behavior for a given keyword has its own keyword handler.  Customization of keyword behavior is done by creating new keyword handlers and supporting them through custom dialects.

# Building a schema {#schema-build}

This library follows a two-phase approach to JSON Schema evaluation: build then evaluate.  The build phase produces a abstract graph that represents the schema and attempts to resolve all references.  Schemas are built using a selection of options that can be passed to the build process using the `BuildOptions` object.  These options include the dialect you want to use and registries for schemas (to resolve references), dialects (for dialect auto-selection via `$schema`), and vocabularies (for handling 2019-09 and 2020-12 meta-schemas which declare a `$vocabulary` keyword).

There are two main ways to build a schema: parsing text into a `JsonElement` and passing it to `JsonSchema.Build()` and defining it inline using the fluent builder.  (Serialization is also an option, but the converter merely extracts a `JsonElement` and builds directly.)

> Because _JsonSchema.Net_ builds schemas directly from `JsonElement`, serialization has been mostly removed from the process of building schemas.  Where serialization is performed, this library and its extensions do include support for [Native AOT applications](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).
{: .prompt-info }

## Options

A schema is always based on the registries and dialect you provide it through the build options.

```c#
var buildOptions = new BuildOptions
{
    Dialect = Dialect.Draft202012,
    SchemaRegistry = new(),
    DialectRegistry = new(),
    VocabularyRegistry = new()
}
```

All of these properties are optional.

The dialect you choose determines which properties will be recognized as keywords.  The dialect also defines whether unknown keywords are allowed (the upcoming spec version will disallow unknown keywords) and whether `$ref` allows or ignores other keywords in the same schema object (drafts 6 & 7 cause `$ref` to ignore sibling keywords, so they're not processed).  The default dialect is managed by `Dialect.Default`; out of the box, it's V1 to prepare for the upcoming specification release, but until then, it's recommended you set the default to Draft 2020-12.

```c#
Dialect.Default = Dialect.Draft202012;
```

The registries are available so that you can keep your registrations separate or if you want to build the same schema under differing conditions.  This can come in handy for concurrency or other scenarios where you might encounter conflicts or you need to rebuild the same schema under differing conditions.  For most scenarios, you should be able to just use the global registries, which is the default.

The build process will automatically add itself to the schema registry provided by the options, or the global registry if no options are provided.  Additionally, because the registry disallows overwriting a registration, building the same schema twice using the same registry will throw an exception.

> If you're using a custom meta-schema, you'll need to load it per the [Schema Registration](json-schema#schema-registration) section below.  Custom meta-schemas form a chain of meta-schemas (e.g. your custom meta-schema may reference another which references the draft 2020-12 meta-schema).  Ultimately, the chain MUST end at a JSON-Schema-defined meta-schema as this defines the processing rules for the schema.  An error will be produced if the meta-schema chain ends at a meta-schema that is unrecognized.
{: .prompt-info }

## Via `JsonElement`

The simplest way to build a schema is through the `JsonSchema.Build()` static method.

```c#
var schemaJson = JsonDocument.Parse("""{"type": "object"}""").RootElement;
var schema = JsonSchema.Build(schemaJson); // optionally include build options
```

Building the schema this way will perform validation on the incoming schema data, handle building subschemas, and attempt to resolve references.  It resolves as much behavior as it can up front in order to keep the evaluation step as quick as possible.

Both this approach and the following inline approach will auto-register the schema in the schema registry provided by the options.

## Inline {#schema-inlining}

The `JsonSchemaBuilder` is a fluent approach to building schemas that uses a builder and extension methods to ensure that all keyword values are valid.  This is a more type-safe way to build schemas, but it can also be a bit more verbose.  The API has been crafted in an attempt to mimic the JSON representation of the schema.

The `JsonSchemaBuilder` class itself is pretty simple.  It just has an `.Add()` method which takes an instance of `IJsonSchemaKeyword`.  The real power comes from the multitudes of extension methods.  There's at least one for every keyword, and they all take the appropriate types for the data that the keyword expects.

Once you've added all of your properties, just call the `.Build()` method to get your schema object.

```c#
var builder = new JsonSchemaBuilder()
    // builder methods
    ;
var schema = builder.Build();
```

Both the `JsonSchemaBuilder` constructor and the `.Build()` method can take a `BuildOptions` parameter.  The options passed into the `.Build()` method takes priority over one passed into the constructor.

Here's an example of creating a simple schema using the builder.

```c#
JsonSchema schema = new JsonSchemaBuilder()
    .Schema(MetaSchemas.Draft202012Id)
    .Type(SchemaValueType.Object)
    .Properties(
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

>`JsonSchemaBuilder` defines an implicit cast to `JsonSchema` which calls the `.Build()` method with the default options.  To help things further, `JsonSchema` also defines implicit conversions from `bool`.  This allows you to simply use `true` and `false` to create their respective schemas.
{: .prompt-tip }

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
var emptyJson = JsonDocument.Parse("{}").RootElement;
var booleanJson = JsonDocument.Parse("""{"myProperty":false}""").RootElement;
var stringJson = JsonDocument.Parse("""{"myProperty":"some string"}""").RootElement;
var shortJson = JsonDocument.Parse("""{"myProperty":"short"}""").RootElement;
var numberJson = JsonDocument.Parse("""{"otherProperty":35.4}""").RootElement;
var nonObject = JsonDocument.Parse("\"not an object\"").RootElement;

var emptyResults = schema.Evaluate(emptyJson);
var booleanResults = schema.Evaluate(booleanJson);
var stringResults = schema.Evaluate(stringJson);
var shortResults = schema.Evaluate(shortJson);
var numberResults = schema.Evaluate(numberJson);
var nonObjectResults = schema.Evaluate(nonObject);
```

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

> In the upcoming JSON Schema v1 specification, `format` will validate by default.
{: .prompt-warning }

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

## Evaluation Options {#evaluation-options}

The `EvaluationOptions` class gives you a few configuration points for customizing how the evaluation process behaves.  It is an instance class and can be passed into the `JsonSchema.Evaluate()` method.  If no options are explicitly passed, a copy of `JsonSchemaOptions.Default` will be used.

- `OutputFormat` - You already read about output formats above.  This is the property that controls it all.  By default, a single "flag" node is returned.  This also yields the fastest evaluation times as it enables certain optimizations.
- `RequireFormatValidation` - Forces `format` validation.
- `PreserveDroppedAnnotations` - Adds a `droppedAnnotations` property to the output nodes for subschemas that fail validation.
- `AddAnnotationForUnknownKeywords` - Adds an `$unknownKeywords` annotation that lists the names of keywords in a subschema that were not known.
- `IgnoredAnnotations` - Gets the set of annotations that will be excluded from the output.
- `Cuture` - Sets the culture to be used for error messages.

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

In _JsonSchema.Net_ this sibling-keyword behavior is controlled by the dialect that's used during the build step.  For a new dialect, the default behavior is to allow sibling keywords to be processed.  This can be disabled by setting the `RefIgnoresSiblingKeywords` property to `true`.

## Schema resolution {#schema-ref-resolution}

In order to resolve references more quickly, *JsonSchema.Net* maintains two registries for all schemas and identifiable subschemas that it has encountered.  The first is a global registry, and the second is a local registry that is contained in the options and is passed around on the build context.  If a schema is not found in the local registry, it will automatically search the global registry.

A `JsonSchema` instance will automatically register itself with the local registry during the build step.  Generally, build order is important.  You want to build dependencies first.

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

You must build `random-string` before you build `my-schema`.

```c#
var randomString = JsonSchema.FromFile("random-string.json");
var mySchema = JsonSchema.FromFile("my-schema.json");
```

Now _JsonSchema.Net_ will be able to resolve the reference.

_JsonSchema.Net_ will automatically handle reference loops, where one schema references another in such a way that some later reference eventually references the first.

## Resolving embedded schemas {#schema-embedded-schemas}

In addition to schemas, other identifiable documents can be registered.  For example, Open API documents _contain_ schemas but are not themselves schemas.  Additionally, references between schemas within these documents are relative to the document root.  Registering the Open API document will allow these references to be resolved.

A type may be registered if it implements `IBaseDocument`.  For convenience, `JsonElementBaseDocument` is included to support general JSON data.

To create referenceable JSON data, simply create a `JsonElementBaseDocument` wrapper for it and pass the data along with the URI that will be used to identify it.

```c#
var json = JsonDocument.Parse(@"{
  ""foo"": 42,
  ""schema"": { ""type"": ""string"" }
}").RootElement;

var referenceableJson = new JsonElementBaseDocument(json, "http://localhost/jsondata");
SchemaRegistry.Global.Register(referenceableJson);

var schema = new JsonSchemaBuilder()
    .Ref("http://localhost/jsondata#/schema")
    .Build();
```

With the JSON document registered, the reference can resolve properly.

## Automatic resolution {#schema-ref-fetch}

In order to support scenarios where schemas cannot be registered ahead of time, the `SchemaRegistry` class exposes the `Fetch` property which is defined as `Func<Uri, SchemaRegistry, IBaseDocument?>`.  This property can be set to a method which downloads the content from the supplied URI and deserializes it into an `IBaseDocument` object.

The URI that is passed may need to be transformed, based on the schemas you're dealing with.  For instance if you're loading schemas from a local filesystem, and the schema `$ref`s use relative paths, you may need to prepend the working folder to the URI in order to locate it.

<!-- ## Bundling

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
{: .prompt-info } -->

# Customizing error messages {#schema-errors}

The library exposes the `ErrorMessages` static type which includes read/write properties for all of the error messages.  Customization of error messages can be achieved by setting these properties.

## Templates {#schema-error-templates}

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

## Localization {#schema-error-localization}

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
