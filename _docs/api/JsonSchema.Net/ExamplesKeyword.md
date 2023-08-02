---
layout: "page"
title: "ExamplesKeyword Class"
bookmark: "ExamplesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.032"
---
**Namespace:** Json.Schema

**Inheritance:**
`ExamplesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `examples`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Values** | IReadOnlyList\<JsonNode\> | The collection of example values. |

## Constructors

### ExamplesKeyword(params JsonNode[] values)

Creates a new **Json.Schema.ExamplesKeyword**.

#### Declaration

```c#
public ExamplesKeyword(params JsonNode[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonNode[] | The collection of example values. |


### ExamplesKeyword(IEnumerable\<JsonNode\> values)

Creates a new **Json.Schema.ExamplesKeyword**.

#### Declaration

```c#
public ExamplesKeyword(IEnumerable<JsonNode> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonNode\> | The collection of example values. |


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
| localConstraints | IReadOnlyList\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one.<br>Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

