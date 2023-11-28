---
layout: "page"
title: "UnknownFormat Class"
bookmark: "UnknownFormat"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.171"
---
**Namespace:** Json.Schema

**Inheritance:**
`UnknownFormat`
 🡒 
`Format`
 🡒 
`object`

Represents an unknown format.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Key** | string | The format key. |

## Constructors

### UnknownFormat(string key)

Creates a new **Json.Schema.UnknownFormat** instance.

#### Declaration

```c#
public UnknownFormat(string key)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The key. |


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

`true`.  Override to return another value.

