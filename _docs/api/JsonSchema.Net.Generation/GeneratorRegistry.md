---
layout: "page"
title: "GeneratorRegistry Class"
bookmark: "GeneratorRegistry"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.022"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`GeneratorRegistry`
 🡒 
`object`

Tracks the available generators.

## Methods

### Register(ISchemaGenerator generator)

Registers a new generator.

#### Declaration

```c#
public static void Register(ISchemaGenerator generator)
```

| Parameter | Type | Description |
|---|---|---|
| generator | ISchemaGenerator | The generator. |


#### Remarks

Registration is order dependent: last one wins.  If you have multiple generators which
can handle a given type, the last one registered will be used.

