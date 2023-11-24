---
layout: "page"
title: "PropertyNameResolver Delegate"
bookmark: "PropertyNameResolver"
permalink: "/api/JsonPointer.Net/:title/"
0.10.008"
---
# PropertyNameResolver Delegate

**Namespace:** Json.Pointer

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

