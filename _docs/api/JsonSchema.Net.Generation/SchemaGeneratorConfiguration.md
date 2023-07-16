---
layout: "page"
title: "SchemaGeneratorConfiguration Class"
bookmark: "SchemaGeneratorConfiguration"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.073"
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
| **Current** | SchemaGeneratorConfiguration | Thread-static storage of the current configuration. Only to be used for reading<br>the configuration. Setting values on this object will be overwritten when starting<br>generation. |
| **Generators** | List\<ISchemaGenerator\> | A collection of generators in addition to the global set. |
| **Nullability** | Nullability | Gets or sets whether to include `null` in the `type` keyword.<br>Default is **Json.Schema.Generation.Nullability.Disabled** which means that it will<br>not ever be included. |
| **Optimize** | bool | Gets or sets whether optimizations (moving common subschemas into `$defs`) will be performed.  Default is true. |
| **PropertyNamingMethod** | PropertyNamingMethod | Gets or sets the property naming method.  Default is **PropertyNamingMethod.AsDeclared**. |
| **PropertyOrder** | PropertyOrder | Gets or sets the order in which properties will be listed in the schema. |
| **Refiners** | List\<ISchemaRefiner\> | A collection of refiners. |
| **StrictConditionals** | bool | Gets or sets whether properties that are affected by conditionals are defined<br>globally or only within their respective `then` subschemas.  True restricts<br>those property definitions to `then` subschemas and adds a top-level<br>`unevaluatedProperties: false`; false (default) defines them globally. |

