---
layout: "page"
title: "DialectRegistry Class"
bookmark: "DialectRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.029"
---
**Namespace:** Json.Schema

**Inheritance:**
`DialectRegistry`
 🡒 
`object`

Provides a registry for managing and retrieving JSON Schema dialects by their unique identifiers.

## Remarks

The registry allows registration and unregistration of custom dialects. A global singleton instance is available via the **Json.Schema.DialectRegistry.Global** property for application-wide access. Getting dialects via

## Properties

| Name | Type | Summary |
|---|---|---|
| **Global** | DialectRegistry | Gets the global registry of JSON Schema dialects used throughout the application. |

## Methods

### Register(Dialect dialect)

Registers a custom dialect for use in the system.

#### Declaration

```c#
public void Register(Dialect dialect)
```

| Parameter | Type | Description |
|---|---|---|
| dialect | Dialect | The dialect to register. The dialect must have a non-null identifier and must not conflict with any official |


#### Remarks

Registering a dialect allows it to be used in subsequent operations. Official dialects cannot be

### Unregister(Uri dialectId)

Unregisters a dialect identified by the specified URI, removing it from the collection of available dialects.

#### Declaration

```c#
public void Unregister(Uri dialectId)
```

| Parameter | Type | Description |
|---|---|---|
| dialectId | Uri | The URI that uniquely identifies the dialect to unregister. Cannot be an official dialect. |


