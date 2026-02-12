---
layout: "page"
title: "UniqueItemsAttribute Class"
bookmark: "UniqueItemsAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.089"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`UniqueItemsAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies a `uniqueItems` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **TypeId** | object |  |
| **Value** | bool | Whether the items should be unique. |

## Constructors

### UniqueItemsAttribute(bool value)

Creates a new **Json.Schema.Generation.UniqueItemsAttribute** instance.

#### Declaration

```c#
public UniqueItemsAttribute(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |


