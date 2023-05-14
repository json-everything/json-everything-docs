---
layout: "page"
title: "WriteOnlyAttribute Class"
bookmark: "WriteOnlyAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.68"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`WriteOnlyAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `writeOnly` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
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


