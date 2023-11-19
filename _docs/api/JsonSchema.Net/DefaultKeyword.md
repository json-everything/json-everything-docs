---
layout: "page"
title: "DefaultKeyword Class"
bookmark: "DefaultKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.012"
---
**Namespace:** Json.Schema

**Inheritance:**
`DefaultKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `default`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | JsonNode | The value to use as the default. |

## Constructors

### DefaultKeyword(JsonNode value)

Creates a new **Json.Schema.DefaultKeyword**.

#### Declaration

```c#
public DefaultKeyword(JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonNode | The value to use as the default. |


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

