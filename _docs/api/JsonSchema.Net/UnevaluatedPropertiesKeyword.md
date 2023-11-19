---
layout: "page"
title: "UnevaluatedPropertiesKeyword Class"
bookmark: "UnevaluatedPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.105"
---
**Namespace:** Json.Schema

**Inheritance:**
`UnevaluatedPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaContainer

Handles `unevaluatedProperties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schema** | JsonSchema | The schema by which to evaluate additional properties. |

## Constructors

### UnevaluatedPropertiesKeyword(JsonSchema value)

Creates a new **Json.Schema.UnevaluatedPropertiesKeyword**.

#### Declaration

```c#
public UnevaluatedPropertiesKeyword(JsonSchema value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonSchema |  |


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

