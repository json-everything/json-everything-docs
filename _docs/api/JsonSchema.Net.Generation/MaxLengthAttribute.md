---
layout: "page"
title: "MaxLengthAttribute Class"
bookmark: "MaxLengthAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.050"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MaxLengthAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies a `maxLength` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **Length** | uint | The maximum length. |
| **TypeId** | object |  |

## Constructors

### MaxLengthAttribute(uint length)

Creates a new **Json.Schema.Generation.MaxLengthAttribute** instance.

#### Declaration

```c#
public MaxLengthAttribute(uint length)
```

| Parameter | Type | Description |
|---|---|---|
| length | uint | The value. |


