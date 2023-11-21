---
layout: "page"
title: "KeywordEvaluation Class"
bookmark: "KeywordEvaluation"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.088"
---
**Namespace:** Json.Schema

**Inheritance:**
`KeywordEvaluation`
 🡒 
`object`

Represents any evaluation-time work (i.e. any work that requires the instance) for keywords.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ChildEvaluations** | SchemaEvaluation[] | Gets any child evaluations for this keyword. |
| **LocalInstance** | JsonNode | Gets the local instance to be evaluated. |
| **Results** | EvaluationResults | Gets the local results object. |
| **SiblingEvaluations** | KeywordEvaluation[] | Gets any sibling evaluations for this keyword. |

## Methods

### MarkAsSkipped()

Indicates that the evaluation should be skipped and no work is to be done,
e.g. `then` is skipped when `if` fails validation.

#### Declaration

```c#
public void MarkAsSkipped()
```


