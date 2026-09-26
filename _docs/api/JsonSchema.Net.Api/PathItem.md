---
layout: "page"
title: "PathItem Class"
bookmark: "PathItem"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.040"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`PathItem`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models an individual path.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Delete** | Operation | Gets or sets the DELETE operation. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Get** | Operation | Gets or sets the GET operation. |
| **Head** | Operation | Gets or sets the HEAD operation. |
| **Options** | Operation | Gets or sets the OPTIONS operation. |
| **Parameters** | IReadOnlyList\<Parameter\> | Gets or sets the collection of parameters. |
| **Patch** | Operation | Gets or sets the PATCH operation. |
| **Post** | Operation | Gets or sets the POST operation. |
| **Put** | Operation | Gets or sets the PUT operation. |
| **Servers** | IReadOnlyList\<Server\> | Gets or sets the collection of servers. |
| **Summary** | string | Gets or sets the summary. |
| **Trace** | Operation | Gets or sets the TRACE operation. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

