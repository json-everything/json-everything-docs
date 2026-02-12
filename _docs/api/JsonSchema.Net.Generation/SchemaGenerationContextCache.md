---
layout: "page"
title: "SchemaGenerationContextCache Class"
bookmark: "SchemaGenerationContextCache"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.080"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`SchemaGenerationContextCache`
 🡒 
`object`

Gets the contexts for the current run.

## Methods

### Get(Type type)

Gets or creates a **Json.Schema.Generation.TypeGenerationContext** based on the given
type and attribute set.

#### Declaration

```c#
public static TypeGenerationContext Get(Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type to generate. |


#### Returns

A generation context, from the cache if one exists with the specified
type and attribute set; otherwise a new one.  New contexts are automatically
cached.

#### Remarks

Use this in your generator if it needs to create keywords with subschemas.

