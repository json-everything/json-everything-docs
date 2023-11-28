---
layout: "page"
title: "TypeKeyword Class"
bookmark: "TypeKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.163"
---
**Namespace:** Json.Schema

**Inheritance:**
`TypeKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `type`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Type** | SchemaValueType | The expected type. |

## Constructors

### TypeKeyword(SchemaValueType type)

Creates a new **Json.Schema.TypeKeyword**.

#### Declaration

```c#
public TypeKeyword(SchemaValueType type)
```

| Parameter | Type | Description |
|---|---|---|
| type | SchemaValueType | The expected type. |


### TypeKeyword(params SchemaValueType[] types)

Creates a new **Json.Schema.TypeKeyword**.

#### Declaration

```c#
public TypeKeyword(params SchemaValueType[] types)
```

| Parameter | Type | Description |
|---|---|---|
| types | params SchemaValueType[] | The expected types. |


### TypeKeyword(IEnumerable\<SchemaValueType\> types)

Creates a new **Json.Schema.TypeKeyword**.

#### Declaration

```c#
public TypeKeyword(IEnumerable<SchemaValueType> types)
```

| Parameter | Type | Description |
|---|---|---|
| types | IEnumerable\<SchemaValueType\> | The expected types. |


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

