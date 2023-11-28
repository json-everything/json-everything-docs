---
layout: "page"
title: "Nullability Enum"
bookmark: "Nullability"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.058"
---
# Nullability Enum

Namespace: Json.Schema.Generation

Indicates whether to apply `null` to the `type` keyword.

## Values

| Name | Summary |
|---|---|
| **Disabled** | Indicates that `null` will not be included. |
| **AllowForNullableValueTypes** | Indicates that `null` will be applied to **System.Nullable`1** types. |
| **AllowForReferenceTypes** | Indicates that `null` will be applied to reference types. |
| **AllowForAllTypes** | Indicates that `null` will be applied to both reference types and **System.Nullable`1** types. |

