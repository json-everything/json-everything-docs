---
layout: "page"
title: "SchemaKeyword Class"
bookmark: "SchemaKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.093"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `$schema`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schema** | Uri | The meta-schema ID. |

## Constructors

### SchemaKeyword(Uri schema)

Creates a new **Json.Schema.SchemaKeyword**.

#### Declaration

```c#
public SchemaKeyword(Uri schema)
```

| Parameter | Type | Description |
|---|---|---|
| schema | Uri | The meta-schema ID. |


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

