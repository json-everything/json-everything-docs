---
layout: "page"
title: "ISchemaRefiner Interface"
bookmark: "ISchemaRefiner"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.12"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ISchemaRefiner`

Describes a schema generation refiner.

## Remarks

Refiners run after attributes have been processed, before the
schema itself is created.  This is used to add customization
logic.

## Methods

### Run(SchemaGenerationContextBase context)

Runs the refiner.

#### Declaration

```c#
public abstract void Run(SchemaGenerationContextBase context)
```
| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase |  |

### ShouldRun(SchemaGenerationContextBase context)

Determines if the refiner should run.

#### Declaration

```c#
public abstract bool ShouldRun(SchemaGenerationContextBase context)
```
| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase |  |

#### Returns



