---
layout: "page"
title: "DefsIntent Class"
bookmark: "DefsIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.011"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`DefsIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `$defs` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Definitions** | Dictionary\<string, SchemaGenerationContextBase\> | The contexts that represent the definitions. |

## Constructors

### DefsIntent(Dictionary\<string, SchemaGenerationContextBase\> definitions)

Creates a new **Json.Schema.Generation.Intents.DefsIntent** instance.

#### Declaration

```c#
public DefsIntent(Dictionary<string, SchemaGenerationContextBase> definitions)
```

| Parameter | Type | Description |
|---|---|---|
| definitions | Dictionary\<string, SchemaGenerationContextBase\> | The contexts. |


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


