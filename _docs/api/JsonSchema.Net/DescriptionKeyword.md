---
layout: "page"
title: "DescriptionKeyword Class"
bookmark: "DescriptionKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.040"
---
**Namespace:** Json.Schema

**Inheritance:**
`DescriptionKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `description`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | The description. |

## Constructors

### DescriptionKeyword(string value)

Creates a new **Json.Schema.DescriptionKeyword**.

#### Declaration

```c#
public DescriptionKeyword(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The description. |


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

