---
layout: "page"
title: "MinItemsKeyword Class"
bookmark: "MinItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.068"
---
**Namespace:** Json.Schema

**Inheritance:**
`MinItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `minItems`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The expected minimum number of items. |

## Constructors

### MinItemsKeyword(uint value)

Create a new **Json.Schema.MinItemsKeyword**.

#### Declaration

```c#
public MinItemsKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The expected minimum number of items. |


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

