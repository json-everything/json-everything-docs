---
layout: "page"
title: "ISchemaGenerator Interface"
bookmark: "ISchemaGenerator"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.038"
---
**Namespace:** Json.Schema.Generation.Generators

**Inheritance:**
`ISchemaGenerator`

Defines a generator.

## Remarks

Generators are the first stage of schema generation.  These will add keyword intents
             to the context, which then are translated into keywords after optimization.

## Methods

### AddConstraints(SchemaGenerationContextBase context)

Processes the type and any attributes (present on the context), and adds
intents to the context.

#### Declaration

```c#
public abstract void AddConstraints(SchemaGenerationContextBase context)
```

| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The generation context. |


### Handles(Type type)

Determines whether the generator can be used to generate a schema for this type.

#### Declaration

```c#
public abstract bool Handles(Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type. |


#### Returns

`true` if the generator can be used; `false` otherwise.

