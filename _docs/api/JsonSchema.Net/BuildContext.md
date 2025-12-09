---
layout: "page"
title: "BuildContext Struct"
bookmark: "BuildContext"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.008"
---
**Namespace:** Json.Schema

**Inheritance:**
`BuildContext`
 🡒 
`ValueType`
 🡒 
`object`

Provides contextual information required during the construction of a schema, including build options, schema
documents, and dialect settings.

## Remarks

Use this structure to pass relevant build parameters processing keywords. The context encapsulates
            both global and local schema data, as well as the base URI and dialect, ensuring consistent schema resolution

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseUri** | Uri | Gets or sets the base URI used to resolve relative resource references. |
| **Dialect** | Dialect | Gets or set the JSON Schema dialect to use in the build process. |
| **LocalSchema** | JsonElement | Gets or sets the local value from which a new schema is to be built. |
| **Options** | BuildOptions | Gets the configuration options used for the build process. |
| **PathFromResourceRoot** | JsonPointer |  |
| **RelativePath** | JsonPointer | Gets or sets the path to the **Json.Schema.BuildContext.LocalSchema** in addition to the keyword. |

## Methods

### From(KeywordData keyword)

Creates a copy of a build context from the one that was used to build a keyword.

#### Declaration

```c#
public static BuildContext From(KeywordData keyword)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | KeywordData | The keyword. |


#### Returns

A copy of the build context.

