---
layout: "page"
title: "TypeExtensions Class"
bookmark: "TypeExtensions"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.083"
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

### IsNullableNumber(this Type type)

Determines if the type is a nullable value type, i.e. **System.Nullable`1**.

#### Declaration

```c#
public static bool IsNullableNumber(this Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type |


#### Returns

True if the type is **System.Nullable`1**; false otherwise.

### IsNullableValueType(this Type type)

Determines if the type is a nullable value type, i.e. **System.Nullable`1**.

#### Declaration

```c#
public static bool IsNullableValueType(this Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type |


#### Returns

True if the type is **System.Nullable`1**; false otherwise.

