---
layout: "page"
title: "MinPropertiesKeyword Class"
bookmark: "MinPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.111"
---
**Namespace:** Json.Schema

**Inheritance:**
`MinPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `minProperties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The minimum expected number of properties. |

## Constructors

### MinPropertiesKeyword(uint value)

Creates a new **Json.Schema.MinPropertiesKeyword**.

#### Declaration

```c#
public MinPropertiesKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The minimum expected number of properties. |


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

