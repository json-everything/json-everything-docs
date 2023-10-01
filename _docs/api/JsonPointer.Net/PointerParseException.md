---
layout: "page"
title: "PointerParseException Class"
bookmark: "PointerParseException"
permalink: "/api/JsonPointer.Net/:title/"
order: "9.10.004"
---
**Namespace:** Json.Pointer

**Inheritance:**
`PointerParseException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown during parsing when the source string contains invalid JSON Pointer data.

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

### PointerParseException()

Creates a **Json.Pointer.PointerParseException**.

#### Declaration

```c#
public PointerParseException()
```


### PointerParseException(string message)

Creates a **Json.Pointer.PointerParseException**.

#### Declaration

```c#
public PointerParseException(string message)
```


### PointerParseException(string message, Exception inner)

Creates a **Json.Pointer.PointerParseException**.

#### Declaration

```c#
public PointerParseException(string message, Exception inner)
```


