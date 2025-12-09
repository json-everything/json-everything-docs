---
layout: "page"
title: "ContainsKeyword Class"
bookmark: "ContainsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.013"
---
**Namespace:** Json.Schema.Keywords.Draft06

**Inheritance:**
`ContainsKeyword`
 🡒 
`ContainsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IKeywordHandler

Handles `contains`.

## Remarks

This keyword is used to validate that an array contains at least one item that matches the subschema.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Instance** | ContainsKeyword | Gets the singleton instance of the **Json.Schema.Keywords.Draft06.ContainsKeyword**. |
| **Name** | string | Gets the name of the handled keyword. |

## Methods

### BuildSubschemas(KeywordData keyword, BuildContext context)

Builds and registers subschemas based on the specified keyword data within the provided build context.

#### Declaration

```c#
public override void BuildSubschemas(KeywordData keyword, BuildContext context)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | KeywordData | The keyword data used to determine which subschemas to build. Cannot be null. |
| context | BuildContext | The context in which subschemas are constructed and registered. Cannot be null. |


### Evaluate(KeywordData keyword, EvaluationContext context)

Evaluates the specified keyword using the provided evaluation context and returns the result of the evaluation.

#### Declaration

```c#
public override KeywordEvaluation Evaluate(KeywordData keyword, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | KeywordData | The keyword data to be evaluated. Cannot be null. |
| context | EvaluationContext | The context in which the keyword evaluation is performed. Cannot be null. |


#### Returns

A KeywordEvaluation object containing the results of the evaluation.

