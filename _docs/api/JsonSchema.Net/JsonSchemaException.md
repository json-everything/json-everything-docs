---
layout: "page"
title: "JsonSchemaException Class"
bookmark: "JsonSchemaException"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.55"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchemaException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown when a schema is invalid or cannot be processed with the current configuration.

## Properties

| Name | Type | Summary |
|---|---|---|
| **TargetSite** | MethodBase |  |
| **Message** | string |  |
| **Data** | IDictionary |  |
| **InnerException** | Exception |  |
| **HelpLink** | string |  |
| **Source** | string |  |
| **HResult** | int |  |
| **StackTrace** | string |  |
## Constructors

### JsonSchemaException(string message)

Creates a new instance of the **Json.Schema.JsonSchemaException** type.

#### Declaration

```c#
public JsonSchemaException(string message)
```
| Parameter | Type | Description |
|---|---|---|
| message | string | The message that describes the error. |

