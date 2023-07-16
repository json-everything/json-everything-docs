---
layout: "page"
title: "JsonSchemaBuilderExtensions Class"
bookmark: "JsonSchemaBuilderExtensions"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.038"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`JsonSchemaBuilderExtensions`
 🡒 
`object`

Provides extension methods for schema generation.

## Methods

### FromType(this JsonSchemaBuilder builder, SchemaGeneratorConfiguration configuration)

Generates a schema from a CLR type.

#### Declaration

```c#
public static JsonSchemaBuilder FromType(this JsonSchemaBuilder builder, SchemaGeneratorConfiguration configuration)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |
| configuration | SchemaGeneratorConfiguration | The generator configuration. |


#### Returns

The schema builder (for fluent syntax support).

### FromType(this JsonSchemaBuilder builder, Type type, SchemaGeneratorConfiguration configuration)

Generates a schema from a CLR type.

#### Declaration

```c#
public static JsonSchemaBuilder FromType(this JsonSchemaBuilder builder, Type type, SchemaGeneratorConfiguration configuration)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |
| type | Type | The type to generate. |
| configuration | SchemaGeneratorConfiguration | The generator configuration. |


#### Returns

The schema builder (for fluent syntax support).

