---
layout: "page"
title: "Formats Class"
bookmark: "Formats"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.064"
---
**Namespace:** Json.Schema

**Inheritance:**
`Formats`
 🡒 
`object`

The formats supported by JSON Schema base specifications.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Date** | Format | Defines the `date` format. |
| **DateTime** | Format | Defines the `date-time` format. |
| **Duration** | Format | Defines the `duration` format. |
| **Email** | Format | Defines the `email` format. |
| **Hostname** | Format | Defines the `hostname` format. |
| **IdnEmail** | Format | Defines the `idn-email` format. |
| **IdnHostname** | Format | Defines the `idn-hostname` format. |
| **Ipv4** | Format | Defines the `ipv4` format. |
| **Ipv6** | Format | Defines the `ipv6` format. |
| **Iri** | Format | Defines the `iri` format. |
| **IriReference** | Format | Defines the `iri-reference` format. |
| **JsonPointer** | Format | Defines the `json-pointer` format. |
| **Regex** | Format | Defines the `regex` format. |
| **RelativeJsonPointer** | Format | Defines the `relative-json-pointer` format. |
| **Time** | Format | Defines the `time` format. |
| **Uri** | Format | Defines the `uri` format. |
| **UriReference** | Format | Defines the `uri-reference` format. |
| **UriTemplate** | Format | Defines the `uri-template` format. |
| **Uuid** | Format | Defines the `uuid` format. |

## Methods

### CreateUnknown(string name)

Creates an unknown format.

#### Declaration

```c#
public static Format CreateUnknown(string name)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The format key. |


#### Returns

A **Json.Schema.Format** instance.

### Get(string key)

Gets a format by its key.

#### Declaration

```c#
public static Format Get(string key)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The key. |


#### Returns

The specified format, if known; otherwise null.

### Register(Format format)

Registers a new format.

#### Declaration

```c#
public static void Register(Format format)
```

| Parameter | Type | Description |
|---|---|---|
| format | Format | The format. |


