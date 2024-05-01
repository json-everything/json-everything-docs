---
layout: "page"
title: "DeprecatedKeyword Class"
bookmark: "DeprecatedKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.038"
---
**Namespace:** Json.Schema

**Inheritance:**
`DeprecatedKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `deprecated`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | Whether the schema is deprecated. |

## Constructors

### DeprecatedKeyword(bool value)

Creates a new **Json.Schema.DeprecatedKeyword**.

#### Declaration

```c#
public DeprecatedKeyword(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | Whether the schema is deprecated. |


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

