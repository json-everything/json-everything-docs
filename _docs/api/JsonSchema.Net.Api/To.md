---
layout: "page"
title: "To Class"
bookmark: "To"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.060"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`To`
 🡒 
`object`

Provides factory methods for creating references to objects in the components collection.

## Methods

### Callback(string componentName)

Creates a reference to a callback.

#### Declaration

```c#
public static CallbackRef Callback(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the callback. |


#### Returns

The reference.

### Example(string componentName)

Creates a reference to a example.

#### Declaration

```c#
public static ExampleRef Example(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the example. |


#### Returns

The reference.

### Header(string componentName)

Creates a reference to a header.

#### Declaration

```c#
public static HeaderRef Header(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the header. |


#### Returns

The reference.

### Link(string componentName)

Creates a reference to a link.

#### Declaration

```c#
public static LinkRef Link(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the link. |


#### Returns

The reference.

### Parameter(string componentName)

Creates a reference to a parameter.

#### Declaration

```c#
public static ParameterRef Parameter(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the parameter. |


#### Returns

The reference.

### PathItem(string componentName)

Creates a reference to a path item.

#### Declaration

```c#
public static PathItemRef PathItem(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the path item. |


#### Returns

The reference.

### RequestBody(string componentName)

Creates a reference to a request body.

#### Declaration

```c#
public static RequestBodyRef RequestBody(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the request body. |


#### Returns

The reference.

### Response(string componentName)

Creates a reference to a response.

#### Declaration

```c#
public static ResponseRef Response(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the response. |


#### Returns

The reference.

### Schema(string componentName)

Creates a reference to a schema.

#### Declaration

```c#
public static JsonSchema Schema(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the schema. |


#### Returns

The reference.

### SecurityScheme(string componentName)

Creates a reference to a security scheme.

#### Declaration

```c#
public static SecuritySchemeRef SecurityScheme(string componentName)
```

| Parameter | Type | Description |
|---|---|---|
| componentName | string | The key that identifies the security scheme. |


#### Returns

The reference.

