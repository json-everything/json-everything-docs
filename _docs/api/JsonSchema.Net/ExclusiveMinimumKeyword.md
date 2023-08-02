---
layout: "page"
title: "ExclusiveMinimumKeyword Class"
bookmark: "ExclusiveMinimumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.034"
---
**Namespace:** Json.Schema

**Inheritance:**
`ExclusiveMinimumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `exclusiveMinimum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The minimum value. |

## Constructors

### ExclusiveMinimumKeyword(decimal value)

Creates a new **Json.Schema.ExclusiveMinimumKeyword**.

#### Declaration

```c#
public ExclusiveMinimumKeyword(decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The minimum value. |


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

