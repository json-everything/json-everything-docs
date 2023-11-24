---
layout: "page"
title: "TypeExtensions Class"
bookmark: "TypeExtensions"
permalink: "/api/Json.More/:title/"
0.12.010"
---
**Namespace:** Json.More

**Inheritance:**
`TypeExtensions`
 🡒 
`object`

Provides informative methods for types.

## Methods

### IsFloatingPoint(this Type type)

Determines whether the type is a non-integer floating point number.

#### Declaration

```c#
public static bool IsFloatingPoint(this Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type. |


#### Returns

true if it represents a floating-point number; false otherwise.

### IsInteger(this Type type)

Determines whether the type is considered an integer.

#### Declaration

```c#
public static bool IsInteger(this Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type. |


#### Returns

true if it represents an integer; false otherwise.

### IsNumber(this Type type)

Determines whether the type is a number.

#### Declaration

```c#
public static bool IsNumber(this Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type. |


#### Returns

true if it represents a number; false otherwise.

