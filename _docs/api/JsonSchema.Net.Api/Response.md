---
layout: "page"
title: "Response Class"
bookmark: "Response"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.047"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Response`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a response.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Content** | Dictionary\<string, MediaType\> | Gets or sets the content collection. |
| **Description** | string | Gets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Headers** | Dictionary\<string, Header\> | Gets or sets the header collection. |
| **Links** | Dictionary\<string, Link\> | Gets or sets the link collection. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### Response(string description)



#### Declaration

```c#
public Response(string description)
```

| Parameter | Type | Description |
|---|---|---|
| description | string | The description |


