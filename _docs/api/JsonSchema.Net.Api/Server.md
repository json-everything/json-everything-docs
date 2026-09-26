---
layout: "page"
title: "Server Class"
bookmark: "Server"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.057"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Server`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a server.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Url** | string | Gets the URL of the server. |
| **Variables** | Dictionary\<string, ServerVariable\> | Gets or sets the variable map. |

## Constructors

### Server(string url)



#### Declaration

```c#
public Server(string url)
```

| Parameter | Type | Description |
|---|---|---|
| url | string | The server URL |


