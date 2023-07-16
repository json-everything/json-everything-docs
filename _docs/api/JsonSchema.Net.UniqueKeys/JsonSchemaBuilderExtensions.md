---
layout: "page"
title: "JsonSchemaBuilderExtensions Class"
bookmark: "JsonSchemaBuilderExtensions"
permalink: "/api/JsonSchema.Net.UniqueKeys/:title/"
order: "9.03.000"
---
**Namespace:** Json.Schema.UniqueKeys

**Inheritance:**
`JsonSchemaBuilderExtensions`
 🡒 
`object`

Provides a fluent interface for **Json.Schema.JsonSchemaBuilder**.

## Methods

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

### UniqueKeys(this JsonSchemaBuilder builder, params JsonPointer[] keys)

Adds a `uniqueKeys` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder UniqueKeys(this JsonSchemaBuilder builder, params JsonPointer[] keys)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| keys | params JsonPointer[] | The collection of pointers to the keys which should be unique within the array. |


#### Returns

The builder.

### UniqueKeys(this JsonSchemaBuilder builder, params string[] keys)

Adds a `uniqueKeys` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder UniqueKeys(this JsonSchemaBuilder builder, params string[] keys)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| keys | params string[] | The collection of pointers to the keys which should be unique within the array. |


#### Returns

The builder.

