---
layout: "page"
title: "JsonSchemaBuilderExtensions Class"
bookmark: "JsonSchemaBuilderExtensions"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.001"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`JsonSchemaBuilderExtensions`
 🡒 
`object`

Provides a fluent interface for **Json.Schema.JsonSchemaBuilder**.

## Methods

### Ordering(this JsonSchemaBuilder builder, params OrderingSpecifier[] specifiers)

Adds an `ordering` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Ordering(this JsonSchemaBuilder builder, params OrderingSpecifier[] specifiers)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| specifiers | params OrderingSpecifier[] | The collection of ordering specifiers. |


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

