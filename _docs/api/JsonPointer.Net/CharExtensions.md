---
layout: "page"
title: "CharExtensions Class"
bookmark: "CharExtensions"
permalink: "/api/JsonPointer.Net/:title/"
0.10.000"
---
**Namespace:** Json.Pointer

**Inheritance:**
`CharExtensions`
 🡒 
`object`

Extensions for **System.Char**.

## Methods

### GetHexadecimalValue(this char c)

Translates the character to its hexadecimal numeric value.

#### Declaration

```c#
public static int GetHexadecimalValue(this char c)
```

| Parameter | Type | Description |
|---|---|---|
| c | char | A **System.Char**. |


#### Returns

0-9 for `0-9`; 11-15 for `a-f` and `A-F`.

### IsHexadecimal(this char c)

Determines if the char represents a hexadecimal value.

#### Declaration

```c#
public static bool IsHexadecimal(this char c)
```

| Parameter | Type | Description |
|---|---|---|
| c | char | A **System.Char**. |


#### Returns

`true` if the character is in the ranges `0-9`, `a-z`, or `A-Z`; `false` otherwise.

