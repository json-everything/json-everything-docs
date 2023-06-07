---
layout: "page"
title: "TypeExtensions Class"
bookmark: "TypeExtensions"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.77"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`TypeExtensions`
 🡒 
`object`

Provides informative methods for types.

## Methods

### IsArray(this Type type)

Determines whether the type is a simple, one-dimensional, non-keyed collection.

#### Declaration

```c#
public static bool IsArray(this Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type. |


#### Returns

true if the type represents an array; false otherwise.

