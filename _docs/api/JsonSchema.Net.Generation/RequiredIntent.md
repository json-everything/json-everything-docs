---
layout: "page"
title: "RequiredIntent Class"
bookmark: "RequiredIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.073"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`RequiredIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `required` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **RequiredProperties** | List\<string\> | The required property names. |

## Constructors

### RequiredIntent(List\<string\> requiredProperties)

Creates a new **Json.Schema.Generation.Intents.RequiredIntent** instance.

#### Declaration

```c#
public RequiredIntent(List<string> requiredProperties)
```

| Parameter | Type | Description |
|---|---|---|
| requiredProperties | List\<string\> | The required property names. |


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


