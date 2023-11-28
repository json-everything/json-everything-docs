---
layout: "page"
title: "RegexFormat Class"
bookmark: "RegexFormat"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.143"
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


## Methods

### Validate(JsonNode node, out string errorMessage)

Validates an instance against a format and provides an error message.

#### Declaration

```c#
public override bool Validate(JsonNode node, out string errorMessage)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The node to validate. |
| errorMessage | out string | An error message. |


#### Returns

`true` if the value is a match for the regular expression; `false` otherwise.

