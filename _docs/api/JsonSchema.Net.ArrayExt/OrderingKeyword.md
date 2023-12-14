---
layout: "page"
title: "OrderingKeyword Class"
bookmark: "OrderingKeyword"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.004"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`OrderingKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Represents the `ordering` keyword.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Specifiers** | IEnumerable\<OrderingSpecifier\> | The collection of keywords and references. |

## Constructors

### OrderingKeyword(IEnumerable\<OrderingSpecifier\> specifiers)

Creates an instance of the **Json.Schema.ArrayExt.OrderingKeyword** class.

#### Declaration

```c#
public OrderingKeyword(IEnumerable<OrderingSpecifier> specifiers)
```

| Parameter | Type | Description |
|---|---|---|
| specifiers | IEnumerable\<OrderingSpecifier\> | The collection of keywords and references. |


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

