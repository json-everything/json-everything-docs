---
layout: "page"
title: "JsonNodeExtensions Class"
bookmark: "JsonNodeExtensions"
permalink: "/api/JsonLogic/:title/"
order: "10.11.013"
---
**Namespace:** Json.Logic

**Inheritance:**
`JsonNodeExtensions`
 🡒 
`object`

Provides fuzzy-logic extensions for **System.Text.Json.Nodes.JsonNode** values.

## Methods

### Flatten(this JsonNode root)

Flattens an array into its root components (removes intermediate arrays).

#### Declaration

```c#
public static IEnumerable<JsonNode> Flatten(this JsonNode root)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonNode | The element. |


#### Returns

Returns a single array with all of the intermediate arrays removed.

### IsTruthy(this JsonNode node)

Determines whether a value can be considered as `true`.

#### Declaration

```c#
public static bool IsTruthy(this JsonNode node)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The element. |


#### Returns

`true` if the value is:
            
- a non-empty array
- a non-empty string
- a non-zero number
- true
            
            	`false` otherwise

### LooseEquals(this JsonNode a, JsonNode b)

Provides loose equality comparison of **System.Text.Json.Nodes.JsonNode** values.

#### Declaration

```c#
public static bool LooseEquals(this JsonNode a, JsonNode b)
```

| Parameter | Type | Description |
|---|---|---|
| a | JsonNode | The first value. |
| b | JsonNode | The second value. |


#### Returns

`true` if the values are loosely equal; `false` otherwise.

#### Remarks

Adapted from [@marvindv/jsonlogic_rs](https://github.com/marvindv/jsonlogic_rs/blob/b2ad93af575f19c6b220a6a54d599e104e72a630/src/operators/logic.rs#L33).

### Numberify(this JsonNode node)

Provides a loose-cast to a number.

#### Declaration

```c#
public static decimal? Numberify(this JsonNode node)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The node. |


#### Returns

A string representation of the value as follows:
            
- empty string returns 0
- all other strings try to parse a number from the value
- true returns 1
- false returns 0
            	- numbers are unchanged
- null, objects, and arrays return null (not numberifiable)

### Stringify(this JsonNode node)

Provides a loose-cast to a string.

#### Declaration

```c#
public static string Stringify(this JsonNode node)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The node. |


#### Returns

A string representation of the value as follows:
            
- arrays are the elements stringified and comma-delimited
- null returns the empty string
- objects return null (not stringifiable)
            	- numbers and booleans return their JSON equivalents
- strings are unchanged

