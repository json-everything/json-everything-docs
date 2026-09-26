---
layout: "page"
title: "Operation Class"
bookmark: "Operation"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.034"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Operation`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models an operation.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Callbacks** | Dictionary\<string, Callback\> | Gets or sets the callbacks collection. |
| **Deprecated** | bool? | Gets or sets whether the operation is deprecated. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **ExternalDocs** | ExternalDocumentation | Gets or sets external documentation. |
| **OperationId** | string | Gets or sets the operation ID. |
| **Parameters** | IReadOnlyList\<Parameter\> | Gets or sets the parameters. |
| **RequestBody** | RequestBody | Gets or sets the request body. |
| **Responses** | ResponseCollection | Gets or sets the response collection. |
| **Security** | IReadOnlyList\<SecurityRequirement\> | Gets or sets the security requirements. |
| **Servers** | IReadOnlyList\<Server\> | Gets or sets the server collection. |
| **Summary** | string | Gets or sets the summary. |
| **Tags** | IReadOnlyList\<string\> | Gets or sets the tags. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

