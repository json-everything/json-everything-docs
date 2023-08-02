---
layout: "page"
title: "UniqueItemsKeyword Class"
bookmark: "UniqueItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.106"
---
**Namespace:** Json.Schema

**Inheritance:**
`UniqueItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `uniqueItems`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | Whether items should be unique. |

## Constructors

### UniqueItemsKeyword(bool value)

Creates a new **Json.Schema.UniqueItemsKeyword**.

#### Declaration

```c#
public UniqueItemsKeyword(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | Whether items should be unique. |


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

