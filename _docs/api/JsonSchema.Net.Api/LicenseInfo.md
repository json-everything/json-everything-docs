---
layout: "page"
title: "LicenseInfo Class"
bookmark: "LicenseInfo"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.016"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`LicenseInfo`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models the license information.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Identifier** | string | Gets or sets an SPDX license expression for the API. |
| **Name** | string | Gets license name used for the API. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Url** | Uri | Gets or sets URL to the license used for the API. |

## Constructors

### LicenseInfo(string name)



#### Declaration

```c#
public LicenseInfo(string name)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The license name used for the API. |


