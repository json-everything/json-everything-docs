---
layout: "page"
title: "ComponentCollection Class"
bookmark: "ComponentCollection"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.003"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`ComponentCollection`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models the `components` collection.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Callbacks** | Dictionary\<string, Callback\> | Gets or sets the callback components. |
| **Examples** | Dictionary\<string, Example\> | Gets or sets the example components. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Headers** | Dictionary\<string, Header\> | Gets or sets the header components. |
| **Links** | Dictionary\<string, Link\> | Gets or sets the link components. |
| **Parameters** | Dictionary\<string, Parameter\> | Gets or sets the parameter components. |
| **PathItems** | Dictionary\<string, PathItem\> | Gets or sets the path item components. |
| **RequestBodies** | Dictionary\<string, RequestBody\> | Gets or sets the request body components. |
| **Responses** | Dictionary\<string, Response\> | Gets or sets the response components. |
| **Schemas** | Dictionary\<string, JsonSchema\> | Gets or sets the schema components. |
| **SecuritySchemes** | Dictionary\<string, SecurityScheme\> | Gets or sets the security scheme components. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

