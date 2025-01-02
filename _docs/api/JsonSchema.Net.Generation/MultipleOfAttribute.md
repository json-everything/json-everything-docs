---
layout: "page"
title: "MultipleOfAttribute Class"
bookmark: "MultipleOfAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.059"
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

- INestableAttribute
- IAttributeHandler

Applies a `multipleOf` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
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


