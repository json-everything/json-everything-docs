---
layout: "page"
title: "JsonPointerIdentifier Class"
bookmark: "JsonPointerIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
0.02.003"
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

### TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)

Resolves a resource.

#### Declaration

```c#
public bool TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| evaluation | KeywordEvaluation | The evaluation being process.  This will help identify. |
| registry | SchemaRegistry | The schema registry. |
| value | out JsonNode | The value, if **evaluation** was resolvable. |


#### Returns

True if resolution was successful; false otherwise.

