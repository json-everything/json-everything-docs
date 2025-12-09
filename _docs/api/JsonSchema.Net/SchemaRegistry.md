---
layout: "page"
title: "SchemaRegistry Class"
bookmark: "SchemaRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.100"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaRegistry`
 🡒 
`object`

Provides a registry for storing and retrieving JSON schemas and other base documents by URI and anchor.

## Remarks

The registry supports registering schemas with unique URIs and enables lookup by URI or anchor.
            Schemas can be fetched automatically using the **Json.Schema.SchemaRegistry.Fetch** delegate if not already registered. The **Json.Schema.SchemaRegistry.Global** property provides a shared, application-wide registry instance. Getting schemas via

## Properties

| Name | Type | Summary |
|---|---|---|
| **Fetch** | Func\<Uri, SchemaRegistry, IBaseDocument\> | Gets or sets a method to enable automatic download of schemas by `$id` URI. |
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

The schema, if registered in either this or the global registry;
otherwise null.

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


