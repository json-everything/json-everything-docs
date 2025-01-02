---
layout: "page"
title: "UnevaluatedPropertiesIntent Class"
bookmark: "UnevaluatedPropertiesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.084"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`UnevaluatedPropertiesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `unevaluatedProperties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Context** | SchemaGenerationContextBase | The context that represents the inner requirements. |

## Constructors

### UnevaluatedPropertiesIntent(SchemaGenerationContextBase context)

Creates a new **Json.Schema.Generation.Intents.UnevaluatedPropertiesIntent** instance.

#### Declaration

```c#
public UnevaluatedPropertiesIntent(SchemaGenerationContextBase context)
```

| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The context, or null to apply the false schema. |


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


