---
layout: "page"
title: "ResponseRef Class"
bookmark: "ResponseRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.049"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`ResponseRef`
 🡒 
`Response`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to a response.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Content** | Dictionary\<string, MediaType\> | Gets or sets the content collection. |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Headers** | Dictionary\<string, Header\> | Gets or sets the header collection. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Links** | Dictionary\<string, Link\> | Gets or sets the link collection. |
| **Ref** | Uri | The URI for the reference. |
| **Summary** | string | Gets or sets the summary. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### ResponseRef(Uri reference)



#### Declaration

```c#
public ResponseRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### ResponseRef(string reference)



#### Declaration

```c#
public ResponseRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


