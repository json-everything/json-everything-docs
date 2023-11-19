---
layout: "page"
title: "SchemaGeneratorConfiguration Class"
bookmark: "SchemaGeneratorConfiguration"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.077"
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
| **Current** | SchemaGeneratorConfiguration | Thread-static storage of the current configuration. Only to be used for reading the configuration. Setting values on this object will be overwritten when starting generation. |
| **Generators** | List\<ISchemaGenerator\> | A collection of generators in addition to the global set. |
| **Nullability** | Nullability | Gets or sets whether to include `null` in the `type` keyword. Default is **Json.Schema.Generation.Nullability.Disabled** which means that it will not ever be included. |
| **Optimize** | bool | Gets or sets whether optimizations (moving common subschemas into `$defs`) will be performed.  Default is true. |
| **PropertyNameResolver** | PropertyNameResolver | Gets or sets the property name resolving method. Default is **Json.Schema.Generation.PropertyNameResolvers.AsDeclared**. |
| **PropertyNamingMethod** | PropertyNamingMethod | Gets or sets the property naming method.  Default is **Json.Schema.Generation.PropertyNamingMethods.AsDeclared**. |
| **PropertyOrder** | PropertyOrder | Gets or sets the order in which properties will be listed in the schema. |
| **Refiners** | List\<ISchemaRefiner\> | A collection of refiners. |
| **StrictConditionals** | bool | Gets or sets whether properties that are affected by conditionals are defined globally or only within their respective `then` subschemas.  True restricts those property definitions to `then` subschemas and adds a top-level `unevaluatedProperties: false`; false (default) defines them globally. |

