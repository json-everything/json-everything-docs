---
layout: "page"
title: "Header Class"
bookmark: "Header"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.013"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Header`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a header.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AllowEmptyValue** | bool? | Gets or sets whether the header can be present with an empty value. |
| **AllowReserved** | bool? | Gets or sets whether the parameter value should allow reserved characters. |
| **Content** | Dictionary\<string, MediaType\> | Gets or sets a collection of content. |
| **Deprecated** | bool? | Gets or sets whether the header is deprecated. |
| **Description** | string | Gets or sets the description. |
| **Example** | JsonNode | Gets or sets an example. |
| **Examples** | Dictionary\<string, Example\> | Gets or sets a collection of examples. |
| **Explode** | bool? | Gets or sets whether this will be exploded into multiple parameters. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Required** | bool? | Gets or sets whether the header is required. |
| **Schema** | JsonSchema | Gets or sets a schema for the content. |
| **Style** | ParameterStyle? | Gets or sets how the header value will be serialized. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

