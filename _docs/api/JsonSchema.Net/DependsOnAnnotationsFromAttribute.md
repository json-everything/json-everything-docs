---
layout: "page"
title: "DependsOnAnnotationsFromAttribute Class"
bookmark: "DependsOnAnnotationsFromAttribute"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.036"
---
**Namespace:** Json.Schema

**Inheritance:**
`DependsOnAnnotationsFromAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Indicates a keyword from which the decorated keyword requires annotations.

## Remarks

Apply this attribute to your schema keyword to indicate a dependency on another keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **DependentType** | Type | The dependent type. |
| **TypeId** | object |  |

## Constructors

### DependsOnAnnotationsFromAttribute(Type type)

Creates a new **Json.Schema.DependsOnAnnotationsFromAttribute** instance.

#### Declaration

```c#
public DependsOnAnnotationsFromAttribute(Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The dependent type. |


