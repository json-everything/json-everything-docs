---
layout: "page"
title: "UnrecognizedKeyword Class"
bookmark: "UnrecognizedKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.175"
---
**Namespace:** Json.Schema

**Inheritance:**
`UnrecognizedKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles unrecognized keywords.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The name or key of the keyword. |
| **Value** | JsonNode | The value of the keyword. |

## Constructors

### UnrecognizedKeyword(string name, JsonNode value)

Creates a new **Json.Schema.UnrecognizedKeyword**.

#### Declaration

```c#
public UnrecognizedKeyword(string name, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The name of the keyword. |
| value | JsonNode | The value of the keyword. |


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

