---
layout: "page"
title: "OpenApiInfo Class"
bookmark: "OpenApiInfo"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.031"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiInfo`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models the info object.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Contact** | ContactInfo | Gets or sets the contact information. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **License** | LicenseInfo | Gets or sets the license information. |
| **Summary** | string | Gets or sets the summary. |
| **TermsOfService** | Uri | Gets or sets the link to the terms of service. |
| **Title** | string | Gets the title. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Version** | string | Gets or sets the API version. |

## Constructors

### OpenApiInfo(string title, string version)



#### Declaration

```c#
public OpenApiInfo(string title, string version)
```

| Parameter | Type | Description |
|---|---|---|
| title | string | The title |
| version | string | The API version |


