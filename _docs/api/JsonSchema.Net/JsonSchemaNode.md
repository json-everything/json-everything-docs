---
layout: "page"
title: "JsonSchemaNode Class"
bookmark: "JsonSchemaNode"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.067"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchemaNode`
 🡒 
`object`

Represents a subschema.

## Remarks

A JsonSchemaNode provides the context and data necessary for evaluating a subschema
            against an instance. It supports evaluation of schema logic, including handling of boolean schemas and keyword-based

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseUri** | Uri | Gets or sets the base URI used for resolving relative paths or requests. |
| **Keywords** | KeywordData[] | Gets the collection of keyword data this subschema. |
| **PathFromResourceRoot** | JsonPointer |  |
| **RelativePath** | JsonPointer | Gets a JSON Pointer to this subschema from the parent subschema, excluding the intermediate keyword. |
| **Source** | JsonElement | Gets the original JSON source data this subschema. |

## Methods

### Evaluate(EvaluationContext context)

Evaluates the schema against the provided context and returns the results of the evaluation.

#### Declaration

```c#
public EvaluationResults Evaluate(EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context containing the instance data, schema location, and evaluation options to use during schema |


#### Returns

An EvaluationResults object containing the outcome of the schema evaluation, including validity, errors,

#### Remarks

If the schema is a boolean schema, the evaluation result is determined immediately. For schemas
            with keywords, each keyword is evaluated in order, and the overall validity is determined by their contributions.
            The method manages evaluation scope and tracks evaluated keywords, errors, and annotations as

