---
layout: "page"
title: "WriteOnlyAttribute Class"
bookmark: "WriteOnlyAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.089"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`WriteOnlyAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies a `writeOnly` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **TypeId** | object |  |
| **Value** | bool | Whether the property should be write-only. |

## Constructors

### WriteOnlyAttribute()

Creates a new **Json.Schema.Generation.WriteOnlyAttribute** instance with a value of `true`.

#### Declaration

```c#
public WriteOnlyAttribute()
```


### WriteOnlyAttribute(bool value)

Creates a new **Json.Schema.Generation.WriteOnlyAttribute** instance.

#### Declaration

```c#
public WriteOnlyAttribute(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |


