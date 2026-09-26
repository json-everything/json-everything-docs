---
layout: "page"
title: "OAuthFlowCollection Class"
bookmark: "OAuthFlowCollection"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.021"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OAuthFlowCollection`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models the OAuth flow collection.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AuthorizationCode** | OAuthFlow | Gets or sets the authorization-code flow. |
| **ClientCredentials** | OAuthFlow | Gets or sets the client-credentials flow. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Implicit** | OAuthFlow | Gets or sets the implicit flow. |
| **Password** | OAuthFlow | Gets or sets the password flow. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

