---
layout: "page"
title: "SchemaGenerationContextCache Class"
bookmark: "SchemaGenerationContextCache"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.073"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`SchemaGenerationContextCache`
 🡒 
`object`

Gets the contexts for the current run.

## Methods

### Get(Type type, List\<Attribute\> memberAttributes)

Gets or creates a **Json.Schema.Generation.SchemaGenerationContextBase** based on the given
type and attribute set.

#### Declaration

```c#
public static SchemaGenerationContextBase Get(Type type, List<Attribute> memberAttributes)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type to generate. |
| memberAttributes | List\<Attribute\> | A collection of extra attributes.  Only use if requesting a context to represent<br>a member. |


#### Returns

A generation context, from the cache if one exists with the specified
type and attribute set; otherwise a new one.  New contexts are automatically
cached.  If <paramref name="memberAttributes" /> is null or empty, a
**Json.Schema.Generation.TypeGenerationContext** will be returned; otherwise a
**Json.Schema.Generation.MemberGenerationContext**.

#### Remarks

Use this in your generator if it needs to create keywords with subschemas.

