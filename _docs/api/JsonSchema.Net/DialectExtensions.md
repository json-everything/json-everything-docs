---
layout: "page"
title: "DialectExtensions Class"
bookmark: "DialectExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.028"
---
**Namespace:** Json.Schema

**Inheritance:**
`DialectExtensions`
 🡒 
`object`

Provides extension methods for creating modified instances of the **Json.Schema.Dialect** type by adding or removing
keyword handlers.

## Methods

### With(this Dialect dialect, Uri id, FormatRegistry formatRegistry)

Creates a new Dialect instance by extending the specified dialect with a new format registry.

#### Declaration

```c#
public static Dialect With(this Dialect dialect, Uri id, FormatRegistry formatRegistry)
```

| Parameter | Type | Description |
|---|---|---|
| dialect | Dialect | The base Dialect to extend. Cannot be null. |
| id | Uri | An optional identifier for the new Dialect. |
| formatRegistry | FormatRegistry | An optional format registry to use with the new Dialect. If null, the registry from the base dialect is used. |


#### Returns

A new Dialect instance containing the combined keyword handlers and configuration settings.

#### Remarks

This method is useful for creating customized dialects based on an existing one, allowing selective

### With(this Dialect dialect, IEnumerable\<IKeywordHandler\> add, Uri id, bool? refIgnoresSiblingKeywords, bool? allowUnknownKeywords, FormatRegistry formatRegistry)

Creates a new Dialect instance by extending the specified dialect with additional keyword handlers and optional
configuration overrides.

#### Declaration

```c#
public static Dialect With(this Dialect dialect, IEnumerable<IKeywordHandler> add, Uri id, bool? refIgnoresSiblingKeywords, bool? allowUnknownKeywords, FormatRegistry formatRegistry)
```

| Parameter | Type | Description |
|---|---|---|
| dialect | Dialect | The base Dialect to extend. Cannot be null. |
| add | IEnumerable\<IKeywordHandler\> | A collection of keyword handlers to add to the new Dialect. Cannot be null. |
| id | Uri | An optional identifier for the new Dialect. |
| refIgnoresSiblingKeywords | bool? | An optional value indicating whether '$ref' keywords ignore sibling keywords. If null, the value from the base |
| allowUnknownKeywords | bool? | An optional value indicating whether unknown keywords are allowed. If null, the value from the base dialect is |
| formatRegistry | FormatRegistry | An optional format registry to use with the new Dialect. If null, the registry from the base dialect is used. |


#### Returns

A new Dialect instance containing the combined keyword handlers and configuration settings.

#### Remarks

This method is useful for creating customized dialects based on an existing one, allowing selective

### Without(this Dialect dialect, IEnumerable\<IKeywordHandler\> remove, Uri id, bool? refIgnoresSiblingKeywords, bool? allowUnknownKeywords)

Creates a new Dialect instance by removing the specified keyword handlers from the given dialect.

#### Declaration

```c#
public static Dialect Without(this Dialect dialect, IEnumerable<IKeywordHandler> remove, Uri id, bool? refIgnoresSiblingKeywords, bool? allowUnknownKeywords)
```

| Parameter | Type | Description |
|---|---|---|
| dialect | Dialect | The source Dialect from which keyword handlers will be removed. |
| remove | IEnumerable\<IKeywordHandler\> | A collection of keyword handlers to exclude from the resulting Dialect. Each handler in this collection will be |
| id | Uri | An optional identifier to assign to the new Dialect. If null, the identifier from the source dialect is not set. |
| refIgnoresSiblingKeywords | bool? | An optional value indicating whether '$ref' should ignore sibling keywords in the new Dialect. If null, the value |
| allowUnknownKeywords | bool? | An optional value indicating whether unknown keywords are allowed in the new Dialect. If null, the value from the |


#### Returns

A new Dialect instance with the specified keyword handlers removed and updated configuration options as provided.

#### Remarks

The returned Dialect retains all configuration options from the source dialect unless overridden by

