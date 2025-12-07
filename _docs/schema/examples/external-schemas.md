---
layout: page
title: Example - Handling References to External Schemas
bookmark: External References
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "01.05.2"
---
JSON Schema has multiple ways to reference other schemas.  This is done to both reduce the size of the schemas that we humans have to deal with as well as to promote code reuse.  Defining a schema once to be used in multiple places is often a better approach than rewriting it in all of those places.  It also allows us to define recursive schemas.

References typically come in two flavors: internal and external.  Internal references can be identified by the `$ref` keyword along with a fragment-only URI in the form of a JSON Pointer, such as `#/$defs/foo`.  However, it's common to define your schemas across several files.  These are external references and the value for `$ref` in these cases needs to indicate the file, e.g. `https://my-example.org/schema`.

> You can reference a subschema of an external document by giving the path to the file and a pointer to a subschema, but this isn't usually done.  Instead, that subschema would be extracted into its own file to be referenced by both schemas.
{: .prompt-info }

## Resolving references {#example-schema-registration}

*JsonSchema.Net* will automatically handle internal references.  The schema document is loaded, and the library can easily resolve pointers inside of it.

In order for *JsonSchema.Net* to handle external schemas, however, the external schemas must be built (which registers them) before the schemas that reference them.

Suppose you have a subfolder where you store your schema files.  To load them, just iterate through the files and register them with `SchemaRegistry`.

```c#
var files = Directory.GetFiles("my-schemas", "*.json");
foreach (var file in files)
{
    // automatically adds to the global registry
    var schema = JsonSchema.FromFile(file);
}
```

It's best practice to ensure all of your schemas declare an `$id` keyword at their root.  If a schema doesn't have this keyword, `FromFile()` will automatically assign the `file:///` URI of the full file name in order to reference this schema.

### Reference loops

Sometimes, you may have a reference loop where one schema references another which references back to the first.  As long as this does result in an infinite cycle, you're good (the specifications require implementations to detect and reject such loops).  As an extremely contrived example, consider these schemas which describe a linked list of alternating integers and strings:

```json
{
  "$id": "integer-node",
  "type": "object",
  "properties": {
    "value": { "type": "integer" },
    "next": { "$ref": "string-node" }
  }
}

{
  "$id": "string-node",
  "type": "object",
  "properties": {
    "value": { "type": "string" },
    "next": { "$ref": "integer-node" }
  }
}
```

You can see that it's impossible to determine a "correct" build order because they depend on each other.  To support this, _JsonSchema.Net_ will leave references unresolved while building `integer-node` without throwing a `RefResolutionException`.  When `string-node` is then built, it will propertly resolve `integer-node` and then attempt to also resolve its references, thereby closing the loop.

## Dynamically loading references {#example-schema-fetching}

An alternative to preloading schemas is setting up an automatic download by setting the `Fetch` function property of the schema registry.

> Automatically downloading external data is [explicitly discouraged](https://json-schema.org/draft/2020-12/json-schema-core.html#name-schema-references) by the specification.  This functionality is added for convenience and disabled by default.
{: .prompt-warning }

```c#
JsonSchema? DownloadSchema(Uri uri)
{
    try
    {
        var content = new HttpClient().GetStringAsync(uri).Result;
        return JsonSchema.FromText(content);
    }
    catch (Exception e)
    {
        return null;
    } 
}

SchemaRegistry.Global.Fetch = DownloadSchema;
```

To clear the download function, simply set `null`.  The property isn't declared as nullable, but this will reset the property to a no-op function.

```c#
SchemaRegistry.Global.Fetch = null!;
```
