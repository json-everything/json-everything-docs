---
layout: "page"
title: "RecursiveAnchorKeyword Class"
bookmark: "RecursiveAnchorKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.140"
---
**Namespace:** Json.Schema

**Inheritance:**
`RecursiveAnchorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `$recursiveAnchor`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | Gets the value. |

## Constructors

### RecursiveAnchorKeyword(bool value)

Creates a new **Json.Schema.RecursiveAnchorKeyword**.

#### Declaration

```c#
public RecursiveAnchorKeyword(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |


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

