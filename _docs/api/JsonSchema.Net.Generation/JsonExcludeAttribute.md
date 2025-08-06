---
layout: "page"
title: "JsonExcludeAttribute Class"
bookmark: "JsonExcludeAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.043"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`JsonExcludeAttribute`
 🡒 
`JsonAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Indicates that the property should be excluded from generation.

## Remarks

This attribute functions exactly the same as the **System.Text.Json.Serialization.JsonIgnoreAttribute**.  It
is included separately to support the case where the model should be serialized with
a property or enum member but schema generation should ignore it.

## Properties

| Name | Type | Summary |
|---|---|---|
| **TypeId** | object |  |

## Constructors

### JsonExcludeAttribute()

Initializes a new instance of **Json.Schema.Generation.JsonExcludeAttribute**.

#### Declaration

```c#
public JsonExcludeAttribute()
```


