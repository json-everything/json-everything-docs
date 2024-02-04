---
layout: "page"
title: "ConstIntent Class"
bookmark: "ConstIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.009"
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
| **Value** | JsonNode | The expected value. |

## Constructors

### ConstIntent(JsonNode value)

Creates a new **Json.Schema.Generation.Intents.ConstIntent** instance.

#### Declaration

```c#
public ConstIntent(JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonNode | The value. |


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


