---
layout: "page"
title: "ExampleRef Class"
bookmark: "ExampleRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.007"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`ExampleRef`
 🡒 
`Example`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer
- IComponentRef

Models a `$ref` to an example.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **ExternalValue** | string | Gets or sets a URI that points to the literal example. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Ref** | Uri | The URI for the reference. |
| **Summary** | string | Gets or sets the summary. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Value** | JsonNode | Gets or sets the example value. |

## Constructors

### ExampleRef(Uri reference)



#### Declaration

```c#
public ExampleRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### ExampleRef(string reference)



#### Declaration

```c#
public ExampleRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


