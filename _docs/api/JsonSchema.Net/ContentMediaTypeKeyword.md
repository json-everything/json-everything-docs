---
layout: "page"
title: "ContentMediaTypeKeyword Class"
bookmark: "ContentMediaTypeKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.020"
---
**Namespace:** Json.Schema

**Inheritance:**
`ContentMediaTypeKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `contentMediaType`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | The media type. |

## Constructors

### ContentMediaTypeKeyword(string value)

Creates a new **Json.Schema.ContentMediaTypeKeyword**.

#### Declaration

```c#
public ContentMediaTypeKeyword(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The media type. |


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

