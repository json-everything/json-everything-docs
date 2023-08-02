---
layout: "page"
title: "DynamicRefKeyword Class"
bookmark: "DynamicRefKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.023"
---
**Namespace:** Json.Schema

**Inheritance:**
`DynamicRefKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `$dynamicRef`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Reference** | Uri | The URI reference. |

## Constructors

### DynamicRefKeyword(Uri value)

Creates a new **Json.Schema.DynamicRefKeyword**.

#### Declaration

```c#
public DynamicRefKeyword(Uri value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Uri |  |


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

