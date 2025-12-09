---
layout: "page"
title: "DataKeyword Class"
bookmark: "DataKeyword"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.000"
---
**Namespace:** Json.Schema.Data.Keywords

**Inheritance:**
`DataKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IKeywordHandler

Represents the `data` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Instance** | DataKeyword | Gets or sets the singleton instance of the DataKeyword class. |
| **Name** | string | The JSON name of the keyword. |

## Methods

### BuildSubschemas(KeywordData keyword, BuildContext context)

Builds and registers subschemas based on the specified keyword data within the provided build context.

#### Declaration

```c#
public virtual void BuildSubschemas(KeywordData keyword, BuildContext context)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | KeywordData | The keyword data used to determine which subschemas to build. Cannot be null. |
| context | BuildContext | The context in which subschemas are constructed and registered. Cannot be null. |


### Evaluate(KeywordData keyword, EvaluationContext context)

Evaluates the specified keyword using the provided evaluation context and returns the result of the evaluation.

#### Declaration

```c#
public virtual KeywordEvaluation Evaluate(KeywordData keyword, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | KeywordData | The keyword data to be evaluated. Cannot be null. |
| context | EvaluationContext | The context in which the keyword evaluation is performed. Cannot be null. |


#### Returns

A KeywordEvaluation object containing the results of the evaluation.

### ValidateKeywordValue(JsonElement value)

Validates the specified JSON element as a keyword value and optionally returns a value to be shared across the other methods.

#### Declaration

```c#
public virtual object ValidateKeywordValue(JsonElement value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonElement | The JSON element to validate and convert. Represents the value to be checked for keyword compliance. |


#### Returns

An object that is shared with the other methods.  This object is saved to **Json.Schema.KeywordData.Value**.

