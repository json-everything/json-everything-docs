---
layout: "page"
title: "DependsOnAnnotationsFromAttribute<T> Class"
bookmark: "DependsOnAnnotationsFromAttribute`1"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.024"
---
**Namespace:** Json.Schema

**Inheritance:**
`DependsOnAnnotationsFromAttribute<T>`
 🡒 
`DependsOnAnnotationsFromAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Indicates a keyword from which the decorated keyword requires annotations.

## Remarks

Apply this attribute to your schema keyword to indicate a dependency on another keyword.
            
**Warning**: Generic attributes are not supported in .Net Framework.  If your target
includes .Net Framework, use the non-generic form of this attribute.

## Properties

| Name | Type | Summary |
|---|---|---|
| **DependentType** | Type | The dependent type. |
| **TypeId** | object |  |

## Constructors

### DependsOnAnnotationsFromAttribute\<T\>()

Creates a new **Json.Schema.DependsOnAnnotationsFromAttribute** instance.

#### Declaration

```c#
public DependsOnAnnotationsFromAttribute`1()
```


