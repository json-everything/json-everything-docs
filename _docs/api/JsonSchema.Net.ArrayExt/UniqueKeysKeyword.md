---
layout: "page"
title: "UniqueKeysKeyword Class"
bookmark: "UniqueKeysKeyword"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.007"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`UniqueKeysKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Represents the `uniqueKeys` keyword.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Keys** | IEnumerable\<JsonPointer\> | The collection of keywords and references. |

## Constructors

### UniqueKeysKeyword(IEnumerable\<JsonPointer\> references)

Creates an instance of the **Json.Schema.ArrayExt.UniqueKeysKeyword** class.

#### Declaration

```c#
public UniqueKeysKeyword(IEnumerable<JsonPointer> references)
```

| Parameter | Type | Description |
|---|---|---|
| references | IEnumerable\<JsonPointer\> | The collection of keywords and references. |


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

