---
layout: "page"
title: "OrderingSpecifier Class"
bookmark: "OrderingSpecifier"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.006"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`OrderingSpecifier`
 🡒 
`object`

Represents a single ordering characteristic.

## Properties

| Name | Type | Summary |
|---|---|---|
| **By** | JsonPointer | Gets a pointer to the value. |
| **Culture** | CultureInfo | For strings, gets the culture to use. |
| **Direction** | Direction | Gets the direction of the ordering. |
| **IgnoreCase** | bool | For strings, gets whether to consider case sensitivity. |

## Constructors

### OrderingSpecifier(JsonPointer by, Direction direction, CultureInfo culture, bool ignoreCase)

Creates a new **Json.Schema.ArrayExt.OrderingSpecifier**.

#### Declaration

```c#
public OrderingSpecifier(JsonPointer by, Direction direction, CultureInfo culture, bool ignoreCase)
```

| Parameter | Type | Description |
|---|---|---|
| by | JsonPointer | A pointer to the value |
| direction | Direction | The direction of the ordering |
| culture | CultureInfo | For strings, gets the culture to use |
| ignoreCase | bool | For strings, gets whether to consider case sensitivity |


