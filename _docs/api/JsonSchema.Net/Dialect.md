---
layout: "page"
title: "Dialect Class"
bookmark: "Dialect"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.027"
---
**Namespace:** Json.Schema

**Inheritance:**
`Dialect`
 🡒 
`object`

Represents a JSON Schema dialect, defining the set of supported keywords and validation rules for a specific schema
version.

## Remarks

A dialect encapsulates the behavior and interpretation of JSON Schema keywords according to a
            particular specification draft. Use a specific dialect instance, such as **Json.Schema.Dialect.Draft06**, to validate or
            process schemas that conform to that draft. Dialects may differ in supported keywords, validation semantics, and
            handling of unknown keywords. This class is typically used to select the appropriate schema version when working

## Properties

| Name | Type | Summary |
|---|---|---|
| **AllowUnknownKeywords** | bool | Gets a value indicating whether unknown keywords are permitted during processing. |
| **Default** | Dialect | Gets or sets the default JSON Schema dialect for new **Json.Schema.BuildOptions** objects. |
| **Draft06** | Dialect | Gets the JSON Schema dialect definition for Draft 6. |
| **Draft07** | Dialect | Gets the JSON Schema dialect definition for Draft 7. |
| **Draft201909** | Dialect | Gets the JSON Schema dialect definition for Draft 2019-09. |
| **Draft202012** | Dialect | Gets the JSON Schema dialect definition for Draft 2020-12. |
| **Id** | Uri | Gets the unique identifier for the dialect. |
| **RefIgnoresSiblingKeywords** | bool | Gets a value indicating whether references ignore sibling keywords during processing. |
| **V1** | Dialect | Gets the JSON Schema dialect definition for v1.  This is the same as the latest yearly release in the v1 version. |
| **V1_2026** | Dialect | Gets the JSON Schema dialect definition for v1/2026. |

## Constructors

### Dialect(IEnumerable\<IKeywordHandler\> keywords)

Initializes a new instance of the Dialect class using the specified collection of keyword handlers.

#### Declaration

```c#
public Dialect(IEnumerable<IKeywordHandler> keywords)
```

| Parameter | Type | Description |
|---|---|---|
| keywords | IEnumerable\<IKeywordHandler\> | A collection of keyword handlers to be included in the dialect. Each handler defines the behavior and metadata for |


#### Remarks

The provided keyword handlers are used to configure the dialect's keyword metadata and dependency

