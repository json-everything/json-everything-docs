---
layout: "page"
title: "DefaultIntent Class"
bookmark: "DefaultIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.012"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`DefaultIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `default` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | JsonNode | The expected value. |

## Constructors

### DefaultIntent(JsonNode value)

Creates a new **Json.Schema.Generation.Intents.DefaultIntent** instance.

#### Declaration

```c#
public DefaultIntent(JsonNode value)
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


