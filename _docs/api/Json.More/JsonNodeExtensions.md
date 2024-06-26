---
layout: "page"
title: "JsonNodeExtensions Class"
bookmark: "JsonNodeExtensions"
permalink: "/api/Json.More/:title/"
order: "10.13.009"
---
**Namespace:** Json.More

**Inheritance:**
`JsonNodeExtensions`
 🡒 
`object`

Provides extension functionality for **System.Text.Json.Nodes.JsonNode**.

## Methods

### AsJsonString(this JsonNode node, JsonSerializerOptions options)

Gets JSON string representation for **System.Text.Json.Nodes.JsonNode**, including null support.

#### Declaration

```c#
public static string AsJsonString(this JsonNode node, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | A node. |
| options | JsonSerializerOptions | Serializer options |


#### Returns

JSON string representation.

### GetBool(this JsonValue value)

Gets a node's underlying boolean value.

#### Declaration

```c#
public static bool? GetBool(this JsonValue value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonValue | A JSON value. |


#### Returns

Gets the underlying boolean value, or null.

#### Remarks

JsonNode may use a **System.Text.Json.JsonElement** under the hood which subsequently contains a boolean.
This means that `JsonNode.GetValue&lt;bool&gt;()` will not work as expected.

### GetEquivalenceHashCode(this JsonNode node, int maxHashDepth)

Generate a consistent JSON-value-based hash code for the element.

#### Declaration

```c#
public static int GetEquivalenceHashCode(this JsonNode node, int maxHashDepth)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The element. |
| maxHashDepth | int | Maximum depth to calculate.  Default is -1 which utilizes the entire structure without limitation. |


#### Returns

The hash code.

#### Remarks

See the following for discussion on why the default implementation is insufficient:
            
- https://github.com/json-everything/json-everything/issues/76
- https://github.com/dotnet/runtime/issues/33388

### GetInteger(this JsonValue value)

Gets a node's underlying numeric value if it's an integer.

#### Declaration

```c#
public static long? GetInteger(this JsonValue value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonValue | A JSON value. |


#### Returns

Gets the underlying numeric value if it's an integer, or null if the node represented a non-integer value.

### GetNumber(this JsonValue value)

Gets a node's underlying numeric value.

#### Declaration

```c#
public static decimal? GetNumber(this JsonValue value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonValue | A JSON value. |


#### Returns

Gets the underlying numeric value, or null if the node represented a non-numeric value.

### GetPathFromRoot(this JsonNode node, bool useShorthand)

Gets a JSON Path string that indicates the node's location within
its JSON structure.

#### Declaration

```c#
public static string GetPathFromRoot(this JsonNode node, bool useShorthand)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The node to find. |
| useShorthand | bool | Determines whether shorthand syntax is used when possible, e.g. `$.foo`. |


#### Returns

A string containing a JSON Path.

### GetPointerFromRoot(this JsonNode node)

Gets a JSON Pointer string that indicates the node's location within
its JSON structure.

#### Declaration

```c#
public static string GetPointerFromRoot(this JsonNode node)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The node to find. |


#### Returns

A string containing a JSON Pointer.

### GetString(this JsonValue value)

Gets a node's underlying string value.

#### Declaration

```c#
public static string GetString(this JsonValue value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonValue | A JSON value. |


#### Returns

Gets the underlying string value, or null.

#### Remarks

JsonNode may use a **System.Text.Json.JsonElement** under the hood which subsequently contains a string.
This means that `JsonNode.GetValue&lt;string&gt;()` will not work as expected.

### IsEquivalentTo(this JsonNode a, JsonNode b)

Determines JSON-compatible equivalence.

#### Declaration

```c#
public static bool IsEquivalentTo(this JsonNode a, JsonNode b)
```

| Parameter | Type | Description |
|---|---|---|
| a | JsonNode | The first element. |
| b | JsonNode | The second element. |


#### Returns

`true` if the element are equivalent; `false` otherwise.

#### Remarks

**System.Text.Json.Nodes.JsonNode.DeepEquals(System.Text.Json.Nodes.JsonNode,System.Text.Json.Nodes.JsonNode)** has trouble testing numeric
equality when `decimal` is involved.  As such, it is still advised to use this
method instead.  See https://github.com/dotnet/runtime/issues/97490.

### ToJsonArray(this IEnumerable\<JsonNode\> nodes)

Creates a new **System.Text.Json.Nodes.JsonArray** by copying from an enumerable of nodes.

#### Declaration

```c#
public static JsonArray ToJsonArray(this IEnumerable<JsonNode> nodes)
```

| Parameter | Type | Description |
|---|---|---|
| nodes | IEnumerable\<JsonNode\> | The nodes. |


#### Returns

A JSON array.

#### Remarks

`JsonNode` may only be part of a single JSON tree, i.e. have a single parent.
Copying a node allows its value to be saved to another JSON tree.

### TryGetValue(this JsonObject obj, string propertyName, out JsonNode node, out Exception e)

Convenience method that wraps **System.Text.Json.Nodes.JsonObject.TryGetPropertyValue(System.String,System.Text.Json.Nodes.JsonNode@)**
and catches argument exceptions.

#### Declaration

```c#
public static bool TryGetValue(this JsonObject obj, string propertyName, out JsonNode node, out Exception e)
```

| Parameter | Type | Description |
|---|---|---|
| obj | JsonObject | The JSON object. |
| propertyName | string | The property name |
| node | out JsonNode | The node under the property name if it exists and is singular; null otherwise. |
| e | out Exception | An exception if one was thrown during the access attempt. |


#### Returns

true if the property exists and is singular within the JSON data.

#### Remarks

**System.Text.Json.Nodes.JsonObject.TryGetPropertyValue(System.String,System.Text.Json.Nodes.JsonNode@)** throws an
**System.ArgumentException** if the node was parsed from data that has duplicate
keys.  Please see https://github.com/dotnet/runtime/issues/70604 for more information.

