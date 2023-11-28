---
layout: "page"
title: "MaxContainsKeyword Class"
bookmark: "MaxContainsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.090"
---
**Namespace:** Json.Schema

**Inheritance:**
`MaxContainsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `maxContains`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The maximum expected matching items. |

## Constructors

### MaxContainsKeyword(uint value)

Creates a new **Json.Schema.MaxContainsKeyword**.

#### Declaration

```c#
public MaxContainsKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The maximum expected matching items. |


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

