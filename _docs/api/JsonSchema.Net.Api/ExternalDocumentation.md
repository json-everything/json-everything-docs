---
layout: "page"
title: "ExternalDocumentation Class"
bookmark: "ExternalDocumentation"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.010"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`ExternalDocumentation`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models external documentation.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Url** | Uri | Gets the URL for the target documentation. |

## Constructors

### ExternalDocumentation(Uri url)



#### Declaration

```c#
public ExternalDocumentation(Uri url)
```

| Parameter | Type | Description |
|---|---|---|
| url | Uri | The URL for the target documentation. |


### ExternalDocumentation(string url)



#### Declaration

```c#
public ExternalDocumentation(string url)
```

| Parameter | Type | Description |
|---|---|---|
| url | string | The URL for the target documentation. |


