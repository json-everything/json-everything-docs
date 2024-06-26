---
layout: "page"
title: "RequiredKeyword Class"
bookmark: "RequiredKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.147"
---
**Namespace:** Json.Schema

**Inheritance:**
`RequiredKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `requires`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Properties** | IReadOnlyList\<string\> | The required properties. |

## Constructors

### RequiredKeyword(params string[] values)

Creates a new **Json.Schema.RequiredKeyword**.

#### Declaration

```c#
public RequiredKeyword(params string[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params string[] | The required properties. |


### RequiredKeyword(IEnumerable\<string\> values)

Creates a new **Json.Schema.RequiredKeyword**.

#### Declaration

```c#
public RequiredKeyword(IEnumerable<string> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<string\> | The required properties. |


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

