---
layout: "page"
title: "RefResolutionException Class"
bookmark: "RefResolutionException"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.095"
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
| **AnchorType** | AnchorType? | Gets the type of anchor, if one exists. |
| **BaseUri** | Uri | Gets the base URI of the reference. |
| **Data** | IDictionary |  |
| **HelpLink** | string |  |
| **HResult** | int |  |
| **InnerException** | Exception |  |
| **Message** | string |  |
| **Source** | string |  |
| **StackTrace** | string |  |
| **TargetSite** | MethodBase |  |

## Constructors

### RefResolutionException(Uri baseUri, string anchor, AnchorType? anchorType)

Creates a new instance.

#### Declaration

```c#
public RefResolutionException(Uri baseUri, string anchor, AnchorType? anchorType)
```

| Parameter | Type | Description |
|---|---|---|
| baseUri | Uri | The base URI of the reference. |
| anchor | string | (optional) - The anchor. Default is null. |
| anchorType | AnchorType? | (optional) - The type of anchor, if present. |


