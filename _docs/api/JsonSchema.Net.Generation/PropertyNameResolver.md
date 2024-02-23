---
layout: "page"
title: "PropertyNameResolver Delegate"
bookmark: "PropertyNameResolver"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.064"
---
# PropertyNameResolver Delegate

**Namespace:** Json.Schema.Generation

**Inheritance:**
`PropertyNameResolver`
 🡒 
`MulticastDelegate`
 🡒 
`Delegate`
 🡒 
`object`

**Implemented interfaces:**

- ICloneable
- ISerializable

Declares a property name resolution which is used to provide a property name.

#### Declaration

```c#
public delegate string PropertyNameResolver(MemberInfo input)
```

| Parameter | Type | Description |
|---|---|---|
| input | MemberInfo | The property. |


#### Returns

The property name

