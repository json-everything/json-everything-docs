---
layout: "page"
title: "FormatKeyword Class"
bookmark: "FormatKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.062"
---
**Namespace:** Json.Schema

**Inheritance:**
`FormatKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `format`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | Format | The format. |

## Constructors

### FormatKeyword(Format value)

Creates a new **Json.Schema.FormatKeyword**.

#### Declaration

```c#
public FormatKeyword(Format value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Format | The format. |


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

