---
layout: "page"
title: "RuntimeExpression Class"
bookmark: "RuntimeExpression"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.050"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`RuntimeExpression`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<string\>
- IEquatable\<RuntimeExpression\>

Models an OpenAPI runtime expression.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Method** | RuntimeExpression | A `$method` runtime expression. |
| **StatusCode** | RuntimeExpression | A `$statusCode` runtime expression. |
| **Url** | RuntimeExpression | A `$url` runtime expression. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **ExpressionType** | RuntimeExpressionType | Gets the expression type. |
| **JsonPointer** | JsonPointer? | Gets the JSON Pointer. |
| **Name** | string | Gets the name. |
| **SourceType** | RuntimeExpressionSourceType? | Gets the source type. |
| **Token** | string | Gets the token. |

## Methods

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

### Equals(RuntimeExpression other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(RuntimeExpression other)
```

| Parameter | Type | Description |
|---|---|---|
| other | RuntimeExpression | An object to compare with this object. |


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

Parses a runtime expression from a string.

#### Declaration

```c#
public static RuntimeExpression Parse(string source)
```

| Parameter | Type | Description |
|---|---|---|
| source | string | The string source |


#### Returns

A runtime expression

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

