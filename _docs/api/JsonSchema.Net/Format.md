---
layout: "page"
title: "Format Class"
bookmark: "Format"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.064"
---
**Namespace:** Json.Schema

**Inheritance:**
`Format`
 🡒 
`object`

Represents a format.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Key** | string | The format key. |

## Constructors

### Format(string key)

Creates a new **Json.Schema.Format**.

#### Declaration

```c#
public Format(string key)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The format key. |


## Methods

### Validate(JsonNode node, out string errorMessage)

Validates an instance against a format and provides an error message.

#### Declaration

```c#
public virtual bool Validate(JsonNode node, out string errorMessage)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The node to validate. |
| errorMessage | out string | An error message. |


#### Returns

`true`.  Override to return another value.

