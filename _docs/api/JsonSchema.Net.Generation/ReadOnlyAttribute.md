---
layout: "page"
title: "ReadOnlyAttribute Class"
bookmark: "ReadOnlyAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.30"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ReadOnlyAttribute`
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
| **Value** | bool | Whether the property should be read-only. |
| **TypeId** | object |  |
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

