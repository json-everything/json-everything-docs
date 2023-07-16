---
layout: "page"
title: "JsonPointerIdentifier Class"
bookmark: "JsonPointerIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "9.02.002"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`JsonPointerIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are JSON Pointers.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Target** | JsonPointer | The JSON Pointer target. |

## Constructors

### JsonPointerIdentifier(JsonPointer target)

Creates a new instance of **Json.Schema.Data.JsonPointerIdentifier**.

#### Declaration

```c#
public JsonPointerIdentifier(JsonPointer target)
```

| Parameter | Type | Description |
|---|---|---|
| target | JsonPointer | The target. |


## Methods

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

### TryResolve(EvaluationContext context, out JsonNode value)

Attempts to resolve the reference.

#### Declaration

```c#
public bool TryResolve(EvaluationContext context, out JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The schema evaluation context. |
| value | out JsonNode | If return is true, the value at the indicated location. |


#### Returns

true if resolution is successful; false otherwise.

