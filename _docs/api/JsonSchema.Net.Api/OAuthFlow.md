---
layout: "page"
title: "OAuthFlow Class"
bookmark: "OAuthFlow"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.020"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OAuthFlow`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models an OAuth flow.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AuthorizationUrl** | Uri | Gets the authorization URL. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **RefreshUrl** | Uri | Gets or sets the refresh token URL. |
| **Scopes** | Dictionary\<string, string\> | Gets the scopes. |
| **TokenUrl** | Uri | Gets the token URL. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### OAuthFlow(Dictionary\<string, string\> scopes)



#### Declaration

```c#
public OAuthFlow(Dictionary<string, string> scopes)
```

| Parameter | Type | Description |
|---|---|---|
| scopes | Dictionary\<string, string\> | The scopes |


