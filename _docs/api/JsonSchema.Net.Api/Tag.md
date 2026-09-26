---
layout: "page"
title: "Tag Class"
bookmark: "Tag"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.059"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Tag`
 🡒 
`object`

**Implemented interfaces:**

- IRefTargetContainer

Models a tag.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | Gets or sets the tag description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **ExternalDocs** | ExternalDocumentation | Gets or sets external documentation. |
| **Name** | string | Gets the tag name. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |

## Constructors

### Tag(string name)



#### Declaration

```c#
public Tag(string name)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The tag name |


