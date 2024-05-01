---
layout: "page"
title: "CommonJsonPointers Class"
bookmark: "CommonJsonPointers"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.012"
---
**Namespace:** Json.Schema

**Inheritance:**
`CommonJsonPointers`
 🡒 
`object`

Defines some commonly used JSON Pointer constructs.

## Remarks

These should be used whenever possible instead of allocating new instances.

## Fields

| Name | Type | Summary |
|---|---|---|
| **SingleEmptyPointerArray** | JsonPointer[] | Defines an array containing only a single empty JSON Pointer. |

## Methods

### GetNumberSegment(int i)

A set of predefined single-segment JSON Pointers that contain numeric indices.

#### Declaration

```c#
public static JsonPointer GetNumberSegment(int i)
```


#### Returns



