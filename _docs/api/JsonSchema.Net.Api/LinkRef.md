---
layout: "page"
title: "LinkRef Class"
bookmark: "LinkRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.018"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`LinkRef`
 🡒 
`Link`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to a link.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **OperationId** | string | Gets or sets the name of the operation. |
| **OperationRef** | Uri | Gets or sets a relative or absolute URI reference to an OAS operation. |
| **Parameters** | Dictionary\<string, RuntimeExpression\> | Gets or sets the parameter collection. |
| **Ref** | Uri | The URI for the reference. |
| **RequestBody** | RuntimeExpression | Gets or sets the request body for the target operation. |
| **Server** | Server | Gets or sets the server for the target operation. |
| **Summary** | string | Gets or sets the summary. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### LinkRef(Uri reference)



#### Declaration

```c#
public LinkRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### LinkRef(string reference)



#### Declaration

```c#
public LinkRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


