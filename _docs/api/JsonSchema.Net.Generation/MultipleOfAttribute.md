---
layout: "page"
title: "MultipleOfAttribute Class"
bookmark: "MultipleOfAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.056"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MultipleOfAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `multipleOf` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | decimal | The divisor. |

## Constructors

### MultipleOfAttribute(double value)

Creates a new **Json.Schema.Generation.MultipleOfAttribute** instance.

#### Declaration

```c#
public MultipleOfAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


