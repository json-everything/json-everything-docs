---
layout: "page"
title: "EnumFormat Enum"
bookmark: "EnumFormat"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.019"
---
# EnumFormat Enum

Namespace: Json.Schema.Generation.SourceGeneration

Indicates how enumerations are described in source-generated schemas.

## Values

| Name | Summary |
|---|---|
| **Names** | Enumerations are described by an `enum` of their member names. |
| **Values** | Enumerations are described as an `integer`. |
| **NamesAndValues** | Enumerations are described by an `anyOf` accepting either the member names or an `integer`. |

