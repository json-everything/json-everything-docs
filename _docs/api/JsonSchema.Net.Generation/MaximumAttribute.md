---
layout: "page"
title: "MaximumAttribute Class"
bookmark: "MaximumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.39"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MaximumAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `maximum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | decimal | The maximum. |

## Constructors

### MaximumAttribute(double value)

Creates a new **Json.Schema.Generation.MaximumAttribute** instance.

#### Declaration

```c#
public MaximumAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


