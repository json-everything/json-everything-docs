---
layout: "page"
title: "Bound Struct"
bookmark: "Bound"
permalink: "/api/JsonSchema.Net.DataGeneration/:title/"
order: "10.07.000"
---
**Namespace:** Json.Schema.DataGeneration

**Inheritance:**
`Bound`
 🡒 
`ValueType`
 🡒 
`object`

**Implemented interfaces:**

- IComparable\<Bound\>
- IEquatable\<Bound\>

Describes a lower or upper bound to a **Json.Schema.DataGeneration.NumberRange**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Inclusive** | bool | Gets whether the value is included in the bound. |
| **Value** | decimal | Gets the bound value. |

## Constructors

### Bound(decimal value, bool inclusive)

Creates a new **Json.Schema.DataGeneration.Bound**.

#### Declaration

```c#
public Bound(decimal value, bool inclusive)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The value |
| inclusive | bool | Whether the value is included. Default is true. |


## Methods

### CompareTo(Bound other)

Defines a generalized comparison method that a value type or class implements to create a type-specific comparison method for ordering or sorting its instances.

#### Declaration

```c#
public int CompareTo(Bound other)
```


#### Returns



### Complement(Bound b)

Identifies the complement of a bound, which is the same value and inverted inclusivity.

#### Declaration

```c#
public static Bound Complement(Bound b)
```


#### Returns



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

### Equals(Bound other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(Bound other)
```

| Parameter | Type | Description |
|---|---|---|
| other | Bound | An object to compare with this object. |


#### Returns

true if the current object is equal to the <paramref name="other">other</paramref> parameter; otherwise, false.

### GetHashCode()

Returns the hash code for this instance.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A 32-bit signed integer that is the hash code for this instance.

### Maximum(Bound a, Bound b)

Identifies the maximum of two bounds, including their inclusivity.

#### Declaration

```c#
public static Bound Maximum(Bound a, Bound b)
```


#### Returns



### Minimum(Bound a, Bound b)

Identifies the minimum of two bounds, including their inclusivity.

#### Declaration

```c#
public static Bound Minimum(Bound a, Bound b)
```


#### Returns



