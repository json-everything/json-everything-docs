---
layout: "page"
title: "PointerSegment Class"
bookmark: "PointerSegment"
permalink: "/api/JsonPointer.Net/:title/"
order: "10.10.006"
---
**Namespace:** Json.Pointer

**Inheritance:**
`PointerSegment`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<PointerSegment\>

Represents a single segment of a JSON Pointer.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | Gets the segment value. |

## Methods

### Create(string value)

Creates a new **Json.Pointer.PointerSegment**.

#### Declaration

```c#
public static PointerSegment Create(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The value. |


#### Returns



### Equals(PointerSegment other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PointerSegment other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PointerSegment | An object to compare with this object. |


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

### Parse(string source)

Parses a JSON Pointer segment from a string.

#### Declaration

```c#
public static PointerSegment Parse(string source)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |


#### Returns

A JSON Pointer segment.

### ToString(JsonPointerStyle pointerStyle)

Returns the string representation of this instance.

#### Declaration

```c#
public string ToString(JsonPointerStyle pointerStyle)
```

| Parameter | Type | Description |
|---|---|---|
| pointerStyle | JsonPointerStyle | Indicates whether to URL-encode the pointer. |


#### Returns

The string representation.

### TryParse(string source, out PointerSegment segment)

Parses a JSON Pointer segment from a string.

#### Declaration

```c#
public static bool TryParse(string source, out PointerSegment segment)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |
| segment | out PointerSegment | The resulting segments. |


#### Returns

`true` if the parse was successful; `false` otherwise.

