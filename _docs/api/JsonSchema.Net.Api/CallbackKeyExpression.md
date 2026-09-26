---
layout: "page"
title: "CallbackKeyExpression Class"
bookmark: "CallbackKeyExpression"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.001"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`CallbackKeyExpression`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<string\>

Models a callback key expression.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Parameters** | RuntimeExpression[] | Gets the **Json.Schema.Api.OpenApi.RuntimeExpression** parameters that exist in the key expression. |

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

### Resolve()

(not yet implemented) Resolves the callback expression.

#### Declaration

```c#
public Uri Resolve()
```


#### Returns

Throws not implemented.

#### Remarks

In order to implement this, an HttpRequest or HttpResponse is required, which
means adding a reference to ASP.net.  As a result, it may make more sense for
resolution functionality to exist in a secondary package.

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

