---
layout: "page"
title: "MinimumAttribute Class"
bookmark: "MinimumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.47"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MinimumAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `minimum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | decimal | The minimum. |

## Constructors

### MinimumAttribute(double value)

Creates a new **Json.Schema.Generation.MinimumAttribute** instance.

#### Declaration

```c#
public MinimumAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


