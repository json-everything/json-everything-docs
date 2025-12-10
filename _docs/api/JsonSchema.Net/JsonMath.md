---
layout: "page"
title: "JsonMath Class"
bookmark: "JsonMath"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.060"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonMath`
 🡒 
`object`

Provides static methods for performing mathematical operations and comparisons on JSON numeric values represented by
**System.Text.Json.JsonElement** instances.

## Remarks

The methods in this class are designed to work directly with the textual representation of JSON
            numbers, enabling precise comparison and divisibility checks without converting to .NET numeric types. This is
            useful for scenarios where exact JSON number semantics are required, such as schema validation or custom JSON

## Methods

### Divides(JsonElement dividend, JsonElement divisor)

Determines whether the numeric value represented by the specified JSON element is evenly divisible by the value of
another JSON element.

#### Declaration

```c#
public static bool Divides(JsonElement dividend, JsonElement divisor)
```

| Parameter | Type | Description |
|---|---|---|
| dividend | JsonElement | The JSON element representing the dividend. Must contain a valid numeric value. |
| divisor | JsonElement | The JSON element representing the divisor. Must contain a valid numeric value. |


#### Returns

true if the dividend is evenly divisible by the divisor; otherwise, false.

#### Remarks

Both parameters must represent valid JSON numbers. If the divisor is zero or not a valid number,

### NumberCompare(JsonElement a, JsonElement b)

Compares two JSON number values represented by **System.Text.Json.JsonElement** instances and determines their relative
order.

#### Declaration

```c#
public static int NumberCompare(JsonElement a, JsonElement b)
```

| Parameter | Type | Description |
|---|---|---|
| a | JsonElement | The first **System.Text.Json.JsonElement** containing a JSON number to compare. |
| b | JsonElement | The second **System.Text.Json.JsonElement** containing a JSON number to compare. |


#### Returns

A signed integer that indicates the relative order of the numbers: less than zero if <paramref name="a" /> is less
            than <paramref name="b" />; zero if they are equal; greater than zero if <paramref name="a" /> is greater than

#### Remarks

This method performs a numeric comparison based on the JSON number representations, handling
            differences in sign, digit sequence, and exponent. Both parameters must represent valid JSON numbers; otherwise,

