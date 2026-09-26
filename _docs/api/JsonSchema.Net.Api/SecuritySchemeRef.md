---
layout: "page"
title: "SecuritySchemeRef Class"
bookmark: "SecuritySchemeRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.056"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`SecuritySchemeRef`
 🡒 
`SecurityScheme`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to a security scheme.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BearerFormat** | string | Gets or sets the bearer token format. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Flows** | OAuthFlowCollection | Gets or sets the collection of OAuth flows. |
| **In** | SecuritySchemeLocation? | Gets or sets the location of the API key. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Name** | string | Gets or sets the name. |
| **OpenIdConnectUrl** | Uri | Gets the OpenID Connect URL. |
| **Ref** | Uri | The URI for the reference. |
| **Scheme** | string | Gets or sets the scheme. |
| **Summary** | string | Gets or sets the summary. |
| **Type** | string | Gets the type of security scheme. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### SecuritySchemeRef(Uri reference)



#### Declaration

```c#
public SecuritySchemeRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### SecuritySchemeRef(string reference)



#### Declaration

```c#
public SecuritySchemeRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


