---
layout: "page"
title: "IdKeyword Class"
bookmark: "IdKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.053"
---
**Namespace:** Json.Schema.Keywords.Draft06

**Inheritance:**
`IdKeyword`
 🡒 
`IdKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IKeywordHandler

Handles `id`.

## Remarks

This keyword is used to set the base URI for a schema or to identify a location-independent identifier
for a subschema.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AnchorPattern** | Regex | The pattern for valid anchor identifiers. |
| **Instance** | IdKeyword | Gets the singleton instance of the **Json.Schema.Keywords.Draft06.IdKeyword**. |
| **Name** | string | Gets the name of the handled keyword. |

## Methods

### ValidateKeywordValue(JsonElement value)

Validates the specified JSON element as a keyword value and optionally returns a value to be shared across the other methods.

#### Declaration

```c#
public override object ValidateKeywordValue(JsonElement value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonElement | The JSON element to validate and convert. Represents the value to be checked for keyword compliance. |


#### Returns

An object that is shared with the other methods.  This object is saved to **Json.Schema.KeywordData.Value**.

