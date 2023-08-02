---
layout: "page"
title: "MaxItemsKeyword Class"
bookmark: "MaxItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.062"
---
**Namespace:** Json.Schema

**Inheritance:**
`MaxItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `maxItems`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The expected maximum number of items. |

## Constructors

### MaxItemsKeyword(uint value)

Creates a new **Json.Schema.MaxItemsKeyword**.

#### Declaration

```c#
public MaxItemsKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The expected maximum number of items. |


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
| localConstraints | IReadOnlyList\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one.<br>Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

