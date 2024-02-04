---
layout: "page"
title: "SchemaOrPropertyList Class"
bookmark: "SchemaOrPropertyList"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.156"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaOrPropertyList`
 🡒 
`object`

A holder for either a schema dependency or a requirements dependency.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Requirements** | List\<string\> | The property dependency. |
| **Schema** | JsonSchema | The schema dependency. |

## Constructors

### SchemaOrPropertyList(JsonSchema schema)

Creates a schema dependency.

#### Declaration

```c#
public SchemaOrPropertyList(JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| schema | JsonSchema | The schema dependency. |


### SchemaOrPropertyList(IEnumerable\<string\> requirements)

Creates a property dependency.

#### Declaration

```c#
public SchemaOrPropertyList(IEnumerable<string> requirements)
```

| Parameter | Type | Description |
|---|---|---|
| requirements | IEnumerable\<string\> | The property dependency. |


