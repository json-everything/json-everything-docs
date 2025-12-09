---
layout: "page"
title: "JsonPointer Struct"
bookmark: "JsonPointer"
permalink: "/api/JsonPointer.Net/:title/"
order: "10.10.001"
---
**Namespace:** Json.Pointer

**Inheritance:**
`JsonPointer`
 🡒 
`ValueType`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<JsonPointer\>

Represents a JSON Pointer as defined in RFC 6901.
This implementation is optimized for minimal allocations.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Empty** | JsonPointer | Represents an empty JSON Pointer. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Item** | JsonPointerSegment | Gets a segment from the pointer by index. |
| **SegmentCount** | int | Gets the number of segments in the pointer. |

## Methods

### Combine(JsonPointer other)

Combines this pointer with another pointer.

#### Declaration

```c#
public JsonPointer Combine(JsonPointer other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonPointer | The pointer to append |


#### Returns

A new pointer representing the combination

### Combine(params SegmentValueStandIn[] segments)

Combines this pointer with additional segments.

#### Declaration

```c#
public JsonPointer Combine(params SegmentValueStandIn[] segments)
```

| Parameter | Type | Description |
|---|---|---|
| segments | params SegmentValueStandIn[] | The segments to append |


#### Returns

A new pointer representing the combination

#### Remarks

This method incurs allocation costs for string concatenation and array creation.
For better performance with large numbers of segments, consider using **Json.Pointer.JsonPointer.Parse(System.ReadOnlySpan{System.Char})**.

### Create(params SegmentValueStandIn[] segments)

Creates a new JSON Pointer from segments.

#### Declaration

```c#
public static JsonPointer Create(params SegmentValueStandIn[] segments)
```

| Parameter | Type | Description |
|---|---|---|
| segments | params SegmentValueStandIn[] | The segments to combine. |


#### Returns

A new JSON Pointer.

#### Remarks

This method incurs allocation costs for string concatenation and array creation.
For better performance with large pointers, consider using **Json.Pointer.JsonPointer.Parse(System.ReadOnlySpan{System.Char})**.

### EndsWith(JsonPointer other)

Determines whether the current JSON pointer ends with the specified JSON pointer.

#### Declaration

```c#
public bool EndsWith(JsonPointer other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonPointer | The JSON pointer to compare with the end of the current pointer. Cannot be null. |


#### Returns

true if the current JSON pointer ends with the specified pointer; otherwise, false.

### Equals(JsonPointer other)

Compares this pointer with another pointer for equality.

#### Declaration

```c#
public bool Equals(JsonPointer other)
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

<see langword="true" /> if <paramref name="obj" /> and this instance are the same type and represent the same value; otherwise, <see langword="false" />.

### Evaluate(JsonElement element)

Evaluates this pointer against a JsonElement to find the referenced value.

#### Declaration

```c#
public JsonElement? Evaluate(JsonElement element)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonElement | The root JsonElement to evaluate against |


#### Returns

The referenced JsonElement if found, null otherwise

### GetHashCode()

Returns the hash code for this instance.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A 32-bit signed integer that is the hash code for this instance.

### GetLocal(int levels)

Gets the local pointer (trailing end) of this pointer.

#### Declaration

```c#
public JsonPointer GetLocal(int levels)
```

| Parameter | Type | Description |
|---|---|---|
| levels | int | The number of segments to keep from the end. Defaults to 1. |


#### Returns

A new pointer containing the specified number of trailing segments

### GetParent(int levels)

Gets the parent pointer of this pointer.

#### Declaration

```c#
public JsonPointer? GetParent(int levels)
```

| Parameter | Type | Description |
|---|---|---|
| levels | int | The number of ancestor levels to go back. Defaults to 1. |


#### Returns

The parent pointer, or null if this is the root pointer

### GetSegment(int index)

Gets a segment from the pointer by index.

#### Declaration

```c#
public JsonPointerSegment GetSegment(int index)
```

| Parameter | Type | Description |
|---|---|---|
| index | int | The zero-based index of the segment |


#### Returns

The segment as a JsonPointerSegment

### Parse(string pointer)

Creates a new JSON Pointer from a string.

#### Declaration

```c#
public static JsonPointer Parse(string pointer)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | string | The string representation of the pointer. |


#### Returns

A new JSON Pointer.

### Parse(ReadOnlySpan\<char\> pointer)

Creates a new JSON Pointer from a span.

#### Declaration

```c#
public static JsonPointer Parse(ReadOnlySpan<char> pointer)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | ReadOnlySpan\<char\> | The span representation of the pointer. |


#### Returns

A new JSON Pointer.

### StartsWith(JsonPointer other)

Determines whether the current JSON pointer starts with the specified JSON pointer.

#### Declaration

```c#
public bool StartsWith(JsonPointer other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonPointer | The JSON pointer to compare with the beginning of the current pointer. Cannot be null. |


#### Returns

true if the current JSON pointer starts with the specified pointer; otherwise, false.

### ToString()

Gets the string representation of this pointer.

#### Declaration

```c#
public override string ToString()
```


#### Returns

The pointer string

### TryEvaluate(JsonNode root, out JsonNode result)

Evaluates the pointer over a **System.Text.Json.Nodes.JsonNode**.

#### Declaration

```c#
public bool TryEvaluate(JsonNode root, out JsonNode result)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonNode | The **System.Text.Json.Nodes.JsonNode**. |
| result | out JsonNode | The result, if return value is true; null otherwise |


#### Returns

true if a value exists at the indicate path; false otherwise.

### TryGetSegment(int index, out JsonPointerSegment segment)

Attempts to get a segment from the pointer by index.

#### Declaration

```c#
public bool TryGetSegment(int index, out JsonPointerSegment segment)
```

| Parameter | Type | Description |
|---|---|---|
| index | int | The zero-based index of the segment |
| segment | out JsonPointerSegment | The segment if found; default otherwise |


#### Returns

True if the segment was found; false otherwise

### TryParse(string pointer, out JsonPointer result)

Attempts to create a new JSON Pointer from a string.

#### Declaration

```c#
public static bool TryParse(string pointer, out JsonPointer result)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | string | The string representation of the pointer. |
| result | out JsonPointer | The resulting pointer. |


#### Returns

`true` if the pointer was successfully created; `false` otherwise.

### TryParse(ReadOnlySpan\<char\> pointer, out JsonPointer result)

Attempts to create a new JSON Pointer from a span.

#### Declaration

```c#
public static bool TryParse(ReadOnlySpan<char> pointer, out JsonPointer result)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | ReadOnlySpan\<char\> | The span representation of the pointer. |
| result | out JsonPointer | The resulting pointer. |


#### Returns

`true` if the pointer was successfully created; `false` otherwise.

