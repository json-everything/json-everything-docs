---
layout: "page"
title: "ParameterRef Class"
bookmark: "ParameterRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.037"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`ParameterRef`
 🡒 
`Parameter`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to a parameter.

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
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Name** | string | Gets the name. |
| **Ref** | Uri | The URI for the reference. |
| **Required** | bool? | Gets or sets whether the parameter is required. |
| **Schema** | JsonSchema | Gets or sets a schema for the content. |
| **Style** | ParameterStyle? | Gets or sets how the parameter value will be serialized. |
| **Summary** | string | Gets or sets the summary. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### ParameterRef(Uri reference)



#### Declaration

```c#
public ParameterRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### ParameterRef(string reference)



#### Declaration

```c#
public ParameterRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


