---
layout: "page"
title: "JsonElementEqualityComparer Class"
bookmark: "JsonElementEqualityComparer"
permalink: "/api/Json.More/:title/"
order: "9.12.003"
---
**Namespace:** Json.More

**Inheritance:**
`JsonElementEqualityComparer`
 🡒 
`object`

**Implemented interfaces:**

- IEqualityComparer\<JsonElement\>

Calculates equality between two **System.Text.Json.JsonElement**s.

## Remarks

This comparison is compliant with the ideals expressed by JSON:
            
- Objects are unordered.
- Arrays are ordered.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Instance** | JsonElementEqualityComparer | A singleton instance for convenience. |

## Methods

### Equals(JsonElement x, JsonElement y)

Determines whether the specified objects are equal.

#### Declaration

```c#
public bool Equals(JsonElement x, JsonElement y)
```

| Parameter | Type | Description |
|---|---|---|
| x | JsonElement | The first object of type T to compare. |
| y | JsonElement | The second object of type T to compare. |


#### Returns

true if the specified objects are equal; otherwise, false.

### GetHashCode(JsonElement obj)

Returns a hash code for the specified object.

#### Declaration

```c#
public int GetHashCode(JsonElement obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | JsonElement | The **System.Object** for which a hash code is to be returned. |


#### Returns

A hash code for the specified object.

