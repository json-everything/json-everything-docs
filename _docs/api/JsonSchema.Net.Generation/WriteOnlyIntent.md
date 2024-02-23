---
layout: "page"
title: "WriteOnlyIntent Class"
bookmark: "WriteOnlyIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.087"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`WriteOnlyIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `writeOnly` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | The value. |

## Constructors

### WriteOnlyIntent(bool value)

Creates a new **Json.Schema.Generation.Intents.WriteOnlyIntent** instance.

#### Declaration

```c#
public WriteOnlyIntent(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |


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


