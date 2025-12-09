---
layout: "page"
title: "MetaSchemas Class"
bookmark: "MetaSchemas"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "10.04.006"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`MetaSchemas`
 🡒 
`object`

Provides access to the OpenAPI vocabulary meta-schemas and methods for registering its components.

## Remarks

Use this class to register and retrieve the meta-schemas required for working with the OpenAPI
            vocabulary in JSON Schema processing. All members are static and intended for application-wide

## Fields

| Name | Type | Summary |
|---|---|---|
| **DocumentSchema_31Id** | Uri | The ID for the OpenAPI 3.1 document schema. |
| **OpenApi_31Id** | Uri | The ID for the OpenAPI 3.1 dialect. |
| **OpenApiMeta_31Id** | Uri | The ID for the OpenAPI 3.1 vocabulary meta-schema. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **DocumentSchema_31** | JsonSchema | The OpenAPI 3.1 document schema. |
| **OpenApiDialect_31** | JsonSchema | The OpenAPI 3.1 dialect meta-schema. |
| **OpenApiMeta_31** | JsonSchema | The OpenAPI 3.1 vocabulary meta-schema. |

## Methods

### Register(BuildOptions buildOptions)

Registers all components required to use the OpenAPI vocabulary.

#### Declaration

```c#
public static void Register(BuildOptions buildOptions)
```


