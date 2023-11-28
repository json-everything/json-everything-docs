---
layout: "page"
title: "MinPropertiesIntent Class"
bookmark: "MinPropertiesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.055"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MinPropertiesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `minProperties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The value. |

## Constructors

### MinPropertiesIntent(uint value)

Creates a new **Json.Schema.Generation.Intents.MinPropertiesIntent** instance.

#### Declaration

```c#
public MinPropertiesIntent(uint value)
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


