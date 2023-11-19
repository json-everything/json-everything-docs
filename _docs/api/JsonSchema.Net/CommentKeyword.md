---
layout: "page"
title: "CommentKeyword Class"
bookmark: "CommentKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.005"
---
**Namespace:** Json.Schema

**Inheritance:**
`CommentKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `$comment`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | The comment value. |

## Constructors

### CommentKeyword(string value)

Creates a new **Json.Schema.CommentKeyword**.

#### Declaration

```c#
public CommentKeyword(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The comment value. |


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

