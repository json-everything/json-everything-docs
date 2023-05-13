---
layout: "page"
title: "PointerParseException Class"
bookmark: "PointerParseException"
permalink: "/api/JsonPointer.Net/:title/"
order: "9.09.04"
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
| **TargetSite** | MethodBase |  |
| **Message** | string |  |
| **Data** | IDictionary |  |
| **InnerException** | Exception |  |
| **HelpLink** | string |  |
| **Source** | string |  |
| **HResult** | int |  |
| **StackTrace** | string |  |
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

