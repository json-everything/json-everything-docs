---
layout: "page"
title: "SchemaKeywordRegistry Class"
bookmark: "SchemaKeywordRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.155"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaKeywordRegistry`
 🡒 
`object`

Manages which keywords are known by the system.

## Remarks

Because the deserialization process relies on keywords being registered,
this class cannot be an instance class like the other registries in this
library.  Therefore keywords are registered for all schemas.

## Methods

### GetImplementationType(string keyword)

Gets the implementation for a given keyword name.

#### Declaration

```c#
public static Type GetImplementationType(string keyword)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword name. |


#### Returns

The keyword type, if registered; otherwise null.

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

### Register()

Registers a new keyword type.

#### Declaration

```c#
public static void Register()
```


### Register(JsonSerializerContext typeContext)

Registers a new keyword type.

#### Declaration

```c#
public static void Register(JsonSerializerContext typeContext)
```

| Parameter | Type | Description |
|---|---|---|
| typeContext | JsonSerializerContext | JsonTypeInfo for the keyword type |


### RegisterNullValue(T nullKeyword)

Registers a null-value for a keyword.

#### Declaration

```c#
public static void RegisterNullValue(T nullKeyword)
```

| Parameter | Type | Description |
|---|---|---|
| nullKeyword | T |  |


#### Remarks

This is important for keywords that accept null, like `default` and `const`.  Without
this step, the serializer will skip keywords that have nulls.

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

### Unregister()

Unregisters a keyword type.

#### Declaration

```c#
public static void Unregister()
```


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

