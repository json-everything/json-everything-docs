---
layout: "page"
title: "ExclusiveMaximumAttribute Class"
bookmark: "ExclusiveMaximumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.17"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ExclusiveMaximumAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies an `exclusiveMaximum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | decimal | The exclusive maximum. |

## Constructors

### ExclusiveMaximumAttribute(double value)

Creates a new **Json.Schema.Generation.ExclusiveMaximumAttribute** instance.

#### Declaration

```c#
public ExclusiveMaximumAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


