---
layout: "page"
title: "PrefixItemsKeyword Class"
bookmark: "PrefixItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.125"
---
**Namespace:** Json.Schema

**Inheritance:**
`PrefixItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaCollector

Handles `items`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **ArraySchemas** | IReadOnlyList\<JsonSchema\> | The collection of schemas for the "schema array" form. |

## Constructors

### PrefixItemsKeyword(params JsonSchema[] values)

Creates a new **Json.Schema.PrefixItemsKeyword**.

#### Declaration

```c#
public PrefixItemsKeyword(params JsonSchema[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonSchema[] | The collection of schemas for the "schema array" form. |


#### Remarks

Using the `params` constructor to build an array-form `items` keyword with a single schema
will confuse the compiler.  To achieve this, you'll need to explicitly specify the array.

### PrefixItemsKeyword(IEnumerable\<JsonSchema\> values)

Creates a new **Json.Schema.PrefixItemsKeyword**.

#### Declaration

```c#
public PrefixItemsKeyword(IEnumerable<JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonSchema\> | The collection of schemas for the "schema array" form. |


## Methods

### GetConstraint(SchemaConstraint schemaConstraint, IReadOnlyList\<KeywordConstraint\> localConstraints, EvaluationContext context)

Builds a constraint object for a keyword.

#### Declaration

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint, IReadOnlyList<KeywordConstraint> localConstraints, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| schemaConstraint | SchemaConstraint | The **Json.Schema.SchemaConstraint** for the schema object that houses this keyword. |
| localConstraints | IReadOnlyList\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one. Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

