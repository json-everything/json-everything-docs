---
layout: "page"
title: "JsonPath Class"
bookmark: "JsonPath"
permalink: "/api/JsonPath.Net/:title/"
order: "10.08.009"
---
**Namespace:** Json.Path

**Inheritance:**
`JsonPath`
 🡒 
`object`

Represents a JSON Path.

## Properties

| Name | Type | Summary |
|---|---|---|
| **IsSingular** | bool | Gets whether the path is a singular path.  That is, it can only return a nodelist containing at most a single value. |
| **Root** | JsonPath | Gets a JSON Path with only a global root and no selectors, namely `$`. |
| **Scope** | PathScope | Gets the scope of the path. |
| **Segments** | PathSegment[] | Gets the segments of the path. |

## Methods

### Append(string name)

Appends a new segment with the specified name to the current JSON path and returns the resulting path.

#### Declaration

```c#
public JsonPath Append(string name)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The name of the segment to append to the JSON path. This value cannot be null or empty. |


#### Returns

A new instance of the JsonPath class that includes the appended segment.

#### Remarks

This method can be used to build more complex JSON paths by successively appending named segments.
            The original JsonPath instance remains unchanged; this method returns a new instance with the additional

### Append(int index)

Appends an array index selector to the current JSON path, enabling access to a specific element within a JSON
array.

#### Declaration

```c#
public JsonPath Append(int index)
```

| Parameter | Type | Description |
|---|---|---|
| index | int | The zero-based index of the element to select from the array. Must be within the bounds of the target array. |


#### Returns

A new JsonPath instance that includes the appended index selector.

#### Remarks

Use this method to navigate to a particular element in a JSON array by its index. Supplying an

### BuildString(StringBuilder builder)

Builds a string representation of the path using a **System.Text.StringBuilder**.

#### Declaration

```c#
public void BuildString(StringBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | StringBuilder | The string builder. |


### Evaluate(JsonNode root, PathEvaluationOptions options)

Evaluates the path against a JSON instance.

#### Declaration

```c#
public PathResult Evaluate(JsonNode root, PathEvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonNode | The root of the JSON instance. |
| options | PathEvaluationOptions | Evaluation options. |


#### Returns

The results of the evaluation.

### Parse(string source, PathParsingOptions options)

Parses a **Json.Path.JsonPath** from a string.

#### Declaration

```c#
public static JsonPath Parse(string source, PathParsingOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |
| options | PathParsingOptions | (optional) The parsing options. |


#### Returns

The parsed path.

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

### TryParse(string source, out JsonPath path, PathParsingOptions options)

Parses a **Json.Path.JsonPath** from a string.

#### Declaration

```c#
public static bool TryParse(string source, out JsonPath path, PathParsingOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The source string. |
| options | out JsonPath | (optional) The parsing options. |
| path | PathParsingOptions | The parsed path, if successful; otherwise null. |


#### Returns

True if successful; otherwise false.

