---
layout: "page"
title: "FormatRegistryExtensions Class"
bookmark: "FormatRegistryExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.050"
---
**Namespace:** Json.Schema

**Inheritance:**
`FormatRegistryExtensions`
 🡒 
`object`

Provides extensions for **Json.Schema.FormatRegistry** to create new registries by adding
and removing individual formats

## Methods

### With(this FormatRegistry registry, IEnumerable\<Format\> formats)

Creates a new registry with the specified formats added.

#### Declaration

```c#
public static FormatRegistry With(this FormatRegistry registry, IEnumerable<Format> formats)
```

| Parameter | Type | Description |
|---|---|---|
| registry | FormatRegistry | The source registry. |
| formats | IEnumerable\<Format\> | The formats to add. |


#### Returns

A new registry.

### Without(this FormatRegistry registry, IEnumerable\<string\> formatKeys)

Creates a new registry with the specified formats removed.

#### Declaration

```c#
public static FormatRegistry Without(this FormatRegistry registry, IEnumerable<string> formatKeys)
```

| Parameter | Type | Description |
|---|---|---|
| registry | FormatRegistry | The source registry. |
| formatKeys | IEnumerable\<string\> | The keys of the formats to remove. |


#### Returns

A new registry.

### Without(this FormatRegistry registry, IEnumerable\<Format\> formats)

Creates a new registry with the specified formats removed.

#### Declaration

```c#
public static FormatRegistry Without(this FormatRegistry registry, IEnumerable<Format> formats)
```

| Parameter | Type | Description |
|---|---|---|
| registry | FormatRegistry | The source registry. |
| formats | IEnumerable\<Format\> | The formats to remove. |


#### Returns

A new registry.

