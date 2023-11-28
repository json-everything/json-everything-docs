---
layout: "page"
title: "AdditionalItemsIntent Class"
bookmark: "AdditionalItemsIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.001"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`AdditionalItemsIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent
- IContextContainer

Provides intent to create an `additionalItems` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Context** | SchemaGenerationContextBase | The context that represents the inner requirements. |

## Constructors

### AdditionalItemsIntent(SchemaGenerationContextBase context)

Creates a new **Json.Schema.Generation.Intents.AdditionalItemsIntent** instance.

#### Declaration

```c#
public AdditionalItemsIntent(SchemaGenerationContextBase context)
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


### Replace(int hashCode, SchemaGenerationContextBase newContext)

Replaces one context with another.

#### Declaration

```c#
public void Replace(int hashCode, SchemaGenerationContextBase newContext)
```

| Parameter | Type | Description |
|---|---|---|
| hashCode | int | The hashcode of the context to replace. |
| newContext | SchemaGenerationContextBase | The new context. |


