---
layout: "page"
title: "JsonElementExtensions Class"
bookmark: "JsonElementExtensions"
permalink: "/api/Json.More/:title/"
order: "10.13.005"
---
**Namespace:** Json.More

**Inheritance:**
`JsonElementExtensions`
 🡒 
`object`

Provides extension functionality for **System.Text.Json.JsonElement**.

## Methods

### AsJsonElement(this long value)

Converts a **System.Int64** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this long value)
```

| Parameter | Type | Description |
|---|---|---|
| value | long | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this int value)

Converts a **System.Int32** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this int value)
```

| Parameter | Type | Description |
|---|---|---|
| value | int | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this short value)

Converts a **System.Int16** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this short value)
```

| Parameter | Type | Description |
|---|---|---|
| value | short | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this bool value)

Converts a **System.Boolean** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this decimal value)

Converts a **System.Int64** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this double value)

Converts a **System.Double** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this float value)

Converts a **System.Single** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this float value)
```

| Parameter | Type | Description |
|---|---|---|
| value | float | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this string value)

Converts a **System.String** to a **System.Text.Json.JsonElement**.  Can also be used to get a `null` element.

#### Declaration

```c#
public static JsonElement AsJsonElement(this string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this IEnumerable\<JsonElement\> values)

Converts a **System.Int64** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this IEnumerable<JsonElement> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonElement\> | The array of values to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsJsonElement(this IDictionary\<string, JsonElement\> values)

Converts a **System.Int64** to a **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static JsonElement AsJsonElement(this IDictionary<string, JsonElement> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IDictionary\<string, JsonElement\> | The value to convert. |


#### Returns

A **System.Text.Json.JsonElement** representing the value.

#### Remarks

This is a workaround for lack of native support in the System.Text.Json namespace.

### AsNode(this JsonElement element)

Converts a **System.Text.Json.JsonElement** to a **System.Text.Json.Nodes.JsonNode**.

#### Declaration

```c#
public static JsonNode AsNode(this JsonElement element)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonElement | The element. |


#### Returns

An equivalent node.

#### Remarks

This provides a single point of conversion as one is not provided by .Net.
See https://github.com/dotnet/runtime/issues/70427 for more information.

### GetEquivalenceHashCode(this JsonElement element, int maxHashDepth)

Generate a consistent JSON-value-based hash code for the element.

#### Declaration

```c#
public static int GetEquivalenceHashCode(this JsonElement element, int maxHashDepth)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonElement | The element. |
| maxHashDepth | int | Maximum depth to calculate.  Default is -1 which utilizes the entire structure without limitation. |


#### Returns

The hash code.

#### Remarks

See the following for discussion on why the default implementation is insufficient:
            
- https://github.com/gregsdennis/json-everything/issues/76
- https://github.com/dotnet/runtime/issues/33388

### IsEquivalentTo(this JsonElement a, JsonElement b)

Determines JSON-compatible equivalence.

#### Declaration

```c#
public static bool IsEquivalentTo(this JsonElement a, JsonElement b)
```

| Parameter | Type | Description |
|---|---|---|
| a | JsonElement | The first element. |
| b | JsonElement | The second element. |


#### Returns

`true` if the element are equivalent; `false` otherwise.

### ToJsonString(this JsonElement element)

Just a shortcut for calling `JsonSerializer.Serialize()` because `.ToString()` doesn't do what you might expect.

#### Declaration

```c#
public static string ToJsonString(this JsonElement element)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonElement | The value to convert. |


#### Returns

A JSON string.

#### Remarks

See https://github.com/dotnet/runtime/issues/42502

