---
layout: "page"
title: "SchemaConstraint Class"
bookmark: "SchemaConstraint"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.149"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaConstraint`
 🡒 
`object`

Describes the set of constraints a schema object will apply to any instance.

## Remarks

This represents any work that can be performed as part of static analysis of the schema.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseInstanceLocation** | JsonPointer | Gets the base location within the instance that is being evaluated. |
| **Constraints** | KeywordConstraint[] | Gets the set of keyword constraints. |
| **InstanceLocator** | Func\<KeywordEvaluation, IEnumerable\<JsonPointer\>\> | Defines a method to identify relative instance locations at evaluation time. |
| **LocalSchema** | JsonSchema | Gets the local **Json.Schema.JsonSchema**. |
| **RelativeInstanceLocation** | JsonPointer | Gets the location relative to **Json.Schema.SchemaConstraint.BaseInstanceLocation** within the instance that is being evaluated. |
| **SchemaBaseUri** | Uri | Gets the schema's base URI. |

## Methods

### BuildEvaluation(JsonNode localInstance, JsonPointer instanceLocation, JsonPointer evaluationPath, EvaluationOptions options)

Builds an evaluation object.

#### Declaration

```c#
public SchemaEvaluation BuildEvaluation(JsonNode localInstance, JsonPointer instanceLocation, JsonPointer evaluationPath, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| localInstance | JsonNode | The local instance being evaluated. |
| instanceLocation | JsonPointer | The full instance location. |
| evaluationPath | JsonPointer | The evaluation path. |
| options | EvaluationOptions | Any evaluation options.  This will be passed via the evaluation context. |


#### Returns

A schema evaluation object.

