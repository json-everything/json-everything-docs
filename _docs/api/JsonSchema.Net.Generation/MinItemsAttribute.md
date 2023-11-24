---
layout: "page"
title: "MinItemsAttribute Class"
bookmark: "MinItemsAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.051"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MinItemsAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `minItems` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | uint | The minimum number of items. |

## Constructors

### MinItemsAttribute(uint value)

Creates a new **Json.Schema.Generation.MinItemsAttribute** instance.

#### Declaration

```c#
public MinItemsAttribute(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The value. |


