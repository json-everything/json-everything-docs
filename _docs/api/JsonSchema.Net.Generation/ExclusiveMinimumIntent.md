---
layout: "page"
title: "ExclusiveMinimumIntent Class"
bookmark: "ExclusiveMinimumIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.022"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`ExclusiveMinimumIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `exclusiveMinimum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The value. |

## Constructors

### ExclusiveMinimumIntent(decimal value)

Creates a new **Json.Schema.Generation.Intents.ExclusiveMinimumIntent** instance.

#### Declaration

```c#
public ExclusiveMinimumIntent(decimal value)
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


