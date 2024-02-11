---
layout: "page"
title: "UnsupportedSchemaException Class"
bookmark: "UnsupportedSchemaException"
permalink: "/api/JsonSchema.Net.CodeGeneration/:title/"
order: "10.14.004"
---
**Namespace:** Json.Schema.CodeGeneration

**Inheritance:**
`UnsupportedSchemaException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown when the generator encounters an unsupported scenario.

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

### UnsupportedSchemaException(string message)

Creates a new instance of the exception.

#### Declaration

```c#
public UnsupportedSchemaException(string message)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The exception message. |


