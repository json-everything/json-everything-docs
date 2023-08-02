---
layout: "page"
title: "JsonSchemaException Class"
bookmark: "JsonSchemaException"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.055"
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
| **Data** | IDictionary |  |
| **HelpLink** | string |  |
| **HResult** | int |  |
| **InnerException** | Exception |  |
| **Message** | string |  |
| **Source** | string |  |
| **StackTrace** | string |  |
| **TargetSite** | MethodBase |  |

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


