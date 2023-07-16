---
layout: "page"
title: "MinLengthIntent Class"
bookmark: "MinLengthIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.052"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MinLengthIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `minLength` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The value. |

## Constructors

### MinLengthIntent(uint value)

Creates a new **Json.Schema.Generation.Intents.MinLengthIntent** instance.

#### Declaration

```c#
public MinLengthIntent(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The value. |


## Methods

### Apply(JsonSchemaBuilder builder)

Applies the keyword to the **Json.Schema.JsonSchemaBuilder**.

#### Declaration

```c#
public void Apply(JsonSchemaBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |


