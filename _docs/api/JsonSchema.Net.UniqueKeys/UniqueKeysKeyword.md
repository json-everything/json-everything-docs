---
layout: "page"
title: "UniqueKeysKeyword Class"
bookmark: "UniqueKeysKeyword"
permalink: "/api/JsonSchema.Net.UniqueKeys/:title/"
order: "9.03.003"
---
**Namespace:** Json.Schema.UniqueKeys

**Inheritance:**
`UniqueKeysKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Represents the `data` keyword.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Keys** | IEnumerable\<JsonPointer\> | The collection of keywords and references. |

## Constructors

### UniqueKeysKeyword(IEnumerable\<JsonPointer\> references)

Creates an instance of the **Json.Schema.UniqueKeys.UniqueKeysKeyword** class.

#### Declaration

```c#
public UniqueKeysKeyword(IEnumerable<JsonPointer> references)
```

| Parameter | Type | Description |
|---|---|---|
| references | IEnumerable\<JsonPointer\> | The collection of keywords and references. |


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

