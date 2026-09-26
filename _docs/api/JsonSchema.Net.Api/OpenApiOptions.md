---
layout: "page"
title: "OpenApiOptions Class"
bookmark: "OpenApiOptions"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.032"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiOptions`
 🡒 
`object`

Configures the OpenAPI description and how it is published.

## Remarks

Paths enable what they name: a description is served only when
**Json.Schema.Api.OpenApi.OpenApiOptions.DocumentPath** has a value, and the reference page only when
**Json.Schema.Api.OpenApi.OpenApiOptions.InteractivePath** does.  To describe an API without exposing it, leave both
unset, or set them only outside production.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AddValidation** | bool | Gets or sets whether request validation is registered alongside the description. Defaults to true. |
| **Document** | OpenApiDocument | Gets the description, assembled from the API surface. |
| **DocumentFormats** | OpenApiFormats | Gets or sets the formats the description is served in.  Defaults to both. |
| **DocumentPath** | string | Gets or sets the path where the description is served.  Expressed without an extension. The extensions are specified **Json.Schema.Api.OpenApi.OpenApiOptions.DocumentFormats**.  Defaults to `/openapi`. |
| **FileOutputPath** | string | Gets or sets the file path the description is written to at startup.  Expressed without an extension, as **Json.Schema.Api.OpenApi.OpenApiOptions.DocumentPath** is; one file is written per format in **Json.Schema.Api.OpenApi.OpenApiOptions.DocumentFormats**. |
| **InteractivePath** | string | Gets or sets the path the reference page is served from.  Defaults to `/openapi/reference`. |
| **Name** | string | Gets the name of this description, or null for the default one. |
| **StylesheetUrl** | string | Gets or sets a stylesheet URL applied to the reference page after the built-in styles, so that its rules win where they overlap. |

