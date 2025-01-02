---
layout: "page"
title: "DescriptionAttribute Class"
bookmark: "DescriptionAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.015"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`DescriptionAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies a `description` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **Description** | string | The description. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **TypeId** | object |  |

## Constructors

### DescriptionAttribute(string description)

Creates a new **Json.Schema.Generation.DescriptionAttribute** instance.

#### Declaration

```c#
public DescriptionAttribute(string description)
```

| Parameter | Type | Description |
|---|---|---|
| description | string | The value. |


