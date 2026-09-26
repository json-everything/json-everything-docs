---
layout: "page"
title: "OpenApiDocumentAttribute Class"
bookmark: "OpenApiDocumentAttribute"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.023"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiDocumentAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Places a controller's endpoints in named OpenAPI descriptions rather than the default one.

## Remarks

A controller without this attribute appears in the default description — the one
            configured by the `AddOpenApi` overload that takes no name.  Applying the attribute
            moves the controller out of the default description and into the ones it names, so
            applying it to one controller does not change where any other controller appears.

Minimal APIs are always described in the default description.  Splitting them is not
            supported.

## Examples

```

            [OpenApiDocument("admin")]
            [ApiController]
            [Route("api/admin")]
            public class AdminController : ControllerBase;
            
```

## Properties

| Name | Type | Summary |
|---|---|---|
| **Names** | string[] | Gets the names of the descriptions the controller appears in. |
| **TypeId** | object |  |

## Constructors

### OpenApiDocumentAttribute(params string[] names)

Creates a new **Json.Schema.Api.OpenApi.OpenApiDocumentAttribute**.

#### Declaration

```c#
public OpenApiDocumentAttribute(params string[] names)
```

| Parameter | Type | Description |
|---|---|---|
| names | params string[] | The names of the descriptions the controller appears in.  A controller that belongs to more than one audience can name several. |


