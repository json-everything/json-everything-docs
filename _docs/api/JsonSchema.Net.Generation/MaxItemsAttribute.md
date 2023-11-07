---
layout: "page"
title: "MaxItemsAttribute Class"
bookmark: "MaxItemsAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.043"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MaxItemsAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies an `maxItems` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | uint | The maximum number of items. |

## Constructors

### MaxItemsAttribute(uint value)

Creates a new **Json.Schema.Generation.MaxItemsAttribute** instance.

#### Declaration

```c#
public MaxItemsAttribute(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The value. |


