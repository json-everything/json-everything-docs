---
layout: "page"
title: "PropertyNamesIntent Class"
bookmark: "PropertyNamesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.070"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`PropertyNamesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `propertyNames` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Context** | SchemaGenerationContextBase | The context that represents the inner requirements. |

## Constructors

### PropertyNamesIntent(SchemaGenerationContextBase context)

Creates a new **Json.Schema.Generation.Intents.PropertyNamesIntent** instance.

#### Declaration

```c#
public PropertyNamesIntent(SchemaGenerationContextBase context)
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


