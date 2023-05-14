---
layout: "page"
title: "NumberRange Struct"
bookmark: "NumberRange"
permalink: "/api/JsonSchema.Net.DataGeneration/:title/"
order: "9.06.04"
---
**Namespace:** Json.Schema.DataGeneration

**Inheritance:**
`NumberRange`
 🡒 
`ValueType`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<NumberRange\>

Defines a number range.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Maximum** | Bound | Gets the maximum (upper bound). |
| **Minimum** | Bound | Gets the minimum (lower bound). |

## Constructors

### NumberRange(Bound minimum, Bound maximum)

Creates a new number range.

#### Declaration

```c#
public NumberRange(Bound minimum, Bound maximum)
```

| Parameter | Type | Description |
|---|---|---|
| minimum | Bound | The minimum |
| maximum | Bound | The maximum |


## Methods

### Contains(decimal value)

Calculates whether a single value is contained in the range.

#### Declaration

```c#
public bool Contains(decimal value)
```


#### Returns

True if the range contains the value; false otherwise.

### Difference(NumberRange a, NumberRange b)

Calculates the set of one range omitting another.  May be multiple ranges.

#### Declaration

```c#
public static IEnumerable<NumberRange> Difference(NumberRange a, NumberRange b)
```

| Parameter | Type | Description |
|---|---|---|
| a | NumberRange | The source range |
| b | NumberRange | The operating range. |


#### Returns

The resulting set of ranges that exist in the source range but not the operating range.

### Equals(NumberRange other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(NumberRange other)
```

| Parameter | Type | Description |
|---|---|---|
| other | NumberRange | An object to compare with this object. |


#### Returns

true if the current object is equal to the <paramref name="other">other</paramref> parameter; otherwise, false.

### Equals(object obj)

Indicates whether this instance and a specified object are equal.

#### Declaration

```c#
public override bool Equals(object obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | object | The object to compare with the current instance. |


#### Returns

true if <paramref name="obj">obj</paramref> and this instance are the same type and represent the same value; otherwise, false.

### GetHashCode()

Returns the hash code for this instance.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A 32-bit signed integer that is the hash code for this instance.

### Intersection(NumberRange a, NumberRange b)

Calculates the intersection of two number ranges.  May be multiple ranges.

#### Declaration

```c#
public static IEnumerable<NumberRange> Intersection(NumberRange a, NumberRange b)
```


#### Returns

The resulting set of ranges that exist in both parameters.

### ToString()

Returns the fully qualified type name of this instance.

#### Declaration

```c#
public override string ToString()
```


#### Returns

The fully qualified type name.

### Union(NumberRange a, NumberRange b)

Calculates the union of two number ranges.  May be multiple ranges.

#### Declaration

```c#
public static IEnumerable<NumberRange> Union(NumberRange a, NumberRange b)
```


#### Returns

The resulting set of ranges that exist in either parameters.

