---
layout: page
title: Bundling JSON Schemas
bookmark: Bundling
permalink: /schema/:title/
icon: fas fa-tag
order: "01.015"
---
Bundling creates a single schema document that contains a root schema and all schemas it references.  This is useful when sharing schemas with other teams or shipping self-contained validation assets.

In _JsonSchema.Net_, bundling is performed by `SchemaRegistry.CreateBundle()`.

## How bundling works

`CreateBundle(rootUri, bundleUri, options)` will create a new Draft 2020-12 schema that:

- sets `$id` to `bundleUri`
- sets top-level `$ref` to `rootUri`
- adds a `$defs` keyword for the root schema as well as any schemas it references

The keys in `$defs` are the resolved reference URIs as strings.

The process traverses only standard `$ref` references.  Dynamic and recursive references (`$dynamicRef`, `$recursiveRef`) are not supported for bundling and will throw `NotSupportedException`.

If a referenced document cannot be resolved, `RefResolutionException` is thrown.

If `rootUri` cannot be found in the registry, the method returns `null`.

## Prerequisites

Before bundling:

- ensure the root schema is available in a `SchemaRegistry`
- ensure all referenced schemas are either:
  - pre-registered in that registry, or
  - resolvable via `SchemaRegistry.Fetch`

> Bundling does not infer schemas from arbitrary files.  References must resolve through the registry.
{: .prompt-info }

## Basic example

```c#
_ = JsonSchema.FromText(
    """
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://schemas.example.com/person",
      "type": "object",
      "properties": {
        "address": { "$ref": "https://schemas.example.com/address" }
      }
    }
    """);

_ = JsonSchema.FromText(
    """
    {
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "$id": "https://schemas.example.com/address",
      "type": "object",
      "properties": {
        "street": { "type": "string" },
        "postalCode": { "type": "string" }
      },
      "required": ["street", "postalCode"]
    }
    """);

var bundled = SchemaRegistry.Global.CreateBundle(
    new Uri("https://schemas.example.com/person"),
    new Uri("https://schemas.example.com/person.bundle")
);

if (bundled is null)
    throw new InvalidOperationException("Root schema was not found.");
```

The resulting bundle will have this shape:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://schemas.example.com/person.bundle",
  "$ref": "https://schemas.example.com/person",
  "$defs": {
    "https://schemas.example.com/person": { "...": "root schema" },
    "https://schemas.example.com/address": { "...": "referenced schema" }
  }
}
```

## Build options

You can pass a `BuildOptions` instance as the third parameter when creating the bundle.

If `options` is omitted, `CreateBundle()` will use the global registry.

Use custom options when you need specific build behavior (for example, custom dialect/registry settings used by your environment).

## When to use bundling

Bundling is a good fit when:

- consumers need a single document instead of a graph of remote references
- deployment environments have restricted network access
- schema artifacts are versioned and distributed as build outputs

For interactive or frequently changing schema graphs, keeping references external can still be a better operational model.
