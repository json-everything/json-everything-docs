---
layout: "page"
title: "SchemaPriorityAttribute Class"
bookmark: "SchemaPriorityAttribute"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.093"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaPriorityAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Indicates keyword priority.

## Remarks

Keywords are processed in priority order.  This will help process multiple
keywords in the proper sequence.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Priority** | int | The keyword priority. |
| **TypeId** | object |  |

## Constructors

### SchemaPriorityAttribute(int priority)

Creates a new **Json.Schema.SchemaPriorityAttribute**.

#### Declaration

```c#
public SchemaPriorityAttribute(int priority)
```

| Parameter | Type | Description |
|---|---|---|
| priority | int | The keyword priority. |


