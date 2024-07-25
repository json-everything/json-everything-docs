---
layout: "page"
title: "ITypeNameGenerator Interface"
bookmark: "ITypeNameGenerator"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.040"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ITypeNameGenerator`

Allows custom `$defs` key naming functionality.

## Methods

### GenerateName(Type type)

Generates a `$defs` key for a type.

#### Declaration

```c#
public abstract string GenerateName(Type type)
```

| Parameter | Type | Description |
|---|---|---|
| type | Type | The type. |


#### Returns

A string to use for the type; null to use the library-provided behavior.

