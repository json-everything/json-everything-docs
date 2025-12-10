---
layout: "page"
title: "PatternPropertiesKeyword Class"
bookmark: "PatternPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.086"
---
**Namespace:** Json.Schema.Keywords

**Inheritance:**
`PatternPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IKeywordHandler

Handles `patternProperties`.

## Remarks

This keyword validates properties that match a regular expression against a subschema.  A property whose name matches a
regular expression key must have a value that validates against that regular expression's subschema.  A given property may match
multiple regular expressions and may also be validated by the `properties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Instance** | PatternPropertiesKeyword | Gets the singleton instance of the **Json.Schema.Keywords.PatternPropertiesKeyword**. |
| **Name** | string | Gets the name of the handled keyword. |

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

