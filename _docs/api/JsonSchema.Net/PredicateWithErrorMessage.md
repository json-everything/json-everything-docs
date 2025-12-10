---
layout: "page"
title: "PredicateWithErrorMessage Delegate"
bookmark: "PredicateWithErrorMessage"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.088"
---
# PredicateWithErrorMessage Delegate

**Namespace:** Json.Schema

**Inheritance:**
`PredicateWithErrorMessage`
 🡒 
`MulticastDelegate`
 🡒 
`Delegate`
 🡒 
`object`

**Implemented interfaces:**

- ICloneable
- ISerializable

A predicate that also supplies an `out` error message parameter.

#### Declaration

```c#
public delegate bool PredicateWithErrorMessage(JsonElement element, out string errorMessage)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonElement | The element to validate. |
| errorMessage | out string | An error message. |


#### Returns

`true`.  Override to return another value.

