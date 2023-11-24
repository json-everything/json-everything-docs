---
layout: "page"
title: "MinimumIntent Class"
bookmark: "MinimumIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.050"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MinimumIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `minimum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The value. |

## Constructors

### MinimumIntent(decimal value)

Creates a new **Json.Schema.Generation.Intents.MinimumIntent** instance.

#### Declaration

```c#
public MinimumIntent(decimal value)
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


