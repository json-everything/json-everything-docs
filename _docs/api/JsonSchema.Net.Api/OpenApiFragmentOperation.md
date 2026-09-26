---
layout: "page"
title: "OpenApiFragmentOperation Class"
bookmark: "OpenApiFragmentOperation"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.027"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiFragmentOperation`
 🡒 
`object`

One operation within an **Json.Schema.Api.OpenApi.OpenApiFragment**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | Gets or sets the description. |
| **Method** | string | Gets or sets the HTTP method, lower-case. |
| **OperationId** | string | Gets or sets the operation ID. |
| **Parameters** | IReadOnlyList\<OpenApiFragmentParameter\> | Gets or sets the parameters. |
| **RequestBodyDescription** | string | Gets or sets the request body description. |
| **RequestBodyIsValidated** | bool | Gets or sets whether the request body is validated, and therefore whether the validation failure response applies. |
| **RequestBodyType** | Type | Gets or sets the request body type, when the operation has one. |
| **Responses** | IReadOnlyList\<OpenApiFragmentResponse\> | Gets or sets the responses. |
| **Route** | string | Gets or sets the route template. |
| **Summary** | string | Gets or sets the summary. |
| **Tags** | IReadOnlyList\<string\> | Gets or sets the tags. |

