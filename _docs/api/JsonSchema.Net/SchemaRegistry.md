---
layout: "page"
title: "SchemaRegistry Class"
bookmark: "SchemaRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.158"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaRegistry`
 🡒 
`object`

A registry for schemas.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Fetch** | Func\<Uri, IBaseDocument\> | Gets or sets a method to enable automatic download of schemas by `$id` URI. |
| **Global** | SchemaRegistry | The global registry. |

## Methods

### Get(Uri uri)

Gets a schema by URI ID and/or anchor.

#### Declaration

```c#
public IBaseDocument Get(Uri uri)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI ID. |


#### Returns

The schema, if registered in either this or the global registry;4
otherwise null.

### Initialize(Uri baseUri, JsonSchema schema)

Sets base URI and spec version for a schema.  Generally not needed as this happens automatically on registration and evaluation.

#### Declaration

```c#
public void Initialize(Uri baseUri, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| baseUri | Uri | The base URI for the schema. |
| schema | JsonSchema | The schema |


### Register(IBaseDocument document)

Registers a schema by URI.

#### Declaration

```c#
public void Register(IBaseDocument document)
```

| Parameter | Type | Description |
|---|---|---|
| document | IBaseDocument | The schema. |


### Register(Uri uri, IBaseDocument document)

Registers a schema by URI.

#### Declaration

```c#
public void Register(Uri uri, IBaseDocument document)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI ID of the schema.. |
| document | IBaseDocument | The schema. |


