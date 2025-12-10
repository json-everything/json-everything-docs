---
layout: "page"
title: "JsonSchemaException Class"
bookmark: "JsonSchemaException"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.065"
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


### JsonSchemaException(string message, Exception innerException)

Initializes a new instance of the JsonSchemaException class with a specified error message and a reference to the
inner exception that is the cause of this exception.

#### Declaration

```c#
public JsonSchemaException(string message, Exception innerException)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The error message that explains the reason for the exception. |
| innerException | Exception | The exception that is the cause of the current exception, or a null reference if no inner exception is specified. |


