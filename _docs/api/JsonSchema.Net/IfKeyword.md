---
layout: "page"
title: "IfKeyword Class"
bookmark: "IfKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.072"
---
**Namespace:** Json.Schema

**Inheritance:**
`IfKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaContainer

Handles `if`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schema** | JsonSchema | The schema to match. |

## Constructors

### IfKeyword(JsonSchema value)

Creates a new **Json.Schema.IfKeyword**.

#### Declaration

```c#
public IfKeyword(JsonSchema value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonSchema | The schema to match. |


## Methods

### GetConstraint(SchemaConstraint schemaConstraint, ReadOnlySpan\<KeywordConstraint\> localConstraints, EvaluationContext context)

Builds a constraint object for a keyword.

#### Declaration

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint, ReadOnlySpan<KeywordConstraint> localConstraints, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| schemaConstraint | SchemaConstraint | The **Json.Schema.SchemaConstraint** for the schema object that houses this keyword. |
| localConstraints | ReadOnlySpan\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one.     Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

