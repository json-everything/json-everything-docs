---
layout: "page"
title: "ValidatingJsonModelBinderProvider Class"
bookmark: "ValidatingJsonModelBinderProvider"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.003"
---
**Namespace:** Json.Schema.Api

**Inheritance:**
`ValidatingJsonModelBinderProvider`
 🡒 
`object`

**Implemented interfaces:**

- IModelBinderProvider

Provides an ASP.NET Core model binder provider that supplies a model binder for types annotated with JSON schema
attributes, enabling automatic validation of JSON request bodies against the model's schema.

## Remarks

This provider only applies to model types decorated with the **Json.Schema.Generation.Serialization.GenerateJsonSchemaAttribute** or **Json.Schema.Serialization.JsonSchemaAttribute** attributes and when the binding source is
            either unspecified or explicitly set to the request body. It is typically used to ensure that incoming JSON payloads
            conform to the expected schema before model binding completes. To use this provider, register it in the

## Methods

### GetBinder(ModelBinderProviderContext context)

Creates a **Microsoft.AspNetCore.Mvc.ModelBinding.IModelBinder** based on **Microsoft.AspNetCore.Mvc.ModelBinding.ModelBinderProviderContext**.

#### Declaration

```c#
public IModelBinder GetBinder(ModelBinderProviderContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | ModelBinderProviderContext | The **Microsoft.AspNetCore.Mvc.ModelBinding.ModelBinderProviderContext**. |


#### Returns

An **Microsoft.AspNetCore.Mvc.ModelBinding.IModelBinder**.

