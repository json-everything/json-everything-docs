---
layout: "page"
title: "MultipleOfKeyword Class"
bookmark: "MultipleOfKeyword"
permalink: "/api/JsonSchema.Net/:title/"
0.01.111"
---
**Namespace:** Json.Schema

**Inheritance:**
`MultipleOfKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `multipleOf`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The expected divisor of a value. |

## Constructors

### MultipleOfKeyword(decimal value)

Creates a new **Json.Schema.MultipleOfKeyword**.

#### Declaration

```c#
public MultipleOfKeyword(decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The expected divisor of a value. |


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

