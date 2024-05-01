---
layout: "page"
title: "PredicateFormat Class"
bookmark: "PredicateFormat"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.125"
---
**Namespace:** Json.Schema

**Inheritance:**
`PredicateFormat`
 🡒 
`Format`
 🡒 
`object`

A **Json.Schema.Format** that uses a predicate for evaluation.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Key** | string | The format key. |

## Constructors

### PredicateFormat(string key, Func\<JsonNode, bool\> predicate)

Creates a new **Json.Schema.PredicateFormat**.

#### Declaration

```c#
public PredicateFormat(string key, Func<JsonNode, bool> predicate)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The format key. |
| predicate | Func\<JsonNode, bool\> | The predicate. |


### PredicateFormat(string key, PredicateWithErrorMessage predicate)

Creates a new **Json.Schema.PredicateFormat**.

#### Declaration

```c#
public PredicateFormat(string key, PredicateWithErrorMessage predicate)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The format key. |
| predicate | PredicateWithErrorMessage | The predicate. |


## Methods

### Validate(JsonNode element, out string errorMessage)

Validates an instance against a format and provides an error message.

#### Declaration

```c#
public override bool Validate(JsonNode element, out string errorMessage)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonNode | The element to validate. |
| errorMessage | out string |  |


#### Returns

`true`.  Override to return another value.

