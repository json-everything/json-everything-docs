---
layout: "page"
title: "SchemaKeywordRegistry Class"
bookmark: "SchemaKeywordRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.152"
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

### Register()

Registers a new keyword type.

#### Declaration

```c#
public static void Register()
```


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

### Unregister()

Unregisters a keyword type.

#### Declaration

```c#
public static void Unregister()
```


