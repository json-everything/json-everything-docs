---
layout: "page"
title: "MinLengthAttribute Class"
bookmark: "MinLengthAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.056"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MinLengthAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies a `minimum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **Length** | uint | The minimum length. |
| **TypeId** | object |  |

## Constructors

### MinLengthAttribute(uint length)

Creates a new **Json.Schema.Generation.MinLengthAttribute** instance.

#### Declaration

```c#
public MinLengthAttribute(uint length)
```

| Parameter | Type | Description |
|---|---|---|
| length | uint | The value. |


