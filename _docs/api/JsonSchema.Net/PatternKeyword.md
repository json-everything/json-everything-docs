---
layout: "page"
title: "PatternKeyword Class"
bookmark: "PatternKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.120"
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
| **InvalidPattern** | string |  |
| **Pattern** | string | The regular expression. |
| **Value** | Regex | Returns the Regex Value of the keyword. |

## Constructors

### PatternKeyword(Regex value)

Creates a new **Json.Schema.PatternKeyword** based on a regular expression instance.

#### Declaration

```c#
public PatternKeyword(Regex value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Regex |  |


### PatternKeyword(string pattern)

Creates a new **Json.Schema.PatternKeyword** based on a regular expression pattern.

#### Declaration

```c#
public PatternKeyword(string pattern)
```

| Parameter | Type | Description |
|---|---|---|
| pattern | string |  |


## Methods

### GetConstraint(SchemaConstraint schemaConstraint, ReadOnlySpan\<KeywordConstraint\> localConstraints, EvaluationContext context)

Builds a constraint object for a keyword.

#### Declaration

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint, ReadOnlySpan<KeywordConstraint> localConstraints, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| schemaConstraint | SchemaConstraint | The **Json.Schema.SchemaConstraint** for the schema object that houses this keyword. |
| localConstraints | ReadOnlySpan\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one.     Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

