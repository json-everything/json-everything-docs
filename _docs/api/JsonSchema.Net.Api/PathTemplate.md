---
layout: "page"
title: "PathTemplate Class"
bookmark: "PathTemplate"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.042"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`PathTemplate`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<PathTemplate\>
- IEquatable\<string\>

Models a templated path URI.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Segments** | string[] | Gets the segments of the path. |

## Methods

### Equals(PathTemplate other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PathTemplate other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PathTemplate | An object to compare with this object. |


#### Returns

<see langword="true" /> if the current object is equal to the <paramref name="other" /> parameter; otherwise, <see langword="false" />.

### Equals(string other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(string other)
```

| Parameter | Type | Description |
|---|---|---|
| other | string | An object to compare with this object. |


#### Returns

<see langword="true" /> if the current object is equal to the <paramref name="other" /> parameter; otherwise, <see langword="false" />.

### Equals(object obj)

Determines whether the specified object is equal to the current object.

#### Declaration

```c#
public override bool Equals(object obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | object | The object to compare with the current object. |


#### Returns

<see langword="true" /> if the specified object  is equal to the current object; otherwise, <see langword="false" />.

### GetHashCode()

Serves as the default hash function.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A hash code for the current object.

### Parse(string source)

Parses a new path template from a string.

#### Declaration

```c#
public static PathTemplate Parse(string source)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The string source |


#### Returns

A path template.

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

### TryParse(string source, out PathTemplate template)

Attempts to parse a new path template from a string.

#### Declaration

```c#
public static bool TryParse(string source, out PathTemplate template)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The string source |
| template | out PathTemplate | The path template if the parse succeeded, otherwise null |


#### Returns

True if the parse succeeded, otherwise false.

