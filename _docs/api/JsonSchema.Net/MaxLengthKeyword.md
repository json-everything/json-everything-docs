---
layout: "page"
title: "MaxLengthKeyword Class"
bookmark: "MaxLengthKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.099"
---
**Namespace:** Json.Schema

**Inheritance:**
`MaxLengthKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `maxLength`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The maximum expected string length. |

## Constructors

### MaxLengthKeyword(uint value)

Creates a new **Json.Schema.MaxLengthKeyword**.

#### Declaration

```c#
public MaxLengthKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The maximum expected string length. |


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

