---
layout: "page"
title: "BoundEqualityComparer Class"
bookmark: "BoundEqualityComparer"
permalink: "/api/JsonSchema.Net.DataGeneration/:title/"
order: "10.07.001"
---
**Namespace:** Json.Schema.DataGeneration

**Inheritance:**
`BoundEqualityComparer`
 🡒 
`object`

**Implemented interfaces:**

- IEqualityComparer\<Bound\>

Comparator for **Json.Schema.DataGeneration.Bound**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Instance** | IEqualityComparer\<Bound\> | Static instance of the comparer. |

## Methods

### Equals(Bound x, Bound y)

Determines whether the specified objects are equal.

#### Declaration

```c#
public bool Equals(Bound x, Bound y)
```

| Parameter | Type | Description |
|---|---|---|
| x | Bound | The first object of type T to compare. |
| y | Bound | The second object of type T to compare. |


#### Returns

true if the specified objects are equal; otherwise, false.

### GetHashCode(Bound obj)

Returns a hash code for the specified object.

#### Declaration

```c#
public int GetHashCode(Bound obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | Bound | The **System.Object** for which a hash code is to be returned. |


#### Returns

A hash code for the specified object.

