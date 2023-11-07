---
layout: "page"
title: "MaxPropertiesIntent Class"
bookmark: "MaxPropertiesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.047"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MaxPropertiesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `maxProperties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The value. |

## Constructors

### MaxPropertiesIntent(uint value)

Creates a new **Json.Schema.Generation.Intents.MaxPropertiesIntent** instance.

#### Declaration

```c#
public MaxPropertiesIntent(uint value)
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


