---
layout: page
title: Mini-Meta-Schema Reference
permalink: /schema/codegen/:title/
icon: fas fa-tag
order: "01.6.3"
---

This page serves as a reference to the mini-meta-schemas that are used to identify the supported patterns.

Exactly one of these meta-schemas must match in order for code generation to work.  In the event that none or more than one match, an `UnsupportedSchemaException` will be thrown with the evaluation results (typed as `EvaluationResults`) contained in the `.Data` dictionary under the `"validation"` key.  This should help determine what's wrong with the schema if you expect it to be supported.

> The full evaluation results are included.  It's impossible for the system to determine what you intended to do, so rather than make a guess and accidentally remove important information, it just returns _all_ of the information.  This means that there are likely going to be a lot of error messages, and it will be up to you to figure out which ones are pertinent based on which pattern you expected to match.
{: .prompt-info }

In reading these schemas, remember that they are also _describing_ schemas.

## Overall design

The root schema used for validation is basically just a switch that allows for one of the known patterns to be supported.

```json
{
  "$id": "schema:json-everything:codegen:supported",
  "oneOf": [
    { "$ref": "schema:json-everything:codegen:ref" },
    { "$ref": "schema:json-everything:codegen:string" },
    { "$ref": "schema:json-everything:codegen:integer" },
    { "$ref": "schema:json-everything:codegen:number" },
    { "$ref": "schema:json-everything:codegen:boolean" },
    { "$ref": "schema:json-everything:codegen:enum" },
    { "$ref": "schema:json-everything:codegen:array" },
    { "$ref": "schema:json-everything:codegen:openObject" },
    { "$ref": "schema:json-everything:codegen:closedObject" },
    { "$ref": "schema:json-everything:codegen:dictionary" }
  ]
}
```

Each of the items in the `oneOf` describe a single supported pattern.  Exactly one of these must match.  This meta-schema allows nested objects (e.g. arrays, dictionaries, and POCOs) to contain any supported type by declaring a reference to this abstraction.

In addition to the abstraction meta-schema above, there is also a base meta-schema that can be used by patterns which need to include a type name.  It also contains a definition for a "convertible string," which defines a regular expression for strings which can be converted into a programming-language-compatible name.

```json
{
  "$id": "schema:json-everything:codegen:base",
  "type": "object",
  "$defs": {
    "convertible-string": {
      "type": "string",
      "pattern": "^[a-zA-Z_-][a-zA-Z0-9 _-]*$"
    }
  },
  "properties": {
    "title": { "$ref": "#/$defs/convertible-string" },
    "$schema": true,
    "$id": true,
    "$defs": true
  }
}
```

In many cases, the schemas are open, so additional keywords can be added (such as `format` for a string schema).  Just make sure that you don't end up matching more than one pattern.

Whenever a 

## Simple types

The simple types are generally pretty easy: they really only need a `type` keyword.

```json
{
  "$id": "schema:json-everything:codegen:string",
  "title": "string",
  "type": "object",
  "properties": {
    "type": { "const": "string" }
  },
  "required": [ "type" ]
}
```

> `format` is planned for the future to generate types like `DateTime`.  For now, they're just strings.
{: .prompt-tip }

```json
{
  "$id": "schema:json-everything:codegen:integer",
  "title": "integer",
  "type": "object",
  "properties": {
    "type": { "const": "integer" }
  },
  "required": [ "type" ]
}
```

```json
{
  "$id": "schema:json-everything:codegen:number",
  "title": "number",
  "type": "object",
  "properties": {
    "type": { "const": "number" }
  },
  "required": [ "type" ]
}
```

```json
{
  "$id": "schema:json-everything:codegen:boolean",
  "title": "boolean",
  "type": "object",
  "properties": {
    "type": { "const": "boolean" }
  },
  "required": [ "type" ]
}
```

## Enumerations

[Programming language enumerations](https://github.com/json-schema-org/vocab-idl/issues/43) are generally sets of named constants.  However in JSON Schema, enumerations can be of any value type.  Thus the mini-meta-schema for enumerations needs to further constrain the `enum` keyword to only (convertible) strings.

```json
{
  "$id": "schema:json-everything:codegen:enum",
  "title": "enumeration",
  "$ref": "schema:json-everything:codegen:base",
  "properties": {
    "enum": {
      "type": "array",
      "items": { "$ref": "schema:json-everything:codegen:base#/$defs/convertible-string" }
    }
  },
  "required": [ "enum" ],
  "unevaluatedProperties": false
}
```

## Arrays and dictionaries

Arrays and dictionaries are also pretty basic.  They just need a type and an item type.

```json
{
  "$id": "schema:json-everything:codegen:array",
  "title": "array",
  "$ref": "schema:json-everything:codegen:base",
  "properties": {
    "type": { "const": "array" },
    "items": { "$ref": "schema:json-everything:codegen:supported" }
  },
  "required": [ "type", "items" ]
}
```

Dictionaries are always string-keyed.  We explicitly disallow defined properties, instead opting for an open model using `additionalProperties`.

```json
{
  "$id": "schema:json-everything:codegen:dictionary",
  "title": "dictionary",
  "$ref": "schema:json-everything:codegen:base",
  "properties": {
    "type": { "const": "object" },
    "properties": false,
    "propertyNames": {
      "properties": { 
        "type": { "const": "string" }
      },
      "required": [ "type" ]
    },
    "additionalProperties": { "$ref": "schema:json-everything:codegen:supported" }
  },
  "required": [ "type", "additionalProperties" ]
}
```

## POCOs

These are your custom objects: DTOs and other models.  The schema must define an object with a number of properties.  Property names must be convertible strings.  It's also important to protect against a property that is both read-only and write-only.

There are two variants: open (inheritable) and closed (non-inheritable, or `sealed` in C#).  The open variant disallows `additionalProperties`, while the closed variant requires `additionalProperties` to be `false`.

```json
{
  "$id": "schema:json-everything:codegen:openObject",
  "title": "custom-object-open",
  "$ref": "schema:json-everything:codegen:base",
  "properties": {
    "type": { "const": "object" },
    "properties": {
      "type": "object",
      "propertyNames": { "$ref": "schema:json-everything:codegen:base#/$defs/convertible-string" },
      "additionalProperties": {
        "not": {
          "properties": {
            "readOnly": { "const": true },
            "writeOnly": { "const": true }
          },
          "required": [ "readOnly", "writeOnly" ]
        },
        "$ref": "schema:json-everything:codegen:supported"
      },
      "additionalProperties": false
    }
  },
  "required": [ "title", "type", "properties" ]
}
```

```json
{
  "$id": "schema:json-everything:codegen:closedObject",
  "title": "custom-object-closed",
  "$ref": "schema:json-everything:codegen:base",
  "properties": {
    "type": { "const": "object" },
    "properties": {
      "type": "object",
      "propertyNames": { "$ref": "schema:json-everything:codegen:base#/$defs/convertible-string" },
      "additionalProperties": {
        "not": {
          "properties": {
            "readOnly": { "const": true },
            "writeOnly": { "const": true }
          },
          "required": [ "readOnly", "writeOnly" ]
        },
        "$ref": "schema:json-everything:codegen:supported"
      },
      "additionalProperties": { "const": false }
    }
  },
  "required": [ "title", "type", "properties", "additionalProperties" ]
}
```

## References

References are only allowed if they're by themselves.  While JSON Schema supports `$ref` with siblings as of Draft 2019-09, the meaning of such constructs is unclear for code generation purposes.

```json
{
  "$id": "schema:json-everything:codegen:ref",
  "type": "object",
  "properties": {
    "$ref": true
  },
  "required": [ "$ref" ],
  "additionalProperties": false
}
```
