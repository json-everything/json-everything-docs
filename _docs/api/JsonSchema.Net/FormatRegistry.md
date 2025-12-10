---
layout: "page"
title: "FormatRegistry Class"
bookmark: "FormatRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.049"
---
**Namespace:** Json.Schema

**Inheritance:**
`FormatRegistry`
 🡒 
`object`

Represents a thread-safe registry for managing and retrieving format definitions within the application.

## Remarks

Use the FormatRegistry to register, unregister, and look up format definitions by key. The static
            Global property provides access to a shared, application-wide registry pre-populated with common formats. This class
            is designed for scenarios where centralized management of formats is required, and is safe for use across multiple

## Properties

| Name | Type | Summary |
|---|---|---|
| **Global** | FormatRegistry | Gets the global registry of formats available throughout the application. |

## Methods

### Get(string key)

Retrieves the format associated with the specified key, searching local and global collections.

#### Declaration

```c#
public Format Get(string key)
```

| Parameter | Type | Description |
|---|---|---|
| key | string | The key that identifies the format to retrieve. Cannot be null. |


#### Returns

The format associated with the specified key if found; otherwise, a format representing an unknown key.

#### Remarks

If the format is not found in the local collection, the method searches the global collection

### Register(Format format)

Registers the specified format for later retrieval by its key.

#### Declaration

```c#
public void Register(Format format)
```

| Parameter | Type | Description |
|---|---|---|
| format | Format | The format to register. The format's key must be unique within the collection. |


### Unregister(string name)

Unregisters the format associated with the specified name, removing it from the collection if it exists.

#### Declaration

```c#
public void Unregister(string name)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The name of the format to unregister. Cannot be null. |


#### Remarks

If no format is registered with the specified name, this method has no effect. This method is

