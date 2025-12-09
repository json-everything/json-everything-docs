---
layout: "page"
title: "EvaluationResults Class"
bookmark: "EvaluationResults"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.041"
---
**Namespace:** Json.Schema

**Inheritance:**
`EvaluationResults`
 🡒 
`object`

The results object for evaluations.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Annotations** | Dictionary\<string, JsonElement\> | The collection of annotations from this node. |
| **Details** | List\<EvaluationResults\> | The collection of nested results. |
| **Errors** | Dictionary\<string, string\> | The collection of error from this node. |
| **EvaluationPath** | JsonPointer | The schema location that generated this node. |
| **InstanceLocation** | JsonPointer | The instance location that was processed. |
| **IsValid** | bool | Indicates whether the validation passed or failed. |
| **Parent** | EvaluationResults | Gets the parent result. |
| **SchemaLocation** | Uri | The absolute schema location. |

## Methods

### ToFlag()

Transforms the results to the `flag` format.

#### Declaration

```c#
public void ToFlag()
```


### ToList()

Transforms the results to the `basic` format.

#### Declaration

```c#
public void ToList()
```


