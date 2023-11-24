---
layout: "page"
title: "IContextContainer Interface"
bookmark: "IContextContainer"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.027"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`IContextContainer`

Indicates to the generation system that this object contains contexts.

## Remarks

Implement this on your **Json.Schema.Generation.ISchemaKeywordIntent** to indicate that it
contains other contexts.  Intents that need this are generally associated with
applicator keywords, such as `items` and `allOf`.

## Methods

### Replace(int hashCode, SchemaGenerationContextBase newContext)

Replaces one context with another.

#### Declaration

```c#
public abstract void Replace(int hashCode, SchemaGenerationContextBase newContext)
```

| Parameter | Type | Description |
|---|---|---|
| hashCode | int | The hashcode of the context to replace. |
| newContext | SchemaGenerationContextBase | The new context. |


#### Remarks

To implement this, call **System.Object.GetHashCode** on the contained
contexts.  If any match, replace them with <paramref name="newContext" />.

