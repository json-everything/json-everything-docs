---
layout: "page"
title: "PropertyNamesIntent Class"
bookmark: "PropertyNamesIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.61"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`PropertyNamesIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent
- IContextContainer

Provides intent to create a `propertyNames` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Context** | SchemaGenerationContextBase | The context that represents the inner requirements. |

## Constructors

### PropertyNamesIntent(SchemaGenerationContextBase context)

Creates a new **Json.Schema.Generation.Intents.PropertyNamesIntent** instance.

#### Declaration

```c#
public PropertyNamesIntent(SchemaGenerationContextBase context)
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


#### Remarks

To implement this, call **System.Object.GetHashCode** on the contained
contexts.  If any match, replace them with <paramref name="newContext" />.

