---
layout: "page"
title: "JsonSchemaValidationFilter Class"
bookmark: "JsonSchemaValidationFilter"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.001"
---
**Namespace:** Json.Schema.Api

**Inheritance:**
`JsonSchemaValidationFilter`
 🡒 
`object`

**Implemented interfaces:**

- IActionFilter
- IFilterMetadata
- IAlwaysRunResultFilter
- IResultFilter

An ASP.NET Core filter that validates incoming JSON request bodies against a JSON Schema and returns detailed
validation errors in the response if validation fails.

## Remarks

This filter inspects the model state for JSON Schema validation errors during both action and result
            execution. If validation errors are present and correspond to JSON Pointer paths, the filter short-circuits the
            request pipeline and returns a 400 Bad Request response with a standardized problem details payload. The filter is
            intended to be used in scenarios where JSON Schema validation is required for API endpoints that accept JSON input. 
            The filter implements both IActionFilter and IAlwaysRunResultFilter to ensure that validation errors are handled
            regardless of whether model binding partially or totally fails. It does not modify the response if no relevant

## Methods

### OnActionExecuted(ActionExecutedContext context)

Called after the action executes, before the action result.

#### Declaration

```c#
public void OnActionExecuted(ActionExecutedContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | ActionExecutedContext | The **Microsoft.AspNetCore.Mvc.Filters.ActionExecutedContext**. |


### OnActionExecuting(ActionExecutingContext context)

Called before the action executes, after model binding is complete.

#### Declaration

```c#
public void OnActionExecuting(ActionExecutingContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | ActionExecutingContext | The **Microsoft.AspNetCore.Mvc.Filters.ActionExecutingContext**. |


### OnResultExecuted(ResultExecutedContext context)

Called after the action result executes.

#### Declaration

```c#
public void OnResultExecuted(ResultExecutedContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | ResultExecutedContext | The **Microsoft.AspNetCore.Mvc.Filters.ResultExecutedContext**. |


### OnResultExecuting(ResultExecutingContext context)

Called before the action result executes.

#### Declaration

```c#
public void OnResultExecuting(ResultExecutingContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | ResultExecutingContext | The **Microsoft.AspNetCore.Mvc.Filters.ResultExecutingContext**. |


