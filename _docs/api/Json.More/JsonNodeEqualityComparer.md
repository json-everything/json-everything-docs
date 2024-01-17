---
layout: "page"
title: "JsonNodeEqualityComparer Class"
bookmark: "JsonNodeEqualityComparer"
permalink: "/api/Json.More/:title/"
order: "10.13.007"
---
**Namespace:** Json.More

**Inheritance:**
`JsonNodeEqualityComparer`
 🡒 
`object`

**Implemented interfaces:**

- IEqualityComparer\<JsonNode\>

Calculates equality between two **System.Text.Json.JsonElement**s.

## Remarks

This comparison is compliant with the ideals expressed by JSON:
            
- Objects are unordered.
- Arrays are ordered.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Instance** | JsonNodeEqualityComparer | A singleton instance for convenience. |

## Methods

### Equals(JsonNode x, JsonNode y)

Determines whether the specified objects are equal.

#### Declaration

```c#
public bool Equals(JsonNode x, JsonNode y)
```

| Parameter | Type | Description |
|---|---|---|
| x | JsonNode | The first object of type T to compare. |
| y | JsonNode | The second object of type T to compare. |


#### Returns

true if the specified objects are equal; otherwise, false.

### GetHashCode(JsonNode obj)

Returns a hash code for the specified object.

#### Declaration

```c#
public int GetHashCode(JsonNode obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | JsonNode | The **System.Object** for which a hash code is to be returned. |


#### Returns

A hash code for the specified object.

