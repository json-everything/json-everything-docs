---
layout: "page"
title: "MetaSchemas Class"
bookmark: "MetaSchemas"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.009"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`MetaSchemas`
 🡒 
`object`

Provides access to the data extensions vocabulary meta-schema and methods for registering its components.

## Remarks

Use this class to register and retrieve the meta-schema required for working with the data
            vocabulary in JSON Schema processing. All members are static and intended for application-wide

## Fields

| Name | Type | Summary |
|---|---|---|
| **Data_202012Id** | Uri | The ID for the draft 2020-12 extension vocabulary which includes the data vocabulary. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Data** | JsonSchema | The array extensions vocabulary meta-schema. |

## Methods

### Register(BuildOptions buildOptions)

Registers the all components required to use the array extensions vocabulary.

#### Declaration

```c#
public static void Register(BuildOptions buildOptions)
```


