---
layout: "page"
title: "MaximumKeyword Class"
bookmark: "MaximumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.092"
---
**Namespace:** Json.Schema

**Inheritance:**
`MaximumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `maximum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The maximum expected value. |

## Constructors

### MaximumKeyword(decimal value)

Creates a new **Json.Schema.MaximumKeyword**.

#### Declaration

```c#
public MaximumKeyword(decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The maximum expected value. |


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

