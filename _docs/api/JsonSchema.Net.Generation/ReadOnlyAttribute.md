---
layout: "page"
title: "ReadOnlyAttribute Class"
bookmark: "ReadOnlyAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.068"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ReadOnlyAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `readOnly` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | bool | Whether the property should be read-only. |

## Constructors

### ReadOnlyAttribute()

Creates a new **Json.Schema.Generation.ReadOnlyAttribute** instance with a value of `true`.

#### Declaration

```c#
public ReadOnlyAttribute()
```


### ReadOnlyAttribute(bool value)

Creates a new **Json.Schema.Generation.ReadOnlyAttribute** instance.

#### Declaration

```c#
public ReadOnlyAttribute(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |


