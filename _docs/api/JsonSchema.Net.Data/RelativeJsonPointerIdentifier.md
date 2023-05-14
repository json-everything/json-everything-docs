---
layout: "page"
title: "RelativeJsonPointerIdentifier Class"
bookmark: "RelativeJsonPointerIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "9.02.07"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`RelativeJsonPointerIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are Relative JSON Pointers.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Target** | RelativeJsonPointer | The Relative JSON Pointer target. |

## Constructors

### RelativeJsonPointerIdentifier(RelativeJsonPointer target)

Creates a new instance of **Json.Schema.Data.RelativeJsonPointerIdentifier**.

#### Declaration

```c#
public RelativeJsonPointerIdentifier(RelativeJsonPointer target)
```

| Parameter | Type | Description |
|---|---|---|
| target | RelativeJsonPointer | The target. |


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

