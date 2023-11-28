---
layout: "page"
title: "DefinitionsKeyword Class"
bookmark: "DefinitionsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.025"
---
**Namespace:** Json.Schema

**Inheritance:**
`DefinitionsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IKeyedSchemaCollector

Handles `definitions`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Definitions** | IReadOnlyDictionary\<string, JsonSchema\> | The collection of schema definitions. |

## Constructors

### DefinitionsKeyword(IReadOnlyDictionary\<string, JsonSchema\> values)

Creates a new **Json.Schema.DefinitionsKeyword**.

#### Declaration

```c#
public DefinitionsKeyword(IReadOnlyDictionary<string, JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<string, JsonSchema\> | The collection of schema definitions. |


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

