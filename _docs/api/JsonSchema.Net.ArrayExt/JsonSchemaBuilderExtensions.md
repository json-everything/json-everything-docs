---
layout: "page"
title: "JsonSchemaBuilderExtensions Class"
bookmark: "JsonSchemaBuilderExtensions"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.002"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`JsonSchemaBuilderExtensions`
 🡒 
`object`

Provides a fluent interface for **Json.Schema.JsonSchemaBuilder**.

## Methods

### Ordering(this JsonSchemaBuilder builder, IEnumerable\<OrderingSpecifier\> specifiers)

Adds an `ordering` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Ordering(this JsonSchemaBuilder builder, IEnumerable<OrderingSpecifier> specifiers)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| specifiers | IEnumerable\<OrderingSpecifier\> | The collection of ordering specifiers. |


#### Returns

The builder.

### UniqueKeys(this JsonSchemaBuilder builder, IEnumerable\<JsonPointer\> keys)

Adds a `uniqueKeys` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder UniqueKeys(this JsonSchemaBuilder builder, IEnumerable<JsonPointer> keys)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| keys | IEnumerable\<JsonPointer\> | The collection of pointers to the keys which should be unique within the array. |


#### Returns

The builder.

### UniqueKeys(this JsonSchemaBuilder builder, IEnumerable\<string\> keys)

Adds a `uniqueKeys` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder UniqueKeys(this JsonSchemaBuilder builder, IEnumerable<string> keys)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| keys | IEnumerable\<string\> | The collection of pointers to the keys which should be unique within the array. |


#### Returns

The builder.

