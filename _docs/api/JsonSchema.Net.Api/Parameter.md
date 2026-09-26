---
layout: "page"
title: "Parameter Class"
bookmark: "Parameter"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.035"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Parameter`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a parameter.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AllowEmptyValue** | bool? | Gets or sets whether the parameter is allowed to be present with an empty value. |
| **AllowReserved** | bool? | Gets or sets whether the parameter value should allow reserved characters. |
| **Content** | Dictionary\<string, MediaType\> | Gets or sets a collection of content. |
| **Deprecated** | bool? | Gets or sets whether the parameter is deprecated. |
| **Description** | string | Gets or sets the description. |
| **Example** | JsonNode | Gets or sets an example. |
| **Examples** | Dictionary\<string, Example\> | Gets or sets a collection of examples. |
| **Explode** | bool? | Gets or sets whether this will be exploded into multiple parameters. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **In** | ParameterLocation | Gets the parameter location. |
| **Name** | string | Gets the name. |
| **Required** | bool? | Gets or sets whether the parameter is required. |
| **Schema** | JsonSchema | Gets or sets a schema for the content. |
| **Style** | ParameterStyle? | Gets or sets how the parameter value will be serialized. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### Parameter(string name, ParameterLocation in)



#### Declaration

```c#
public Parameter(string name, ParameterLocation in)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The name |
| in | ParameterLocation | The parameter location |


