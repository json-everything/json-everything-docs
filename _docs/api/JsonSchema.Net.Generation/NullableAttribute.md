---
layout: "page"
title: "NullableAttribute Class"
bookmark: "NullableAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.059"
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

- IAttributeHandler

Overrides the **Json.Schema.Generation.SchemaGeneratorConfiguration.Nullability** option and either
adds or removes `null` in the `type` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
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


