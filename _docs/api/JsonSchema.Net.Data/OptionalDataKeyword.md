---
layout: "page"
title: "OptionalDataKeyword Class"
bookmark: "OptionalDataKeyword"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.008"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`OptionalDataKeyword`
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
| **References** | IReadOnlyDictionary\<string, IDataResourceIdentifier\> | The collection of keywords and references. |

## Constructors

### OptionalDataKeyword(IReadOnlyDictionary\<string, IDataResourceIdentifier\> references)

Creates an instance of the **Json.Schema.Data.DataKeyword** class.

#### Declaration

```c#
public OptionalDataKeyword(IReadOnlyDictionary<string, IDataResourceIdentifier> references)
```

| Parameter | Type | Description |
|---|---|---|
| references | IReadOnlyDictionary\<string, IDataResourceIdentifier\> | The collection of keywords and references. |


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

