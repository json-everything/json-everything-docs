---
layout: "page"
title: "MultipleOfIntent Class"
bookmark: "MultipleOfIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.055"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MultipleOfIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `multipleOf` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The value. |

## Constructors

### MultipleOfIntent(decimal value)

Creates a new **Json.Schema.Generation.Intents.MultipleOfIntent** instance.

#### Declaration

```c#
public MultipleOfIntent(decimal value)
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


