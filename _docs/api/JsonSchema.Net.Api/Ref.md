---
layout: "page"
title: "Ref Class"
bookmark: "Ref"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.043"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`Ref`
 🡒 
`object`

Allows customization of `$ref` resolutions.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Fetch** | FetchFunc | Gets or sets the `$ref` fetching function.  Set to null to disable automatic fetching. |

## Methods

### FetchJson(Uri uri)

Defines a default basic fetching function that uses an
**System.Net.Http.HttpClient** and supports YAML and JSON content.

#### Declaration

```c#
public static Task<JsonElement?> FetchJson(Uri uri)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The resource URI |


#### Returns

The document content

