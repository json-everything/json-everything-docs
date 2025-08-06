---
layout: "page"
title: "ItemsIntent Class"
bookmark: "ItemsIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.041"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`ItemsIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `items` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Context** | SchemaGenerationContextBase | The context that represents the inner requirements. |

## Constructors

### ItemsIntent(SchemaGenerationContextBase context)

Creates a new **Json.Schema.Generation.Intents.ItemsIntent** instance.

#### Declaration

```c#
public ItemsIntent(SchemaGenerationContextBase context)
```

| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The context. |


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


