---
layout: "page"
title: "MinContainsKeyword Class"
bookmark: "MinContainsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
0.01.101"
---
**Namespace:** Json.Schema

**Inheritance:**
`MinContainsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `minContains`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The minimum expected matching items. |

## Constructors

### MinContainsKeyword(uint value)

Creates a new **Json.Schema.MinContainsKeyword**.

#### Declaration

```c#
public MinContainsKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The minimum expected matching items. |


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

