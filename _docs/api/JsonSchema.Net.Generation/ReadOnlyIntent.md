---
layout: "page"
title: "ReadOnlyIntent Class"
bookmark: "ReadOnlyIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.54"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`ReadOnlyIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `readOnly` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | The value. |

## Constructors

### ReadOnlyIntent(bool value)

Creates a new **Json.Schema.Generation.Intents.ReadOnlyIntent** instance.

#### Declaration

```c#
public ReadOnlyIntent(bool value)
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


