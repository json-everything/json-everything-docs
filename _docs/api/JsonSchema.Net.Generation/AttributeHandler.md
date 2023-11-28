---
layout: "page"
title: "AttributeHandler Class"
bookmark: "AttributeHandler"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.006"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`AttributeHandler`
 🡒 
`object`

Adds attribute-related schema elements.

## Methods

### AddHandler()

Adds a handler for a custom attribute that cannot be made to implement **Json.Schema.Generation.IAttributeHandler**.

#### Declaration

```c#
public static void AddHandler()
```


### AddHandler(IAttributeHandler handler)

Adds a handler for a custom attribute that cannot be made to implement **Json.Schema.Generation.IAttributeHandler**.

#### Declaration

```c#
public static void AddHandler(IAttributeHandler handler)
```

| Parameter | Type | Description |
|---|---|---|
| handler | IAttributeHandler | The handler. |


### RemoveHandler()

Removes a handler type.

#### Declaration

```c#
public static void RemoveHandler()
```


