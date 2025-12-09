---
layout: "page"
title: "AnchorKeyword Class"
bookmark: "AnchorKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.004"
---
**Namespace:** Json.Schema.Keywords.Draft201909

**Inheritance:**
`AnchorKeyword`
 🡒 
`AnchorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IKeywordHandler

Handles `$anchor`.

## Remarks

This keyword is used to define a location-independent identifier that can be referenced from elsewhere in the schema.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AnchorPattern** | Regex | The pattern for valid anchor identifiers. |
| **Instance** | AnchorKeyword | Gets the singleton instance of the **Json.Schema.Keywords.Draft201909.AnchorKeyword**. |
| **Name** | string | Gets the name of the handled keyword. |

