---
layout: "page"
title: "Link Class"
bookmark: "Link"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.017"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Link`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a link object.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **OperationId** | string | Gets or sets the name of the operation. |
| **OperationRef** | Uri | Gets or sets a relative or absolute URI reference to an OAS operation. |
| **Parameters** | Dictionary\<string, RuntimeExpression\> | Gets or sets the parameter collection. |
| **RequestBody** | RuntimeExpression | Gets or sets the request body for the target operation. |
| **Server** | Server | Gets or sets the server for the target operation. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

