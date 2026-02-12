---
layout: "page"
title: "PropertiesIntent Class"
bookmark: "PropertiesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.069"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`PropertiesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `additionalProperties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Properties** | Dictionary\<string, SchemaGenerationContextBase\> | The contexts that represent the properties. |

## Constructors

### PropertiesIntent(Dictionary\<string, SchemaGenerationContextBase\> properties)

Creates a new **Json.Schema.Generation.Intents.PropertiesIntent** instance.

#### Declaration

```c#
public PropertiesIntent(Dictionary<string, SchemaGenerationContextBase> properties)
```

| Parameter | Type | Description |
|---|---|---|
| properties | Dictionary\<string, SchemaGenerationContextBase\> | The contexts. |


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


