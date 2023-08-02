---
layout: "page"
title: "PatternKeyword Class"
bookmark: "PatternKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.075"
---
**Namespace:** Json.Schema

**Inheritance:**
`PatternKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `pattern`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **InvalidPattern** | string | If the pattern is invalid or unsupported by **System.Text.RegularExpressions.Regex**, it will appear here. |
| **Value** | Regex | The regular expression. |

## Constructors

### PatternKeyword(Regex value)

Creates a new **Json.Schema.PatternKeyword**.

#### Declaration

```c#
public PatternKeyword(Regex value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Regex | The regular expression. |


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

