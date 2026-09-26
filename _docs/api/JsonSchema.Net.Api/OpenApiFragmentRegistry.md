---
layout: "page"
title: "OpenApiFragmentRegistry Class"
bookmark: "OpenApiFragmentRegistry"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.029"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiFragmentRegistry`
 🡒 
`object`

Collects the fragments contributed by each assembly.

## Remarks

Every assembly that declares API surface emits a module initializer which adds its
fragment here and touches the assemblies it references, so that their initializers run
in turn.  By the time the application configures services, the registry holds every
fragment reachable from the entry assembly, with no reflection and no dependence on
load order.

## Methods

### Add(OpenApiFragment fragment)

Adds a fragment.

#### Declaration

```c#
public static void Add(OpenApiFragment fragment)
```

| Parameter | Type | Description |
|---|---|---|
| fragment | OpenApiFragment | The fragment. |


#### Remarks

Called from generated module initializers.  The runtime runs a module initializer
at most once per assembly, so a fragment cannot be added twice.

### GetFragments()

Gets the fragments registered so far.

#### Declaration

```c#
public static IReadOnlyList<OpenApiFragment> GetFragments()
```


#### Returns

The fragments.

