---
layout: "page"
title: "DescriptionAttribute Class"
bookmark: "DescriptionAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.013"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`DescriptionAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `description` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **Description** | string | The description. |
| **TypeId** | object |  |

## Constructors

### DescriptionAttribute(string description)

Creates a new **Json.Schema.Generation.DescriptionAttribute** instance.

#### Declaration

```c#
public DescriptionAttribute(string description)
```

| Parameter | Type | Description |
|---|---|---|
| description | string | The value. |


