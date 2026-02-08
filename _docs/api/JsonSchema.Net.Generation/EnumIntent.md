---
layout: "page"
title: "EnumIntent Class"
bookmark: "EnumIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.019"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`EnumIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `enum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Names** | List\<string\> | The names defined by the enumeration. |

## Constructors

### EnumIntent(IEnumerable\<string\> names)

Creates a new **Json.Schema.Generation.Intents.EnumIntent** instance.

#### Declaration

```c#
public EnumIntent(IEnumerable<string> names)
```

| Parameter | Type | Description |
|---|---|---|
| names | IEnumerable\<string\> | The names defined by the enumeration. |


### EnumIntent(params string[] names)

Creates a new **Json.Schema.Generation.Intents.EnumIntent** instance.

#### Declaration

```c#
public EnumIntent(params string[] names)
```

| Parameter | Type | Description |
|---|---|---|
| names | params string[] | The names defined by the enumeration. |


### EnumIntent(IEnumerable\<JsonNode\> values)

Creates a new **Json.Schema.Generation.Intents.EnumIntent** instance.

#### Declaration

```c#
public EnumIntent(IEnumerable<JsonNode> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonNode\> | The values defined by the enumeration. |


### EnumIntent(params JsonNode[] values)

Creates a new **Json.Schema.Generation.Intents.EnumIntent** instance.

#### Declaration

```c#
public EnumIntent(params JsonNode[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonNode[] | The values defined by the enumeration. |


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


