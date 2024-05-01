---
layout: "page"
title: "RefKeyword Class"
bookmark: "RefKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.143"
---
**Namespace:** Json.Schema

**Inheritance:**
`RefKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `$ref`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Reference** | Uri | The URI reference. |

## Constructors

### RefKeyword(Uri value)

Creates a new **Json.Schema.RefKeyword**.

#### Declaration

```c#
public RefKeyword(Uri value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Uri | The URI reference. |


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

