---
layout: "page"
title: "PathSegment Class"
bookmark: "PathSegment"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.024"
---
**Namespace:** Json.Path

**Inheritance:**
`PathSegment`
 🡒 
`object`

Represents a single path segment, generally indicated in the path by square brackets `[]`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **IsRecursive** | bool | Indicates whether the segment is evaluated as a recursive descent operation. |
| **IsShorthand** | bool | Indicates whether the segment is represented in its shorthand form (e.g. `.foo` instead of `['foo']`). |
| **Selectors** | ISelector[] | Gets the collection of selectors present in the path. |

## Methods

### BuildString(StringBuilder builder)

Builds a string representation using a **System.Text.StringBuilder**.

#### Declaration

```c#
public void BuildString(StringBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | StringBuilder | A string builder. |


### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

