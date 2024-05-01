---
layout: "page"
title: "PropertyDependenciesKeyword Class"
bookmark: "PropertyDependenciesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.131"
---
**Namespace:** Json.Schema

**Inheritance:**
`PropertyDependenciesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ICustomSchemaCollector

Handles the `propertyDependencies` keyword.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Dependencies** | IReadOnlyDictionary\<string, PropertyDependency\> | Gets the collection of dependencies. |

## Constructors

### PropertyDependenciesKeyword(IReadOnlyDictionary\<string, PropertyDependency\> dependencies)

Creates a new instance of the **Json.Schema.PropertyDependenciesKeyword**.

#### Declaration

```c#
public PropertyDependenciesKeyword(IReadOnlyDictionary<string, PropertyDependency> dependencies)
```

| Parameter | Type | Description |
|---|---|---|
| dependencies | IReadOnlyDictionary\<string, PropertyDependency\> | The collection of dependencies. |


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

