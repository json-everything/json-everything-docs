---
layout: "page"
title: "RequestBodyRef Class"
bookmark: "RequestBodyRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.046"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`RequestBodyRef`
 🡒 
`RequestBody`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to a request body.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Content** | Dictionary\<string, MediaType\> | Gets the content collection. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Ref** | Uri | The URI for the reference. |
| **Required** | bool? | Gets or sets whether the request body is required. |
| **Summary** | string | Gets or sets the summary. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### RequestBodyRef(Uri reference)



#### Declaration

```c#
public RequestBodyRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### RequestBodyRef(string reference)



#### Declaration

```c#
public RequestBodyRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


