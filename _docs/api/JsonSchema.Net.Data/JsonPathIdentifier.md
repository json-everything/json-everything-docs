---
layout: "page"
title: "JsonPathIdentifier Class"
bookmark: "JsonPathIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.006"
---
**Namespace:** Json.Schema.Data.Keywords

**Inheritance:**
`JsonPathIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are JSON Paths.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Query** | JsonPath | Gets the JSON Path query. |

## Constructors

### JsonPathIdentifier(JsonPath query)

Creates a new **Json.Schema.Data.Keywords.JsonPathIdentifier**.

#### Declaration

```c#
public JsonPathIdentifier(JsonPath query)
```

| Parameter | Type | Description |
|---|---|---|
| query | JsonPath |  |


## Methods

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

