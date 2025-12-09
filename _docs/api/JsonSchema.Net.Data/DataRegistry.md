---
layout: "page"
title: "DataRegistry Class"
bookmark: "DataRegistry"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.002"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`DataRegistry`
 🡒 
`object`

Provides a registry for associating URIs with JSON elements, supporting registration, retrieval, and optional
automatic fetching of data by URI.

## Remarks

The DataRegistry class enables applications to register and retrieve JSON data by URI, with support
            for a global registry and customizable fetch logic. Registered data can be retrieved from both instance and global
            registries. Thread safety is not guaranteed; callers should ensure appropriate synchronization if accessing

## Properties

| Name | Type | Summary |
|---|---|---|
| **Fetch** | Func\<Uri, JsonElement\> | Gets or sets a method to enable automatic download of data by URI ID. |
| **Global** | DataRegistry | The global registry. |

## Methods

### Get(Uri uri)

Gets data by URI ID.

#### Declaration

```c#
public JsonElement? Get(Uri uri)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI ID. |


#### Returns

The **System.Text.Json.JsonElement**, if registered in either this or the global registry;
otherwise null.

### Register(Uri uri, JsonElement element)

Registers the specified JSON element with the given URI, replacing any existing element associated with that URI.

#### Declaration

```c#
public void Register(Uri uri, JsonElement element)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI to associate with the JSON element. Must be an absolute or relative URI; relative URIs are resolved to |
| element | JsonElement | The JSON element to register with the specified URI. |


#### Remarks

If an element is already registered for the given URI, it will be overwritten.

### SimpleDownload(Uri uri)

Provides a simple data fetch method that supports `http`, `https`, and `file` URI schemes.

#### Declaration

```c#
public static JsonNode SimpleDownload(Uri uri)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI to fetch. |


#### Returns

A JSON string representing the data

