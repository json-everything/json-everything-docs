---
layout: "page"
title: "SchemaGeneratorConfiguration Class"
bookmark: "SchemaGeneratorConfiguration"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.35"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`SchemaGeneratorConfiguration`
 🡒 
`object`

Provides additional configuration for the generator.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Refiners** | List\<ISchemaRefiner\> | A collection of refiners. |
| **Generators** | List\<ISchemaGenerator\> | A collection of generators in addition to the global set. |
| **PropertyOrder** | PropertyOrder | Gets or sets the order in which properties will be listed in the schema. |
| **PropertyNamingMethod** | PropertyNamingMethod | Gets or sets the property naming method.  Default is **PropertyNamingMethod.AsDeclared**. |
| **Nullability** | Nullability | Gets or sets whether to include `null` in the `type` keyword.<br>Default is **Json.Schema.Generation.Nullability.Disabled** which means that it will<br>not ever be included. |
| **Optimize** | bool | Gets or sets whether optimizations (moving common subschemas into `$defs`) will be performed.  Default is true. |
| **Current** | SchemaGeneratorConfiguration | Thread-static storage of the current configuration. Only to be used for reading<br>the configuration. Setting values on this object will be overwritten when starting<br>generation. |
