---
layout: "page"
title: "MinimumKeyword Class"
bookmark: "MinimumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.106"
---
**Namespace:** Json.Schema

**Inheritance:**
`MinimumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `minimum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The minimum expected value. |

## Constructors

### MinimumKeyword(decimal value)

Creates a new **Json.Schema.MinimumKeyword**.

#### Declaration

```c#
public MinimumKeyword(decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The minimum expected value. |


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

