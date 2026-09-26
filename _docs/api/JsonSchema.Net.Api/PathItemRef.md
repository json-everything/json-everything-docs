---
layout: "page"
title: "PathItemRef Class"
bookmark: "PathItemRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.041"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`PathItemRef`
 🡒 
`PathItem`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to a path item.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Delete** | Operation | Gets or sets the DELETE operation. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Get** | Operation | Gets or sets the GET operation. |
| **Head** | Operation | Gets or sets the HEAD operation. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Options** | Operation | Gets or sets the OPTIONS operation. |
| **Parameters** | IReadOnlyList\<Parameter\> | Gets or sets the collection of parameters. |
| **Patch** | Operation | Gets or sets the PATCH operation. |
| **Post** | Operation | Gets or sets the POST operation. |
| **Put** | Operation | Gets or sets the PUT operation. |
| **Ref** | Uri | The URI for the reference. |
| **Servers** | IReadOnlyList\<Server\> | Gets or sets the collection of servers. |
| **Summary** | string | Gets or sets the summary. |
| **Trace** | Operation | Gets or sets the TRACE operation. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### PathItemRef(Uri reference)



#### Declaration

```c#
public PathItemRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### PathItemRef(string reference)



#### Declaration

```c#
public PathItemRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


