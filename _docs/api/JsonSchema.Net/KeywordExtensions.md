---
layout: "page"
title: "KeywordExtensions Class"
bookmark: "KeywordExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.56"
---
**Namespace:** Json.Schema

**Inheritance:**
`KeywordExtensions`
 🡒 
`object`

Some extensions for **Json.Schema.IJsonSchemaKeyword**.

## Methods

### Keyword(this IJsonSchemaKeyword keyword)

Gets the keyword string.

#### Declaration

```c#
public static string Keyword(this IJsonSchemaKeyword keyword)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | IJsonSchemaKeyword | The keyword. |


#### Returns

The keyword string.

### Keyword(this Type keywordType)

Gets the keyword string.

#### Declaration

```c#
public static string Keyword(this Type keywordType)
```

| Parameter | Type | Description |
|---|---|---|
| keywordType | Type | The keyword type. |


#### Returns

The keyword string.

### Priority(this IJsonSchemaKeyword keyword)

Gets the keyword priority.

#### Declaration

```c#
public static long Priority(this IJsonSchemaKeyword keyword)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | IJsonSchemaKeyword | The keyword. |


#### Returns

The priority.

### SupportsVersion(this IJsonSchemaKeyword keyword, SpecVersion version)

Determines if a keyword is declared by a given version of the JSON Schema specification.

#### Declaration

```c#
public static bool SupportsVersion(this IJsonSchemaKeyword keyword, SpecVersion version)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | IJsonSchemaKeyword | The keyword. |
| version | SpecVersion | The queried version. |


#### Returns

true if the keyword is supported by the version; false otherwise

### VersionsSupported(this IJsonSchemaKeyword keyword)

Gets the specification versions supported by a keyword.

#### Declaration

```c#
public static SpecVersion VersionsSupported(this IJsonSchemaKeyword keyword)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | IJsonSchemaKeyword | The keyword. |


#### Returns

The specification versions as a single flags value.

