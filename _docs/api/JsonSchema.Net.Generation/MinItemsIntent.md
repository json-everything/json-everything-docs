---
layout: "page"
title: "MinItemsIntent Class"
bookmark: "MinItemsIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.052"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MinItemsIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `minItems` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The value. |

## Constructors

### MinItemsIntent(uint value)

Creates a new **Json.Schema.Generation.Intents.MinItemsIntent** instance.

#### Declaration

```c#
public MinItemsIntent(uint value)
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


