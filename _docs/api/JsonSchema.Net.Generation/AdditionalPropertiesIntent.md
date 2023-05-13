---
layout: "page"
title: "AdditionalPropertiesIntent Class"
bookmark: "AdditionalPropertiesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.42"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`AdditionalPropertiesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent
- IContextContainer

Provides intent to create an `additionalProperties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Context** | SchemaGenerationContextBase | The context that represents the inner requirements. |
## Constructors

### AdditionalPropertiesIntent(SchemaGenerationContextBase context)

Creates a new **Json.Schema.Generation.Intents.AdditionalPropertiesIntent** instance.

#### Declaration

```c#
public AdditionalPropertiesIntent(SchemaGenerationContextBase context)
```
| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The context. |

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

### GetContexts()

Gets the contexts.

#### Declaration

```c#
public IEnumerable<SchemaGenerationContextBase> GetContexts()
```

#### Returns

The **Json.Schema.Generation.SchemaGenerationContextBase**s contained by this object.

### Replace(int hashCode, SchemaGenerationContextBase newContext)

Replaces one context with another.

#### Declaration

```c#
public void Replace(int hashCode, SchemaGenerationContextBase newContext)
```
| Parameter | Type | Description |
|---|---|---|
| hashCode | int | The hashcode of the context to replace. |
| newContext | SchemaGenerationContextBase | The new context. |

