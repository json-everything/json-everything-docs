---
layout: "page"
title: "Duration Struct"
bookmark: "Duration"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.22"
---
**Namespace:** Json.Schema

**Inheritance:**
`Duration`
 🡒 
`ValueType`
 🡒 
`object`

Represents an ISO 8601 ABNF duration value.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Years** | uint | The number of years. |
| **Months** | uint | The number of months. |
| **Weeks** | uint | The number of weeks.  Incompatible with **Json.Schema.Duration.Years**, **Json.Schema.Duration.Months**, and **Json.Schema.Duration.Days**. |
| **Days** | uint | The number of days. |
| **Hours** | uint | The number of hours. |
| **Minutes** | uint | The number of minutes. |
| **Seconds** | uint | The number of seconds. |
## Methods

### Parse(string source)

Parses a **Json.Schema.Duration** from a string.

#### Declaration

```c#
public static Duration Parse(string source)
```
| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |

#### Returns

A duration.

### TryParse(string source, out Duration duration)

Parses a **Json.Schema.Duration** from a string.

#### Declaration

```c#
public static bool TryParse(string source, out Duration duration)
```
| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |
| duration | out Duration | The resulting duration. |

#### Returns

`true` if the parse was successful; `false` otherwise.
