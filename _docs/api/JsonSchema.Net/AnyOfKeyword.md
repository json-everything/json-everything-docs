---
layout: "page"
title: "AnyOfKeyword Class"
bookmark: "AnyOfKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.008"
---
**Namespace:** Json.Schema

**Inheritance:**
`AnyOfKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaCollector

Handles `anyOf`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schemas** | IReadOnlyList\<JsonSchema\> | The keywords schema collection. |

## Constructors

### AnyOfKeyword(params JsonSchema[] values)

Creates a new **Json.Schema.AnyOfKeyword**.

#### Declaration

```c#
public AnyOfKeyword(params JsonSchema[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonSchema[] | The set of schemas. |


### AnyOfKeyword(IEnumerable\<JsonSchema\> values)

Creates a new **Json.Schema.AnyOfKeyword**.

#### Declaration

```c#
public AnyOfKeyword(IEnumerable<JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonSchema\> | The set of schemas. |


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

