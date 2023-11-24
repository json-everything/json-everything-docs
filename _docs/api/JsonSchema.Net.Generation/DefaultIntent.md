---
layout: "page"
title: "DefaultIntent Class"
bookmark: "DefaultIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.012"
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
| **Value** | object | The expected value. |

## Constructors

### DefaultIntent(object value)

Creates a new **Json.Schema.Generation.Intents.DefaultIntent** instance.

#### Declaration

```c#
public DefaultIntent(object value)
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


