---
layout: "page"
title: "ThenIntent Class"
bookmark: "ThenIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.077"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`ThenIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `then` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Subschema** | IEnumerable\<ISchemaKeywordIntent\> | A set of intents used to define the subschema. |

## Constructors

### ThenIntent(IEnumerable\<ISchemaKeywordIntent\> subschema)

Creates a new **Json.Schema.Generation.Intents.ThenIntent** instance.

#### Declaration

```c#
public ThenIntent(IEnumerable<ISchemaKeywordIntent> subschema)
```


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


