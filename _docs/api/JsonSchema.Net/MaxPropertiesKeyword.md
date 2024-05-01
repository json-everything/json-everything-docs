---
layout: "page"
title: "MaxPropertiesKeyword Class"
bookmark: "MaxPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.100"
---
**Namespace:** Json.Schema

**Inheritance:**
`MaxPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `maxProperties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The maximum expected number of properties. |

## Constructors

### MaxPropertiesKeyword(uint value)

Creates a new **Json.Schema.MaxPropertiesKeyword**.

#### Declaration

```c#
public MaxPropertiesKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The maximum expected number of properties. |


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

