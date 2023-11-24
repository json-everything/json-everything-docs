---
layout: "page"
title: "IdKeyword Class"
bookmark: "IdKeyword"
permalink: "/api/JsonSchema.Net/:title/"
0.01.067"
---
**Namespace:** Json.Schema

**Inheritance:**
`IdKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IIdKeyword
- IJsonSchemaKeyword

Handles `$id`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Id** | Uri | Defines the URI ID. |

## Constructors

### IdKeyword(Uri id)

Creates a new **Json.Schema.IdKeyword**.

#### Declaration

```c#
public IdKeyword(Uri id)
```

| Parameter | Type | Description |
|---|---|---|
| id | Uri | The ID. |


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

