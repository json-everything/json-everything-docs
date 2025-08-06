---
layout: "page"
title: "NullableAttribute Class"
bookmark: "NullableAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.064"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`NullableAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Overrides the nullability declared in code and either adds or removes `null` in the `type` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **IsNullable** | bool | Gets whether `null` should be included in the `type` keyword. |
| **TypeId** | object |  |

## Constructors

### NullableAttribute(bool isNullable)

Creates a new **Json.Schema.Generation.NullableAttribute** instance.

#### Declaration

```c#
public NullableAttribute(bool isNullable)
```

| Parameter | Type | Description |
|---|---|---|
| isNullable | bool | Whether `null` should be included in the `type` keyword. |


