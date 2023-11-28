---
layout: "page"
title: "PatchOperation Class"
bookmark: "PatchOperation"
permalink: "/api/JsonPatch.Net/:title/"
order: "10.09.004"
---
**Namespace:** Json.Patch

**Inheritance:**
`PatchOperation`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<PatchOperation\>

Represents a single JSON Patch operation.

## Properties

| Name | Type | Summary |
|---|---|---|
| **From** | JsonPointer | Gets the source path. |
| **Op** | OperationType | Gets the operation type. |
| **Path** | JsonPointer | Gets the target path. |
| **Value** | JsonNode | Gets the discrete value. |

## Methods

### Add(JsonPointer path, JsonNode value)

Creates an `add` operation.

#### Declaration

```c#
public static PatchOperation Add(JsonPointer path, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| path | JsonPointer | The source path. |
| value | JsonNode | The value to add. |


#### Returns

An `add` operation.

### Copy(JsonPointer from, JsonPointer path)

Creates an `copy` operation.

#### Declaration

```c#
public static PatchOperation Copy(JsonPointer from, JsonPointer path)
```

| Parameter | Type | Description |
|---|---|---|
| path | JsonPointer | The target path. |
| from | JsonPointer | The path to the value to move. |


#### Returns

An `copy` operation.

### Equals(PatchOperation other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PatchOperation other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PatchOperation | An object to compare with this object. |


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

### Move(JsonPointer from, JsonPointer path)

Creates an `move` operation.

#### Declaration

```c#
public static PatchOperation Move(JsonPointer from, JsonPointer path)
```

| Parameter | Type | Description |
|---|---|---|
| path | JsonPointer | The target path. |
| from | JsonPointer | The path to the value to move. |


#### Returns

An `move` operation.

### Remove(JsonPointer path)

Creates an `remove` operation.

#### Declaration

```c#
public static PatchOperation Remove(JsonPointer path)
```

| Parameter | Type | Description |
|---|---|---|
| path | JsonPointer | The source path. |


#### Returns

An `remove` operation.

### Replace(JsonPointer path, JsonNode value)

Creates an `replace` operation.

#### Declaration

```c#
public static PatchOperation Replace(JsonPointer path, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| path | JsonPointer | The source path. |
| value | JsonNode | The value to add. |


#### Returns

An `replace` operation.

### Test(JsonPointer path, JsonNode value)

Creates an `test` operation.

#### Declaration

```c#
public static PatchOperation Test(JsonPointer path, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| path | JsonPointer | The source path. |
| value | JsonNode | The value to match. |


#### Returns

An `test` operation.

