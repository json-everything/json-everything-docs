---
layout: "page"
title: "RelativeJsonPointer Class"
bookmark: "RelativeJsonPointer"
permalink: "/api/JsonPointer.Net/:title/"
order: "9.09.006"
---
**Namespace:** Json.Pointer

**Inheritance:**
`RelativeJsonPointer`
 🡒 
`object`

Represents a Relative JSON Pointer IAW draft-handrews-relative-json-pointer-02

## Fields

| Name | Type | Summary |
|---|---|---|
| **Null** | RelativeJsonPointer | The null pointer.  Indicates no navigation should occur. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **ArrayIndexManipulator** | int | Gets the number of lateral steps to take.  Applicable only for arrays. |
| **IsIndexQuery** | bool | Gets whether the pointer is an index query, which returns the index within the parent rather than the value. |
| **ParentSteps** | uint | Gets the number of parent (root) steps to take. |
| **Pointer** | JsonPointer | Gets the pointer to follow after taking **Json.Pointer.RelativeJsonPointer.ParentSteps** steps upward. |

## Methods

### FromPointer(uint parentSteps, JsonPointer pointer)

Creates a Relative JSON Pointer from a JSON Pointer and a number of parent steps.

#### Declaration

```c#
public static RelativeJsonPointer FromPointer(uint parentSteps, JsonPointer pointer)
```

| Parameter | Type | Description |
|---|---|---|
| parentSteps | uint | The number of parent steps. |
| pointer | JsonPointer | The JSON Pointer. |


#### Returns

A Relative JSON Pointer.

### FromPointer(uint parentSteps, int arrayIndexManipulator, JsonPointer pointer)

Creates a Relative JSON Pointer from a JSON Pointer and a number of parent steps.

#### Declaration

```c#
public static RelativeJsonPointer FromPointer(uint parentSteps, int arrayIndexManipulator, JsonPointer pointer)
```

| Parameter | Type | Description |
|---|---|---|
| parentSteps | uint | The number of parent steps. |
| arrayIndexManipulator | int | The index manipulator. |
| pointer | JsonPointer | The JSON Pointer. |


#### Returns

A Relative JSON Pointer.

### IndexQuery(uint parentSteps)

Creates an index query pointer.

#### Declaration

```c#
public static RelativeJsonPointer IndexQuery(uint parentSteps)
```

| Parameter | Type | Description |
|---|---|---|
| parentSteps | uint |  |


#### Returns

A Relative JSON Pointer.

### IndexQuery(uint parentSteps, int arrayIndexManipulator)

Creates an index query pointer.

#### Declaration

```c#
public static RelativeJsonPointer IndexQuery(uint parentSteps, int arrayIndexManipulator)
```

| Parameter | Type | Description |
|---|---|---|
| parentSteps | uint |  |
| arrayIndexManipulator | int | The index manipulator. |


#### Returns

A Relative JSON Pointer.

### Parse(string source)

Parses a JSON Pointer segment from a string.

#### Declaration

```c#
public static RelativeJsonPointer Parse(string source)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |


#### Returns

A Relative JSON Pointer.

### ToString()

Returns the fully qualified type name of this instance.

#### Declaration

```c#
public override string ToString()
```


#### Returns

The fully qualified type name.

### TryEvaluate(JsonNode node, out JsonNode result)

Evaluates the relative pointer over a **System.Text.Json.Nodes.JsonNode**.

#### Declaration

```c#
public bool TryEvaluate(JsonNode node, out JsonNode result)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The **System.Text.Json.Nodes.JsonNode**. |
| result | out JsonNode | The result, if return value is true; null otherwise |


#### Returns

true if a value exists at the indicate path; false otherwise.

### TryParse(string source, out RelativeJsonPointer relativePointer)

Parses a JSON Pointer from a string.

#### Declaration

```c#
public static bool TryParse(string source, out RelativeJsonPointer relativePointer)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |
| relativePointer | out RelativeJsonPointer | The resulting relative pointer. |


#### Returns

`true` if the parse was successful; `false` otherwise.

