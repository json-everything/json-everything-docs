---
layout: "page"
title: "HeaderRef Class"
bookmark: "HeaderRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.014"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`HeaderRef`
 🡒 
`Header`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to a header.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AllowEmptyValue** | bool? | Gets or sets whether the header can be present with an empty value. |
| **AllowReserved** | bool? | Gets or sets whether the parameter value should allow reserved characters. |
| **Content** | Dictionary\<string, MediaType\> | Gets or sets a collection of content. |
| **Deprecated** | bool? | Gets or sets whether the header is deprecated. |
| **Description** | string | Gets or sets the description. |
| **Example** | JsonNode | Gets or sets an example. |
| **Examples** | Dictionary\<string, Example\> | Gets or sets a collection of examples. |
| **Explode** | bool? | Gets or sets whether this will be exploded into multiple parameters. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Ref** | Uri | The URI for the reference. |
| **Required** | bool? | Gets or sets whether the header is required. |
| **Schema** | JsonSchema | Gets or sets a schema for the content. |
| **Style** | ParameterStyle? | Gets or sets how the header value will be serialized. |
| **Summary** | string | Gets or sets the summary. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### HeaderRef(Uri reference)



#### Declaration

```c#
public HeaderRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### HeaderRef(string reference)



#### Declaration

```c#
public HeaderRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


