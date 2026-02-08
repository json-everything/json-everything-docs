---
layout: "page"
title: "ValidatingJsonModelBinder Class"
bookmark: "ValidatingJsonModelBinder"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.002"
---
**Namespace:** Json.Schema.Api

**Inheritance:**
`ValidatingJsonModelBinder`
 🡒 
`object`

**Implemented interfaces:**

- IModelBinder

Provides a model binder that deserializes JSON request data and performs validation, adding any validation errors to
the model state.

## Remarks

The ValidatingJsonModelBinder is designed for use in ASP.NET Core applications to bind and validate
            models from JSON request bodies or value providers. When binding from the request body, it uses the configured
            JsonSerializerOptions and supports validation that can add detailed errors to the model state. If validation fails,
            the model binding result is set to failed, and errors are available in ModelState for use by validation filters or
            error handlers. This binder is typically used to enable custom or advanced validation scenarios during model

## Methods

### BindModelAsync(ModelBindingContext bindingContext)

Attempts to bind a model.

#### Declaration

```c#
public Task BindModelAsync(ModelBindingContext bindingContext)
```

| Parameter | Type | Description |
|---|---|---|
| bindingContext | ModelBindingContext | The **Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingContext**. |


#### Returns

A **System.Threading.Tasks.Task** which will complete when the model binding process completes.

If model binding was successful, the **Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingContext.Result** should have
            **Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingResult.IsModelSet** set to `true`.

A model binder that completes successfully should set **Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingContext.Result** to
            a value returned from **Microsoft.AspNetCore.Mvc.ModelBinding.ModelBindingResult.Success(System.Object)**.

