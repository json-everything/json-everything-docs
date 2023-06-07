---
layout: "page"
title: "PropertyNamingMethod Delegate"
bookmark: "PropertyNamingMethod"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.62"
---
# PropertyNamingMethod Delegate

**Namespace:** Json.Schema.Generation

**Inheritance:**
`PropertyNamingMethod`
 🡒 
`MulticastDelegate`
 🡒 
`Delegate`
 🡒 
`object`

**Implemented interfaces:**

- ICloneable
- ISerializable

Declares a property naming method which is used to alter property names.

#### Declaration

```c#
public delegate string PropertyNamingMethod(string input)
```

| Parameter | Type | Description |
|---|---|---|
| input | string | The property name. |


#### Returns

The altered property name.

