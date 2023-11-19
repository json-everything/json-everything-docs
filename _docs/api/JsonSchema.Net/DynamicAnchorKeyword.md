---
layout: "page"
title: "DynamicAnchorKeyword Class"
bookmark: "DynamicAnchorKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.022"
---
**Namespace:** Json.Schema

**Inheritance:**
`DynamicAnchorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `$dynamicAnchor`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | Gets the anchor value. |

## Constructors

### DynamicAnchorKeyword(string value)

Creates a new **Json.Schema.DynamicAnchorKeyword**.

#### Declaration

```c#
public DynamicAnchorKeyword(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The anchor value. |


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

