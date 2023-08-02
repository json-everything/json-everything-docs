---
layout: "page"
title: "PropertiesKeyword Class"
bookmark: "PropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.081"
---
**Namespace:** Json.Schema

**Inheritance:**
`PropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IKeyedSchemaCollector

Handles `properties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Properties** | IReadOnlyDictionary\<string, JsonSchema\> | The property schemas. |

## Constructors

### PropertiesKeyword(IReadOnlyDictionary\<string, JsonSchema\> values)

Creates a new **Json.Schema.PropertiesKeyword**.

#### Declaration

```c#
public PropertiesKeyword(IReadOnlyDictionary<string, JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<string, JsonSchema\> | The property schemas. |


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

