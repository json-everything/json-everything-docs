---
layout: "page"
title: "MaxLengthIntent Class"
bookmark: "MaxLengthIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.051"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MaxLengthIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `maxLength` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The value. |

## Constructors

### MaxLengthIntent(uint value)

Creates a new **Json.Schema.Generation.Intents.MaxLengthIntent** instance.

#### Declaration

```c#
public MaxLengthIntent(uint value)
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


