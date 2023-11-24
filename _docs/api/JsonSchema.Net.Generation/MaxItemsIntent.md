---
layout: "page"
title: "MaxItemsIntent Class"
bookmark: "MaxItemsIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.044"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MaxItemsIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `maxItems` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The value. |

## Constructors

### MaxItemsIntent(uint value)

Creates a new **Json.Schema.Generation.Intents.MaxItemsIntent** instance.

#### Declaration

```c#
public MaxItemsIntent(uint value)
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


