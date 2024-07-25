---
layout: "page"
title: "MaximumIntent Class"
bookmark: "MaximumIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.045"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`MaximumIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `maximum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The value. |

## Constructors

### MaximumIntent(decimal value)

Creates a new **Json.Schema.Generation.Intents.MaximumIntent** instance.

#### Declaration

```c#
public MaximumIntent(decimal value)
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


