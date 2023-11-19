---
layout: "page"
title: "ExclusiveMaximumKeyword Class"
bookmark: "ExclusiveMaximumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.033"
---
**Namespace:** Json.Schema

**Inheritance:**
`ExclusiveMaximumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `exclusiveMaximum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The maximum value. |

## Constructors

### ExclusiveMaximumKeyword(decimal value)

Creates a new **Json.Schema.ExclusiveMaximumKeyword**.

#### Declaration

```c#
public ExclusiveMaximumKeyword(decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The maximum value. |


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

