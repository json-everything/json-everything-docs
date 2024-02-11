---
layout: "page"
title: "EvaluationContext Class"
bookmark: "EvaluationContext"
permalink: "/api/JsonE.Net/:title/"
order: "10.11.002"
---
**Namespace:** Json.JsonE

**Inheritance:**
`EvaluationContext`
 🡒 
`object`

Provides context data for JSON-e evaluation.

## Methods

### Find(ContextAccessor identifier)

Finds data within the context.

#### Declaration

```c#
public JsonNode Find(ContextAccessor identifier)
```

| Parameter | Type | Description |
|---|---|---|
| identifier | ContextAccessor | An accessor. |


#### Returns

The value, if it exists.

### IsDefined(ContextAccessor identifier)

Checks data for a given property.

#### Declaration

```c#
public bool IsDefined(ContextAccessor identifier)
```

| Parameter | Type | Description |
|---|---|---|
| identifier | ContextAccessor | An accessor. |


#### Returns

true if the value exists in the context; otherwise false.

### Pop()



#### Declaration

```c#
public JsonNode Pop()
```


#### Returns



### Push(JsonObject newContext)

Adds or overrides context data.

#### Declaration

```c#
public void Push(JsonObject newContext)
```

| Parameter | Type | Description |
|---|---|---|
| newContext | JsonObject |  |


