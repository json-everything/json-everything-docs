---
layout: "page"
title: "ConstIntent Class"
bookmark: "ConstIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.009"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`ConstIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `const` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | object | The expected value. |

## Constructors

### ConstIntent(object value)

Creates a new **Json.Schema.Generation.Intents.AdditionalItemsIntent** instance.

#### Declaration

```c#
public ConstIntent(object value)
```

| Parameter | Type | Description |
|---|---|---|
| value | object | The value. |


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


