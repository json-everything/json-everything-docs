---
layout: "page"
title: "ExclusiveMinimumAttribute Class"
bookmark: "ExclusiveMinimumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.19"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ExclusiveMinimumAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies an `exclusiveMinimum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | decimal | The exclusive minimum. |

## Constructors

### ExclusiveMinimumAttribute(double value)

Creates a new **Json.Schema.Generation.ExclusiveMinimumAttribute** instance.

#### Declaration

```c#
public ExclusiveMinimumAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


