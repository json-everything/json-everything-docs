---
layout: "page"
title: "NotIntent Class"
bookmark: "NotIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.063"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`NotIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `if` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Subschema** | IEnumerable\<ISchemaKeywordIntent\> | A set of intents used to define the subschema. |

## Constructors

### NotIntent(IEnumerable\<ISchemaKeywordIntent\> subschema)

Creates a new **Json.Schema.Generation.Intents.IfIntent** instance.

#### Declaration

```c#
public NotIntent(IEnumerable<ISchemaKeywordIntent> subschema)
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


