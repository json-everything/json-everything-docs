---
layout: "page"
title: "UriIdentifier Class"
bookmark: "UriIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "9.02.08"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`UriIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are URIs.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Target** | Uri | The URI target. |
## Constructors

### UriIdentifier(Uri target)

Creates a new instance of **Json.Schema.Data.UriIdentifier**.

#### Declaration

```c#
public UriIdentifier(Uri target)
```
| Parameter | Type | Description |
|---|---|---|
| target | Uri | The target. |

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

