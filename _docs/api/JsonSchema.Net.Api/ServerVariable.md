---
layout: "page"
title: "ServerVariable Class"
bookmark: "ServerVariable"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.058"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`ServerVariable`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a server variable.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Default** | string | Gets the default value to use for substitution. |
| **Description** | string | Gets or sets the description. |
| **Enum** | IReadOnlyList\<string\> | Gets or sets an enumeration of string values to be used if the substitution options are from a limited set. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### ServerVariable(string default)



#### Declaration

```c#
public ServerVariable(string default)
```

| Parameter | Type | Description |
|---|---|---|
| default | string | The default value |


