---
layout: "page"
title: "RefResolutionException Class"
bookmark: "RefResolutionException"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.145"
---
**Namespace:** Json.Schema

**Inheritance:**
`RefResolutionException`
 🡒 
`JsonSchemaException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown when a reference cannot be resolved.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Anchor** | string | Gets an anchor, if one exists. |
| **BaseUri** | Uri | Gets the base URI of the reference. |
| **Data** | IDictionary |  |
| **HelpLink** | string |  |
| **HResult** | int |  |
| **InnerException** | Exception |  |
| **IsDynamic** | bool | Gets whether the anchor (if one exists) is dynamic. |
| **Location** | JsonPointer | Gets a JSON Pointer, if one exists. |
| **Message** | string |  |
| **Source** | string |  |
| **StackTrace** | string |  |
| **TargetSite** | MethodBase |  |

## Constructors

### RefResolutionException(Uri baseUri, JsonPointer location)

Creates a new instance.

#### Declaration

```c#
public RefResolutionException(Uri baseUri, JsonPointer location)
```

| Parameter | Type | Description |
|---|---|---|
| baseUri | Uri | The base URI of the reference. |
| location | JsonPointer | The JSON Pointer location. |


### RefResolutionException(Uri baseUri, string anchor, bool isDynamic)

Creates a new instance.

#### Declaration

```c#
public RefResolutionException(Uri baseUri, string anchor, bool isDynamic)
```

| Parameter | Type | Description |
|---|---|---|
| baseUri | Uri | The base URI of the reference. |
| anchor | string | (optional) - The anchor. Default is null. |
| isDynamic | bool | (optional) - Whether the reference was dynamic. |


