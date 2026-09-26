---
layout: "page"
title: "Encoding Class"
bookmark: "Encoding"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.005"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Encoding`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models an encoding object.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AllowReserved** | bool? | Gets or sets whether the parameter value SHOULD allow reserved characters. |
| **ContentType** | string | Gets or sets the encoding content type. |
| **Explode** | bool? | Gets or sets whether this will be exploded into multiple parameters. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Headers** | Dictionary\<string, Header\> | Gets or sets headers. |
| **Style** | ParameterStyle? | Gets or sets the encoding parameter style. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

