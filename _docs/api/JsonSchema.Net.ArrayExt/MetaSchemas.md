---
layout: "page"
title: "MetaSchemas Class"
bookmark: "MetaSchemas"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.003"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`MetaSchemas`
 🡒 
`object`

Provides access to meta-schemas and registration methods for the array extensions vocabulary used in JSON Schema
processing.

## Remarks

Use this class to register and retrieve the meta-schema required for validating schemas that utilize

## Fields

| Name | Type | Summary |
|---|---|---|
| **ArrayExt_202012Id** | Uri | The ID for the draft 2020-12 extension vocabulary which includes the array extensions vocabulary. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **ArrayExt** | JsonSchema | The array extensions vocabulary meta-schema. |

## Methods

### Register(BuildOptions buildOptions)

Registers the all components required to use the array extensions vocabulary.

#### Declaration

```c#
public static void Register(BuildOptions buildOptions)
```


