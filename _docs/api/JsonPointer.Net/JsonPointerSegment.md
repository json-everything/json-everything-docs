---
layout: "page"
title: "JsonPointerSegment Struct"
bookmark: "JsonPointerSegment"
permalink: "/api/JsonPointer.Net/:title/"
order: "10.10.003"
---
**Namespace:** Json.Pointer

**Inheritance:**
`JsonPointerSegment`
 🡒 
`ValueType`
 🡒 
`object`

Represents a segment of a JSON Pointer.
This is a ref struct to ensure zero allocations.

## Methods

### AsSpan()

Gets the raw span representation of this segment.

#### Declaration

```c#
public ReadOnlySpan<char> AsSpan()
```


#### Returns

The segment as a ReadOnlySpan&lt;char&gt;.

### Equals(string value)

Compares this segment with a string, handling both encoded and unencoded values.

#### Declaration

```c#
public bool Equals(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The value to compare against (can be encoded or unencoded) |


#### Returns

True if the segment matches the value, false otherwise

### Equals(int value)

Compares this segment with an integer.

#### Declaration

```c#
public bool Equals(int value)
```

| Parameter | Type | Description |
|---|---|---|
| value | int | The value to compare against |


#### Returns

True if the segment matches the value, false otherwise

### Equals(JsonPointerSegment other)

Compares this segment with another segment.

#### Declaration

```c#
public bool Equals(JsonPointerSegment other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonPointerSegment | The segment to compare against. |


#### Returns

True if the segments are equal; false otherwise.

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

(deprecated) Returns the hash code for this instance.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A 32-bit signed integer that is the hash code for this instance.

### ToInt()

Returns the int representation of this segment.

#### Declaration

```c#
public int? ToInt()
```


#### Returns

The segment as an int, or null if the segment is not a valid integer.

### ToString()

Returns the string representation of this segment.

#### Declaration

```c#
public override string ToString()
```


#### Returns

The segment as a string.

