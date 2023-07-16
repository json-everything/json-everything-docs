---
layout: "page"
title: "ContextExtensions Class"
bookmark: "ContextExtensions"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.010"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ContextExtensions`
 🡒 
`object`

Extension methods for context objects.

## Methods

### GetAttributes(this SchemaGenerationContextBase context)

Gets the attribute set.  Type contexts get type attributes; member context
get member attributes.

#### Declaration

```c#
public static IEnumerable<Attribute> GetAttributes(this SchemaGenerationContextBase context)
```

| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The context. |


#### Returns

The attribute set.

