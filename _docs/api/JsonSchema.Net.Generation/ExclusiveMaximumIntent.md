---
layout: "page"
title: "ExclusiveMaximumIntent Class"
bookmark: "ExclusiveMaximumIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.13"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`ExclusiveMaximumIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `exclusiveMaximum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The value. |

## Constructors

### ExclusiveMaximumIntent(decimal value)

Creates a new **Json.Schema.Generation.Intents.ExclusiveMaximumIntent** instance.

#### Declaration

```c#
public ExclusiveMaximumIntent(decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The value. |


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


