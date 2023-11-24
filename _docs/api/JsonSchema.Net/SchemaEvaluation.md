---
layout: "page"
title: "SchemaEvaluation Class"
bookmark: "SchemaEvaluation"
permalink: "/api/JsonSchema.Net/:title/"
0.01.147"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaEvaluation`
 🡒 
`object`

Represents any evaluation-time work (i.e. any work that requires the instance) for schemas.

## Properties

| Name | Type | Summary |
|---|---|---|
| **LocalInstance** | JsonNode | Gets the local instance. |
| **RelativeInstanceLocation** | JsonPointer | Gets the relative instance location.  (The base location can be found in **Json.Schema.SchemaEvaluation.Results**. |
| **Results** | EvaluationResults | Gets the local evaluation results. |

## Methods

### Evaluate(EvaluationContext context)

Processes the evaluation.

#### Declaration

```c#
public void Evaluate(EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context. |


