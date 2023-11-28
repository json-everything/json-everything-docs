---
layout: "page"
title: "VocabularyKeyword Class"
bookmark: "VocabularyKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.179"
---
**Namespace:** Json.Schema

**Inheritance:**
`VocabularyKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `$vocabulary`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Vocabulary** | IReadOnlyDictionary\<Uri, bool\> | The collection of vocabulary requirements. |

## Constructors

### VocabularyKeyword(IReadOnlyDictionary\<Uri, bool\> values)

Creates a new **Json.Schema.VocabularyKeyword**.

#### Declaration

```c#
public VocabularyKeyword(IReadOnlyDictionary<Uri, bool> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<Uri, bool\> | The collection of vocabulary requirements. |


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

