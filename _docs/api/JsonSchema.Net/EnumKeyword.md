---
layout: "page"
title: "EnumKeyword Class"
bookmark: "EnumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
0.01.049"
---
**Namespace:** Json.Schema

**Inheritance:**
`EnumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `enum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **RequireUniqueValues** | bool | Gets or sets whether the keyword will check for unique values when deserializing. |
| **Values** | IReadOnlyCollection\<JsonNode\> | The collection of enum values. |

## Constructors

### EnumKeyword(params JsonNode[] values)

Creates a new **Json.Schema.EnumKeyword**.

#### Declaration

```c#
public EnumKeyword(params JsonNode[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonNode[] | The collection of enum values. |


### EnumKeyword(IEnumerable\<JsonNode\> values)

Creates a new **Json.Schema.EnumKeyword**.

#### Declaration

```c#
public EnumKeyword(IEnumerable<JsonNode> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonNode\> | The collection of enum values. |


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

