---
layout: "page"
title: "AdditionalPropertiesIntent Class"
bookmark: "AdditionalPropertiesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.003"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`AdditionalPropertiesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `additionalProperties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Context** | SchemaGenerationContextBase | The context that represents the inner requirements. |

## Constructors

### AdditionalPropertiesIntent(SchemaGenerationContextBase context)

Creates a new **Json.Schema.Generation.Intents.AdditionalPropertiesIntent** instance.

#### Declaration

```c#
public AdditionalPropertiesIntent(SchemaGenerationContextBase context)
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


