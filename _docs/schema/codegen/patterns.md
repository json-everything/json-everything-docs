---
layout: page
title: Supported Patterns
permalink: /schema/codegen/:title/
icon: fas fa-tag
order: "01.6.2"
---

This page gives more technical information on the various schema patterns that are supported by the code generation functionality.

In general, these patterns are minimum requirements.  Additional keywords may be present (unless otherwise specified), but will not affect code generation.

Exactly one of these patterns must be followed for generation to occur.  If none of the patterns match, or if you manage to match more than one, an `UnsupportedSchemaException` will be thrown.

## POCOs

POCOs, or Plain Ol' CLR Objects, will likely be the most common type that you're looking to generate.  These are your primary custom data models.

In order to generate a POCO, there are a number of keywords that you need to provide:

- `type` - Must be `"object"`
- `title` - Becomes the name of the type
- `properties` - Lists any properties

For each of the properties, `readOnly` and `writeOnly` are individually supported to generate that property as read-only (no setter) or write-only (no getter), but both can't be `true`.

Including `additionalProperties` with a value of `false` will generate a sealed class.  Omit `additionalProperties` to generate an open class that can be inherited.

Further discussion on how custom objects can be supported in JSON Schema code generation can be found [here](https://github.com/json-schema-org/vocab-idl/issues/46).

## Enumerations

In JSON Schema, the `enum` keyword can support values of any JSON type.  However in .Net, enumerations are represented by named numeric constants.  Thus, enumeration generation is only supported when the values of `enum` are all strings.

The underlying numeric values for each enum name are the default values when numbers aren't provided in the C# code: start with 0 and increment 1 for each name.

Enumerations require the `enum` keyword and the `title` keyword.

Further discussion on how enumerations can be supported in JSON Schema code generation can be found [here](https://github.com/json-schema-org/vocab-idl/issues/43).

## Simple and built-in types

Booleans (`"type": "boolean"`), numbers (`"type": "number"` and `"type": "integer"`), and strings (`"type": "string"`) are all supported using types that are built into .Net.  As such, these are supported, but in type only.  Validations on their values will not generate the associated attributes.

## Arrays

JSON arrays have two levels of support, and it depends on whether `title` is included.

When `title` is not included in the schema, no type declaration will be generated.  Any time the type is used, it will be written as a simple array of the contained type, e.g. `int[]` for an array of integers.

When `title` is included in the schema, a class declaration will be written, inheriting from `List<T>`.

To match as an array, you'll need the following:

- `title` (_optional_) - Becomes the name of the type
- `type` - Must be `"array"`
- `items` - The type of the contents

Only the single schema form of `items` is supported; not the array form (which has been moved to `prefixItems` in recent JSON Schema versions).

## Dictionaries

JSON objects must be keyed by strings, but they are dynamic in that they can contain any keys.  If this is the kind of data you're dealing with, then a string-keyed dictionary may be the right choice instead of a POCO.

To match a dictionary, you'll need:

- `title` (_optional_) - Becomes the name of the type
- `type` - Must be `"object"`
- `propertyNames` - Must have `"type": "string"`, but other keywords may be present
- `additionalProperties` - The type of the contents

Like arrays, `title` is optional.  When present, a class declaration will be generated, deriving from `Dictionary<string, T>`.  When absent, no declaration will be generated, and usages will simply be the dictionary type.

## Reference schemas

Referencing schemas allows you to define a type in one place (e.g. `$defs` or in a separate schema) and then use those types in multiple places (e.g. a property or array item).

Although the recent drafts of JSON Schema support `$ref` as a sibling to other keywords, it's not supported by the code generation.

The `$ref` keyword will be followed only if it is the only keyword in the schema.

```json
{
  "$ref": "https://my-example.com/schema"
}
```

