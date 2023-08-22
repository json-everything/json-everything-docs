---
layout: page
title: Generating Code from JSON Schema
bookmark: Basics
permalink: /schema/:title/
icon: fas fa-tag
order: "1.6.1"
---
*JsonSchema.Net.CodeGeneration* is a tool that can create C# code from JSON Schemas.

For example, given the schema:

```json
{
  "title": "MyObject",
  "type": "object",
  "properties": {
    "Foo": { "type": "string" }
  }
}
```

it can generate a C# class like

```c#
public class MyObject
{
    public string Foo { get; set; }
}
```

## Capabilities {#schema-codegen-capabilities}

The code generation is currently quite basic.  It will generate types for simple custom objects and any named array or dictionary type.

`$ref` is generally supported, even for recursive models like linked lists and binary trees, however there is no loop detection, so if you do something like this:

```json
{
  "$ref": "#"
}
```

you'll just get a stack overflow exception.  That's on you.  Don't do that.

### Built-in types

Built-in types, like strings and arrays, are supported by reference only.  These generally will not have type declarations generated for them, however they can appear as types used within other declarations.  For example, `string` in the example above is used for the `Foo` property, but there isn't a `string` type declaration included in the output because the type is built-in.

There is an exception to this behavior for arrays and dictionaries, which is explained [below](#including-a-name).

## Usage

There is currently limited support for translating JSON Schema into code.  However there is ongoing discussion for an official [JSON Schema code generation vocabulary](https://github.com/json-schema-org/vocab-idl).  Please feel free to read up and join in on the effort there.

Currently, the class name is derived from the `title` keyword.  There is an open issue in the repository above to discuss using this keyword.  It's currently leaning toward the vocabulary defining a custom keyword, but as nothing has been decided yet, `title` is used here for now.

### Custom objects

Generating for custom objects is the real power behind code generation.  Being able to read a schema produced by some other developer (e.g. from an OpenAPI document) and automatically create types can save developers a lot of time.

This library generates custom types for schemas that declare an `object` type and include `title` and `properties` without `additionalProperties`.  It will also automatically generate types found nested in the schema.  For example

```json
{
  "title": "MyCustomObject",
  "type": "object",
  "properties": {
    "Foo": { "type": "string" },
    "Bar": {
      "title": "Bar",
      "type": "object",
      "properties": {
        "Baz": { "type": "integer" }
      }
    }
  }
}
```

generates

```c#
public class MyCustomObject
{
    public string Foo { get; set; }
    public Bar Bar { get; set; }
}

public class Bar
{
    public int Baz { get; set; }
}
```

There is some basic duplicate definition detection that serves two purposes:

1. It avoids creating multiple declarations for the same type.  For example, if `Foo` had `Bar1` and `Bar2` properties, only one `Bar` declaration would be generated.  Ideally this kind of duplication should be defined in the schema using a `$ref`.
2. It prevents creating multiple types with the same name.  For example, if there are two subschemas with the same name that define two different types, an exception would be thrown indicating the name re-use.

For type and property naming, some basic string transformation occurs:

| Original | Transformed |
|:-|:-|
| `kebab-case` | `KebabCase` |
| `snake_case` | `SnakeCase` |
| `spaced words` |`SpacedWords` |
| `words-with-2-numbers` | `WordsWith2Numbers` |
| `just-a-letter` | `JustALetter` |

Anything other conventions will likely result in undesirable code output or an exception.

### Arrays

When a schema declares an `array` type and includes an `items` keyword (in the single schema form, not an array of schemas), an array is used.

```json
{
  "type": "array",
  "items": {
    "type": "integer"
  }
}
```

produces no declaration, but using this schema (e.g. to define object properties) appears as

```c#
int[]
```

### Dictionaries

When a schema declares an `object` type and only includes `additionalProperties` without `properties`, this models a dictionary.

```json
{
  "title": "MyIntDictionary",
  "type": "object",
  "additionalProperties": {
    "type": "integer"
  }
}
```

This also produces no declaration, but using the schema appears as

```c#
Dictionary<string, int>
```

### Including a name on basic types {#including-a-name}

When you have an array or dictionary schema with a `title` keyword

```json
{
  "title": "MyIntArray",
  "type": "array",
  "items": {
    "type": "integer"
  }
}
```

or 

```json
{
  "title": "MyIntDictionary",
  "type": "object",
  "additionalProperties": {
    "type": "integer"
  }
}
```

you now get a type declaration inheriting from `List<T>`

```c#
public class MyIntArray : List<int> {}
```

and `Dictionary<TKey, TValue>`

```c#
public class MyIntDictionary : Dictionary<string, int> {}
```

and usages will correctly appear as `MyIntArray` and `MyIntDictionary`, respectively.

Other basic types (e.g. strings) will ignore the `title` keyword as these types cannot be inherited.
