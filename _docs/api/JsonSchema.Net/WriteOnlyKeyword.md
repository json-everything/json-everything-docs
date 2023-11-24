---
layout: "page"
title: "WriteOnlyKeyword Class"
bookmark: "WriteOnlyKeyword"
permalink: "/api/JsonSchema.Net/:title/"
0.01.182"
---
**Namespace:** Json.Schema

**Inheritance:**
`WriteOnlyKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `writeOnly`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | Whether the instance is read-only. |

## Constructors

### WriteOnlyKeyword(bool value)

Creates a new **Json.Schema.WriteOnlyKeyword**.

#### Declaration

```c#
public WriteOnlyKeyword(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | Whether the instance is read-only. |


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

