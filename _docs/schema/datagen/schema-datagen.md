---
layout: page
title: Generating Sample JSON Data from a Schema
bookmark: Basics
permalink: /schema/datagen/:title/
icon: fas fa-tag
order: "01.07.1"
---
*JsonSchema.Net.DataGeneration* is a tool that can create JSON data instances using a JSON schema as a framework.

For example, given the schema:

```json
{
  "type": "object",
  "properties": {
    "foo": { "type": "string" }
  }
}
```

it can generate a JSON document like

```json
{
  "foo": "bar"
}
```

Under the covers, the library uses the fabulous [Bogus](https://github.com/bchavez/Bogus) library, which is commonly used to generate random test data, and a few other tricks.

## Use Cases {#schema-datagen-use-cases}

### Schema Debugging {#schema-datagen-debugging}

One of the more practical uses of a data generator is checking whether a schema actually says what you think it says.  The generator just follows the rules, so if the output looks wrong, the schema isn't strict enough.

#### Missing `required` {#schema-datagen-debug-required}

Suppose you want a user record that always has a `username`:

```json
{
  "type": "object",
  "properties": {
    "username": { "type": "string" },
    "email":    { "type": "string", "format": "email" }
  }
}
```

`properties` only describes what a property looks like _if it shows up_.  It doesn't make the property show up.  So the generator is perfectly happy producing:

```json
{}
```

or

```json
{ "email": "someone@example.com" }
```

Both are valid.  Adding `"required": ["username"]` is what actually makes `username` mandatory, and the generator will reflect that.

#### Overly Permissive Types {#schema-datagen-debug-types}

A schema for an age field written as:

```json
{ "type": "number" }
```

will cheerfully produce `3.14` or `-7.9`.  Those are valid numbers, just not valid ages.  The schema should be:

```json
{
  "type": "integer",
  "minimum": 0,
  "maximum": 130
}
```

#### `additionalProperties` Surprises {#schema-datagen-debug-additional}

Without `"additionalProperties": false`, the generator can (and will) tack on extra properties beyond whatever is listed in `properties`:

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "integer" }
  }
}
```

might produce:

```json
{
  "id": 42,
  "xQ7": true,
  "lorem": "ipsum dolor"
}
```

If you only want `id`, say so with `"additionalProperties": false`.

## Capabilities {#schema-datagen-capabilities}

This library is quite powerful.  It supports most JSON Schema keywords, including `if`/`then`/`else` and aggregation keywords (`oneOf`, `allOf`, etc.).

It currently does not support:

- `$dynamicRef`
- annotation / metadata keywords (e.g. `title`, `description`)
- `content*` keywords
- `dependencies` / `dependent*` keywords

Everything else _should_ be mostly supported.  Feel free to [open an issue](https://github.com/gregsdennis/json-everything/issues/new/choose) if you find something isn't working as you expect.

> `$ref` support does not check for infinite loops such as occur with schemas like `{ "$ref": "#" }`.  If your schema includes a reference like this, a stack overflow exception is likely.
{: .prompt-warning }

### Strings {#schema-datagen-strings}

Without any additional parameters, string generation uses Bogus's Lorem Ipsum generator to create some nice (but oddly readable) garbage text.

#### `format` {#schema-datagen-format}

All of the formats listed in the draft 2020-12 specification are supported, at least to the extent that they can be validated by _JsonSchema.Net_.

If a format is specified, it will be used.

#### `pattern` {#schema-datagen-pattern}

Regular expressions specified via `pattern` support combined constraint evaluation, including scenarios where multiple required patterns must be satisfied together.

Supported scenarios include:

- multiple `pattern` constraints across composed schemas
- forbidden patterns via `not`
- interactions between `pattern` and `minLength`/`maxLength`
- interactions between `pattern` and `format`

Some highly complex or mutually incompatible regex combinations may still be impossible to satisfy.  In those cases, generation fails with [detailed error information](#schema-datagen-error-reporting).

### Numerics {#schema-datagen-numbers}

Integer and number generation each have custom algorithms that produce values that align with minimums, maximums, multiples, and even anti-multiples (numbers that should _not_ be divisors).

For this schema, 

```json
{
  "type": "integer",
  "minimum": 0,
  "maximum": 100,
  "multipleOf": 4,
  "allOf": [
    {
      "not": {
        "minimum": 40,
        "maximum": 60
      },
      "not": {
        "multipleOf": 3
      }
    }
  ]
}
```

the only valid integers are

- either in \[0-39] or \[61-100]
- a multiple of 4
- not a multiple of 3

The library will generate such values with ease.

### Arrays & Objects {#schema-datagen-structured}

Care needs to be taken when specifying arrays that can have additional items or objects that can have additional properties.  This library will unsubtly create moderatly deep trees of data if allowed.

For example, this schema doesn't specify what the items should look like:

```json
{
  "type": "array"
}
```

So, the generator will happily create literally any JSON value for the items, including unconstrained objects and arrays.

To combat this, there are some built-in limitations:

- Item and property counts default to 0-10.
- Arrays and objects have a lower chance of generating than the simpler types (null, integer, number, string).

# Generating Data {#schema-datagen-generation}

All you need to generate data is a schema object.  This can be built inline or read in from an external source.  The instructions for that are on the "Overview" tab.

Once you have your schema object, simply call the `.GenerateData()` extension method, and it will return a result to you.

```c#
var schema = JsonSchema.FromFile("myFile.json");
var generationResult = schema.GenerateData();
var sampleData = generationResult.Result;
```

The result object has several properties:

- `IsSuccess` indicates whether the system was able to generate a value
- `Result` holds the value as a `JsonElement`, if successful
- `ErrorMessage` holds any error message, if unsuccessful
- `InnerResults` holds result objects from nested generations.  This can be useful for debugging.
- `Location` (if available) identifies where generation failed in the target instance, as a `JsonPointer`
- `SchemaLocations` (if available) identifies one or more schema locations related to the failure, also as `JsonPointer`s

## Error Reporting {#schema-datagen-error-reporting}

When generation fails, start with the top-level `GenerationResult` returned by `.GenerateData()`:

- If `IsSuccess` is `false`, inspect `ErrorMessage` and `InnerResults`.
- `InnerResults` contains nested failures from branches, properties, array items, or composed schemas.
- Leaf failures can provide:
  - `Location` for the relative instance path that failed
  - `SchemaLocations` for the schema path(s) involved in that failure

In practice, a single generation failure can contain multiple nested reasons.  Walking the `InnerResults` tree is the best way to produce a full error report.

```c#
void PrintFailures(GenerationResult result, string indent = "")
{
    if (result.IsSuccess) return;

    if (!string.IsNullOrWhiteSpace(result.ErrorMessage))
    {
        Console.WriteLine($"{indent}Reason: {result.ErrorMessage}");
        if (result.Location != null)
            Console.WriteLine($"{indent}At: {result.Location}");

        if (result.SchemaLocations is { Count: > 0 })
        {
            Console.WriteLine($"{indent}Schema path(s):");
            foreach (var schemaLocation in result.SchemaLocations)
                Console.WriteLine($"{indent}- {schemaLocation}");
        }
    }

    if (result.InnerResults == null) return;
    foreach (var inner in result.InnerResults)
        PrintFailures(inner, indent + "  ");
}

var schema = JsonSchema.FromFile("myFile.json");
var generationResult = schema.GenerateData();

if (!generationResult.IsSuccess)
    PrintFailures(generationResult);
```

# Summary {#schema-datagen-summary}

So, uh, yeah.  I guess that's it really.

Happy generating.
