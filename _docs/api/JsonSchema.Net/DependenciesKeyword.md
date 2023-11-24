---
layout: "page"
title: "DependenciesKeyword Class"
bookmark: "DependenciesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
0.01.029"
---
**Namespace:** Json.Schema

**Inheritance:**
`DependenciesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IKeyedSchemaCollector

Handles `dependencies`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Requirements** | IReadOnlyDictionary\<string, SchemaOrPropertyList\> | The collection of dependencies. |

## Constructors

### DependenciesKeyword(IReadOnlyDictionary\<string, SchemaOrPropertyList\> values)

Creates a new **Json.Schema.DependenciesKeyword**.

#### Declaration

```c#
public DependenciesKeyword(IReadOnlyDictionary<string, SchemaOrPropertyList> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<string, SchemaOrPropertyList\> | The collection of dependencies. |


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

