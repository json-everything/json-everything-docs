---
layout: "page"
title: "PredicateWithErrorMessage Delegate"
bookmark: "PredicateWithErrorMessage"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.124"
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
public delegate bool PredicateWithErrorMessage(JsonNode element, out string errorMessage)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonNode | The element to validate. |
| errorMessage | out string | An error message. |


#### Returns

`true`.  Override to return another value.

