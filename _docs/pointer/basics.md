---
layout: page
title: JsonPointer.Net Basics
md_title: _JsonPointer.Net_ Basics
bookmark: JSON Pointer
permalink: /pointer/:title/
icon: fas fa-tag
order: "04.1"
---
[JSON Pointer](https://tools.ietf.org/html/rfc6901) is a syntax that allows you to isolate a single element within a JSON document by navigating down a series of object properties and array indices.

## Syntax {#pointer-syntax}

The syntax is really simple:

```
/objects/and/3/arrays
```

This pointer has four segments.  Each segment specifies either an object property or, if the segment is a number, an array index.  Interestingly, the `3` above could be either an object property *or* an array index.  There's nothing about the pointer that specifies a distinction.  It will resolve for both of these documents:

```json
{
  "objects": {
    "and": [
      "item zero",
      null,
      2,
      {
        "arrays": "found me"
      }
    ]
  }
}

{
  "objects": {
    "and": {
      "3": {
        "arrays": "found me"
      }
    }
  }
}
```

If a property contains a `/`, it must be escaped by replacing it with `~1`.  Additionally, the escape character `~` must be escaped by replacing it with `~0`.

It also supports a URL format, which is essentially the same thing, except that it starts with a `#`, then followed by the standard pointer.  This format also will `%`-encode any URL-reserved characters, like `=` and `?`.

## In code {#pointer-in-code}

The `JsonPointer` class is the model for JSON Pointer.

There are three ways create pointers:

- parsing with either `Parse()` or `TryParse()`
  ```c#
  var pointer = JsonPointer.Parse("/objects/and/3/arrays");
  ```
- building with `Create()` and supplying the segments explicitly
  ```c#
  var pointer = JsonPointer.Create("object", "and", 3, "arrays");
  ```
- building with `Create<T>()` and supplying a LINQ expression (also see [below](#linq))
  ```c#
  var pointer = JsonPointer.Create<MyObject>(x => x.objects.and[3].arrays);
  ```

All of these options will give you an instance of the model that can be used to evaluate JSON data.

```c#
using var element = JsonDocument.Parse("{\"objects\":{\"and\":[\"item zero\",null,2,{\"arrays\":\"found me\"}]}}");
var result = pointer.Evaluate(element);
// result contains a JsonElement with a "found me" value
```

or

```c#
var element = JsonNode.Parse("{\"objects\":{\"and\":[\"item zero\",null,2,{\"arrays\":\"found me\"}]}}");
var success = pointer.TryEvaluate(element, out var result);
// success is true
// result contains a JsonNode with a "found me" value
```

> The designers of the `JsonNode` API have elected (for [reasons](https://github.com/dotnet/designs/blob/40794be63ecd8b35e9596412050a84dedd575b99/accepted/2020/serializer/WriteableDomAndDynamic.md#missing-vs-null) I [disagree](https://github.com/dotnet/runtime/issues/66948#issuecomment-1080148457) with) to consider JSON null and .Net null to be equivalent.  This goes against both my personal experience building Manatee.Json and the `JsonElement` API, both of which maintain a separation between these two null concepts.  Because of the unified design, it's impossible to determine whether a returned `JsonNode` value of `null` represents a value that is present but null or it is merely absent from the data.  To accommodate this, the evaluation method can only support the familiar `TryParse()` signature.  A return of `true` indicates the value was found, and `false` indicates it was not.  In the case of a `true` return, `result` may still be null, indicating the value was found and was a JSON null.
{: .prompt-info }

### Building pointers using Linq expressions {#linq}

When building a pointer using the `Create<T>()` method which takes a Linq expression, there are a couple of things to be aware of.

First, JSON Pointer supports using `-` as a segment to indicate the index beyond the last item in an array.  This has several use cases including creating a JSON Patch to add items to arrays.

Secondly, you have some name transformation options at your disposal.

The first way to customize your pointer is by using the `[JsonPropertyName]` attribute to provide a custom name.  Since this attribute controls how System.Text.Json serializes the property, this attribute will override any other options.

The second way to customize your pointer is by providing a `PointerCreationOptions` object as the second parameter.  Currently there is only the single option: `PropertyNamingResolver`.  This property is a function that takes a `MemberInfo` and returns the string to use in the pointer.  Several presets have been created for you and are available in the `PropertyNamingResolvers` static class:

| Name | Summary |
|---|---|
| **AsDeclared** | Makes no changes. Properties are generated with the name of the property in code. |
| **CamelCase** | Property names to camel case (e.g. `camelCase`). |
| **KebabCase** | Property names to kebab case (e.g. `Kebab-Case`). |
| **PascalCase** | Property names to pascal case (e.g. `PascalCase`). |
| **SnakeCase** | Property names to snake case (e.g. `Snake_Case`). |
| **UpperKebabCase** | Property names to upper kebab case (e.g. `UPPER-KEBAB-CASE`). |
| **UpperSnakeCase** | Property names to upper snake case (e.g. `UPPER_SNAKE_CASE`). |

## Relative JSON Pointers {#pointer-relative}

[JSON Hyperschema](https://datatracker.ietf.org/doc/draft-handrews-json-schema-hyperschema/) relies on a variation of JSON Pointers called [Relative JSON Pointers](https://tools.ietf.org/id/draft-handrews-relative-json-pointer-00.html) that also includes the number of parent and/or array-index navigations.  This allows the system to start at an internal node in the JSON document and navigate to another node potentially on another subtree.

Relative JSON Pointers are implemented with the `RelativeJsonPointer` struct.  Interactions with this struct are very similar to `JsonPointer`.

Since evaluation of these pointers require parent navigation, a feature which is [unsupported by `JsonElement`s](https://github.com/dotnet/runtime/issues/40452), only the `JsonNode`s can be processed.

## Ahead of Time (AOT) compatibility {#aot}

_JsonPointer.Net_ v4 includes updates to support [Native AOT applications](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).  However because everything in this library is handled via parsing and direct-to-string output, you don't need to do anything.

You're done.  Congratulations.
