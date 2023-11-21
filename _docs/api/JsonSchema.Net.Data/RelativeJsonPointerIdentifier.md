---
layout: "page"
title: "RelativeJsonPointerIdentifier Class"
bookmark: "RelativeJsonPointerIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "9.02.008"
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

