---
layout: "page"
title: "SecurityScheme Class"
bookmark: "SecurityScheme"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.054"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`SecurityScheme`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a security scheme.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BearerFormat** | string | Gets or sets the bearer token format. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Flows** | OAuthFlowCollection | Gets or sets the collection of OAuth flows. |
| **In** | SecuritySchemeLocation? | Gets or sets the location of the API key. |
| **Name** | string | Gets or sets the name. |
| **OpenIdConnectUrl** | Uri | Gets the OpenID Connect URL. |
| **Scheme** | string | Gets or sets the scheme. |
| **Type** | string | Gets the type of security scheme. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### SecurityScheme(string type)



#### Declaration

```c#
public SecurityScheme(string type)
```

| Parameter | Type | Description |
|---|---|---|
| type | string | The security scheme type |


