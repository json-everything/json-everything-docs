---
layout: "page"
title: "JsonPointer Class"
bookmark: "JsonPointer"
permalink: "/api/JsonPointer.Net/:title/"
order: "10.10.001"
---
**Namespace:** Json.Pointer

**Inheritance:**
`JsonPointer`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<JsonPointer\>
- IReadOnlyList\<string\>
- IReadOnlyCollection\<string\>
- IEnumerable\<string\>
- IEnumerable

Represents a JSON Pointer IAW RFC 6901.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Empty** | JsonPointer | The empty pointer. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Count** | int | Gets the number of segments in the pointer. |
| **Item** | string | Gets a segment value by index. |
| **Item** | JsonPointer |  |

## Methods

### Combine(JsonPointer other)

Concatenates a pointer onto the current pointer.

#### Declaration

```c#
public JsonPointer Combine(JsonPointer other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonPointer | Another pointer. |


#### Returns

A new pointer.

### Combine(params PointerSegment[] additionalSegments)

Concatenates additional segments onto the current pointer.

#### Declaration

```c#
public JsonPointer Combine(params PointerSegment[] additionalSegments)
```

| Parameter | Type | Description |
|---|---|---|
| additionalSegments | params PointerSegment[] | The additional segments. |


#### Returns

A new pointer.

### Create(params PointerSegment[] segments)

Creates a new JSON Pointer from a collection of segments.

#### Declaration

```c#
public static JsonPointer Create(params PointerSegment[] segments)
```

| Parameter | Type | Description |
|---|---|---|
| segments | params PointerSegment[] | A collection of segments. |


#### Returns

The JSON Pointer.

#### Remarks

This method creates un-encoded pointers only.

### Create(Expression\<Func\<T, object\>\> expression, PointerCreationOptions options)

Generates a JSON Pointer from a lambda expression.

#### Declaration

```c#
public static JsonPointer Create(Expression<Func<T, object>> expression, PointerCreationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| expression | Expression\<Func\<T, object\>\> | The lambda expression which gives the pointer path. |
| options | PointerCreationOptions | (optional) Options for creating the pointer. |


#### Returns

The JSON Pointer.

### Equals(JsonPointer other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(JsonPointer other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonPointer | An object to compare with this object. |


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

### Evaluate(JsonElement root)

Evaluates the pointer over a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public JsonElement? Evaluate(JsonElement root)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonElement | The **System.Text.Json.JsonElement**. |


#### Returns

The sub-element at the pointer's location, or null if the path does not exist.

### GetAncestor(int levels)

Creates a new pointer retaining the starting segments.

#### Declaration

```c#
public JsonPointer GetAncestor(int levels)
```

| Parameter | Type | Description |
|---|---|---|
| levels | int | How many levels to remove from the end of the pointer. |


#### Returns

A new pointer.

### GetEnumerator()

Returns an enumerator that iterates through the collection.

#### Declaration

```c#
public IEnumerator<string> GetEnumerator()
```


#### Returns

An enumerator that can be used to iterate through the collection.

### GetHashCode()

Returns the hash code for this instance.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A 32-bit signed integer that is the hash code for this instance.

### GetLocal(int levels)

Creates a new pointer retaining the ending segments.

#### Declaration

```c#
public JsonPointer GetLocal(int levels)
```

| Parameter | Type | Description |
|---|---|---|
| levels | int | How many levels to keep from the end of the pointer. |


#### Returns

A new pointer.

### GetSubPointer(Range range)


#### Declaration

```c#
public JsonPointer GetSubPointer(Range range)
```


#### Returns


### Parse(string source)

Parses a JSON Pointer from a string.

#### Declaration

```c#
public static JsonPointer Parse(string source)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |


#### Returns

A JSON Pointer.

### ToString()

Returns the string representation of this instance.

#### Declaration

```c#
public override string ToString()
```


#### Returns

The string representation.

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

### TryParse(string source, out JsonPointer pointer)

Parses a JSON Pointer from a string.

#### Declaration

```c#
public static bool TryParse(string source, out JsonPointer pointer)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |
| pointer | out JsonPointer | The resulting pointer. |


#### Returns

`true` if the parse was successful; `false` otherwise.

