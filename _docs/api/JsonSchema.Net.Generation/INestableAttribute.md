---
layout: "page"
title: "INestableAttribute Interface"
bookmark: "INestableAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.035"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`INestableAttribute`

Indicates an attribute can support being applied to generic parameters.

## Properties

| Name | Type | Summary |
|---|---|---|
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. Default MUST be -1, which indicates the root type. For example, `Person` in `Dictionary<string, Person>` would have a parameter of 1. |

