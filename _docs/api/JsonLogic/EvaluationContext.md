---
layout: "page"
title: "EvaluationContext Class"
bookmark: "EvaluationContext"
permalink: "/api/JsonLogic/:title/"
order: "10.11.006"
---
**Namespace:** Json.Logic

**Inheritance:**
`EvaluationContext`
 🡒 
`object`

Provides context data for JSON-e evaluation.

## Properties

| Name | Type | Summary |
|---|---|---|
| **CurrentValue** | JsonNode | The top-level context value. |

## Methods

### Pop()



#### Declaration

```c#
public JsonNode Pop()
```


#### Returns



### Push(JsonNode newContext)

Adds or overrides context data.

#### Declaration

```c#
public void Push(JsonNode newContext)
```

| Parameter | Type | Description |
|---|---|---|
| newContext | JsonNode |  |


### TryFind(string path, out JsonNode result)

Attempts to resolve a variable path within the entire context.

#### Declaration

```c#
public bool TryFind(string path, out JsonNode result)
```

| Parameter | Type | Description |
|---|---|---|
| path | string | The variable path. |
| result | out JsonNode | The result, if found; null otherwise.. |


#### Returns

true if the path was found; false otherwise.

