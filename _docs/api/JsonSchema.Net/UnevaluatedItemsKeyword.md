---
layout: "page"
title: "UnevaluatedItemsKeyword Class"
bookmark: "UnevaluatedItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.168"
---
**Namespace:** Json.Schema

**Inheritance:**
`UnevaluatedItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaContainer

Handles `unevaluatedItems`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schema** | JsonSchema | The schema by which to evaluate unevaluated items. |

## Constructors

### UnevaluatedItemsKeyword(JsonSchema value)

Creates a new **Json.Schema.UnevaluatedItemsKeyword**.

#### Declaration

```c#
public UnevaluatedItemsKeyword(JsonSchema value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonSchema | The schema by which to evaluate unevaluated items. |


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

