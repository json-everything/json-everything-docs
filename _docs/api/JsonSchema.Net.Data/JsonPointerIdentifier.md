---
layout: "page"
title: "JsonPointerIdentifier Class"
bookmark: "JsonPointerIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.007"
---
**Namespace:** Json.Schema.Data.Keywords

**Inheritance:**
`JsonPointerIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are JSON Pointers.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Target** | JsonPointer | The JSON Pointer target. |

## Constructors

### JsonPointerIdentifier(JsonPointer target)

Creates a new instance of **Json.Schema.Data.Keywords.JsonPointerIdentifier**.

#### Declaration

```c#
public JsonPointerIdentifier(JsonPointer target)
```

| Parameter | Type | Description |
|---|---|---|
| target | JsonPointer | The target. |


## Methods

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

### TryResolve(JsonElement root, out JsonElement value)

Attempts to resolve a value from the specified JSON element.

#### Declaration

```c#
public bool TryResolve(JsonElement root, out JsonElement value)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonElement | The root **System.Text.Json.JsonElement** to search for the desired value. |
| value | out JsonElement | When this method returns, contains the resolved **System.Text.Json.JsonElement** if the operation succeeds; otherwise, |


#### Returns

true if the value was successfully resolved; otherwise, false.

