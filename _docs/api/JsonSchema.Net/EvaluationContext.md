---
layout: "page"
title: "EvaluationContext Class"
bookmark: "EvaluationContext"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.29"
---
**Namespace:** Json.Schema

**Inheritance:**
`EvaluationContext`
 🡒 
`object`

Provides a single source of data for evaluation operations.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Options** | EvaluationOptions | The option set for the evaluation. |
| **SchemaRoot** | JsonSchema | The root schema. |
| **EvaluationPath** | JsonPointer | The current subschema location relative to the schema root. |
| **LocalSchema** | JsonSchema | The current subschema. |
| **InstanceRoot** | JsonNode | The instance root. |
| **InstanceLocation** | JsonPointer | The current instance location relative to the instance root. |
| **LocalInstance** | JsonNode | The current instance. |
| **Scope** | DynamicScope | Gets the scope of the current evaluation. |
| **LocalResult** | EvaluationResults | The result object for the current evaluation. |
| **ApplyOptimizations** | bool | Whether processing optimizations can be applied (output format = flag). |
## Methods

### Evaluate()

Evaluates as a subschema.  To be called from within keywords.

#### Declaration

```c#
public void Evaluate()
```

### Pop()

Pops the state from the stack to return to a previous layer of evaluation.

#### Declaration

```c#
public void Pop()
```

### Push(in JsonPointer evaluationPath, in JsonSchema subschema)

Pushes the state onto the stack and sets up for a nested layer of evaluation.

#### Declaration

```c#
public void Push(in JsonPointer evaluationPath, in JsonSchema subschema)
```
| Parameter | Type | Description |
|---|---|---|
| evaluationPath | in JsonPointer | The location within the schema root. |
| subschema | in JsonSchema | The subschema. |

### Push(in JsonPointer instanceLocation, in JsonNode instance, in JsonPointer evaluationPath, in JsonSchema subschema)

Pushes the state onto the stack and sets up for a nested layer of evaluation.

#### Declaration

```c#
public void Push(in JsonPointer instanceLocation, in JsonNode instance, in JsonPointer evaluationPath, in JsonSchema subschema)
```
| Parameter | Type | Description |
|---|---|---|
| instanceLocation | in JsonPointer | The location within the data instance root. |
| instance | in JsonNode | The data instance. |
| evaluationPath | in JsonPointer | The location within the schema root. |
| subschema | in JsonSchema | The subschema. |

