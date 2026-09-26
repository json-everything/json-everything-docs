---
layout: "page"
title: "RequestBody Class"
bookmark: "RequestBody"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.045"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`RequestBody`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a request body.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Content** | Dictionary\<string, MediaType\> | Gets the content collection. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Required** | bool? | Gets or sets whether the request body is required. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### RequestBody(Dictionary\<string, MediaType\> content)



#### Declaration

```c#
public RequestBody(Dictionary<string, MediaType> content)
```

| Parameter | Type | Description |
|---|---|---|
| content | Dictionary\<string, MediaType\> |  |


