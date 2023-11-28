---
layout: "page"
title: "AllOfKeyword Class"
bookmark: "AllOfKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.004"
---
**Namespace:** Json.Schema

**Inheritance:**
`AllOfKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaCollector

Handles `allOf`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schemas** | IReadOnlyList\<JsonSchema\> | The keywords schema collection. |

## Constructors

### AllOfKeyword(params JsonSchema[] values)

Creates a new **Json.Schema.AllOfKeyword**.

#### Declaration

```c#
public AllOfKeyword(params JsonSchema[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonSchema[] | The set of schemas. |


### AllOfKeyword(IEnumerable\<JsonSchema\> values)

Creates a new **Json.Schema.AllOfKeyword**.

#### Declaration

```c#
public AllOfKeyword(IEnumerable<JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonSchema\> | The set of schemas. |


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

