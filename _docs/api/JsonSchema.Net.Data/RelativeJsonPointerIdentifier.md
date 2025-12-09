---
layout: "page"
title: "RelativeJsonPointerIdentifier Class"
bookmark: "RelativeJsonPointerIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.011"
---
**Namespace:** Json.Schema.Data.Keywords

**Inheritance:**
`RelativeJsonPointerIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are Relative JSON Pointers.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Target** | RelativeJsonPointer | The Relative JSON Pointer target. |

## Constructors

### RelativeJsonPointerIdentifier(RelativeJsonPointer target)

Creates a new instance of **Json.Schema.Data.Keywords.RelativeJsonPointerIdentifier**.

#### Declaration

```c#
public RelativeJsonPointerIdentifier(RelativeJsonPointer target)
```

| Parameter | Type | Description |
|---|---|---|
| target | RelativeJsonPointer | The target. |


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

