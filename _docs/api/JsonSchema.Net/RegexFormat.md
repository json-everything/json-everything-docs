---
layout: "page"
title: "RegexFormat Class"
bookmark: "RegexFormat"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.097"
---
**Namespace:** Json.Schema

**Inheritance:**
`RegexFormat`
 🡒 
`Format`
 🡒 
`object`

A regular-expression-based format.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Key** | string | The format key. |

## Constructors

### RegexFormat(string key, string regex)

Creates a new **Json.Schema.RegexFormat**.

#### Declaration

```c#
public RegexFormat(string key, string regex)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The format key. |
| regex | string | The regular expression. |


### RegexFormat(string key, Regex regex)

Creates a new **Json.Schema.RegexFormat**.

#### Declaration

```c#
public RegexFormat(string key, Regex regex)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The format key. |
| regex | Regex | The regular expression. |


## Methods

### Validate(JsonElement value, out string errorMessage)

Validates an instance against a format and provides an error message.

#### Declaration

```c#
public override bool Validate(JsonElement value, out string errorMessage)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonElement |  |
| errorMessage | out string | An error message. |


#### Returns

`true` if the value is a match for the regular expression; `false` otherwise.

