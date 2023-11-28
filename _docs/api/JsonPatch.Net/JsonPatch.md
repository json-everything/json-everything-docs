---
layout: "page"
title: "JsonPatch Class"
bookmark: "JsonPatch"
permalink: "/api/JsonPatch.Net/:title/"
order: "10.09.000"
---
**Namespace:** Json.Patch

**Inheritance:**
`JsonPatch`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<JsonPatch\>

Models a JSON Patch document.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Operations** | IReadOnlyList\<PatchOperation\> | Gets the collection of operations. |

## Constructors

### JsonPatch(params PatchOperation[] operations)

Creates a new instance of the **Json.Patch.JsonPatch** class.

#### Declaration

```c#
public JsonPatch(params PatchOperation[] operations)
```

| Parameter | Type | Description |
|---|---|---|
| operations | params PatchOperation[] | The collection of operations. |


### JsonPatch(IEnumerable\<PatchOperation\> operations)

Creates a new instance of the **Json.Patch.JsonPatch** class.

#### Declaration

```c#
public JsonPatch(IEnumerable<PatchOperation> operations)
```

| Parameter | Type | Description |
|---|---|---|
| operations | IEnumerable\<PatchOperation\> | The collection of operations. |


## Methods

### Apply(JsonNode source)

Applies the patch to a JSON document.

#### Declaration

```c#
public PatchResult Apply(JsonNode source)
```

| Parameter | Type | Description |
|---|---|---|
| source | JsonNode | The JSON document. |


#### Returns

A result object containing the output JSON and a possible error message.

### Equals(JsonPatch other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(JsonPatch other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonPatch | An object to compare with this object. |


#### Returns

true if the current object is equal to the <paramref name="other">other</paramref> parameter; otherwise, false.

### Equals(object obj)

Determines whether the specified object is equal to the current object.

#### Declaration

```c#
public override bool Equals(object obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | object | The object to compare with the current object. |


#### Returns

true if the specified object  is equal to the current object; otherwise, false.

### GetHashCode()

Serves as the default hash function.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A hash code for the current object.

