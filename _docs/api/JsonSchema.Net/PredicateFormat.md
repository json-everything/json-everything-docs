---
layout: "page"
title: "PredicateFormat Class"
bookmark: "PredicateFormat"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.087"
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

### PredicateFormat(string key, Func\<JsonElement, bool\> predicate)

Creates a new **Json.Schema.PredicateFormat**.

#### Declaration

```c#
public PredicateFormat(string key, Func<JsonElement, bool> predicate)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The format key. |
| predicate | Func\<JsonElement, bool\> | The predicate. |


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

### Validate(JsonElement element, out string errorMessage)

Validates an instance against a format and provides an error message.

#### Declaration

```c#
public override bool Validate(JsonElement element, out string errorMessage)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonElement | The element to validate. |
| errorMessage | out string |  |


#### Returns

`true`.  Override to return another value.

