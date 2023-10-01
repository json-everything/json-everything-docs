---
layout: "page"
title: "JsonDocumentEqualityComparer Class"
bookmark: "JsonDocumentEqualityComparer"
permalink: "/api/Json.More/:title/"
order: "9.12.001"
---
**Namespace:** Json.More

**Inheritance:**
`JsonDocumentEqualityComparer`
 🡒 
`object`

**Implemented interfaces:**

- IEqualityComparer\<JsonDocument\>

Calculates equality between two **System.Text.Json.JsonDocument**s.

## Remarks

This comparison is compliant with the ideals expressed by JSON:
            
- Objects are unordered.
- Arrays are ordered.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Instance** | JsonDocumentEqualityComparer | A singleton instance for convenience. |

## Methods

### Equals(JsonDocument x, JsonDocument y)

Determines whether the specified objects are equal.

#### Declaration

```c#
public bool Equals(JsonDocument x, JsonDocument y)
```

| Parameter | Type | Description |
|---|---|---|
| x | JsonDocument | The first object of type T to compare. |
| y | JsonDocument | The second object of type T to compare. |


#### Returns

true if the specified objects are equal; otherwise, false.

### GetHashCode(JsonDocument obj)

Returns a hash code for the specified object.

#### Declaration

```c#
public int GetHashCode(JsonDocument obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | JsonDocument | The **System.Object** for which a hash code is to be returned. |


#### Returns

A hash code for the specified object.

