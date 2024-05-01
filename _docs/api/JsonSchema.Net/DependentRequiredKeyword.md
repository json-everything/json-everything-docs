---
layout: "page"
title: "DependentRequiredKeyword Class"
bookmark: "DependentRequiredKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.032"
---
**Namespace:** Json.Schema

**Inheritance:**
`DependentRequiredKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `dependentRequired`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Requirements** | IReadOnlyDictionary\<string, IReadOnlyList\<string\>\> | The collection of "required"-type dependencies. |

## Constructors

### DependentRequiredKeyword(IReadOnlyDictionary\<string, IReadOnlyList\<string\>\> values)

Creates a new **Json.Schema.DependentRequiredKeyword**.

#### Declaration

```c#
public DependentRequiredKeyword(IReadOnlyDictionary<string, IReadOnlyList<string>> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<string, IReadOnlyList\<string\>\> | The collection of "required"-type dependencies. |


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

