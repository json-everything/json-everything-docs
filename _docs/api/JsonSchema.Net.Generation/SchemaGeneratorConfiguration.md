---
layout: "page"
title: "SchemaGeneratorConfiguration Class"
bookmark: "SchemaGeneratorConfiguration"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.079"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`SchemaGeneratorConfiguration`
 🡒 
`object`

Provides additional configuration for the generator.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Current** | SchemaGeneratorConfiguration | Thread-static storage of the current configuration. Only to be used for reading the configuration. Setting values on this object will be overwritten when starting generation. |
| **ExternalReferences** | Dictionary\<Type, Uri\> | Allows mapping of types to external schema `$id`s.  When encountering one of these types, a `$ref` keyword will be generated instead of a full schema. |
| **Generators** | List\<ISchemaGenerator\> | A collection of generators in addition to the global set. |
| **PropertyNameResolver** | PropertyNameResolver | Gets or sets the property name resolving method. Default is **Json.Schema.Generation.PropertyNameResolvers.AsDeclared**. |
| **PropertyOrder** | PropertyOrder | Gets or sets the order in which properties will be listed in the schema. |
| **Refiners** | List\<ISchemaRefiner\> | A collection of refiners. |
| **StrictConditionals** | bool | Gets or sets whether properties that are affected by conditionals are defined globally or only within their respective `then` subschemas.  True restricts those property definitions to `then` subschemas and adds a top-level `unevaluatedProperties: false`; false (default) defines them globally. |
| **TypeNameGenerator** | ITypeNameGenerator | Provides custom naming functionality. |

## Constructors

### SchemaGeneratorConfiguration()

Creates a new **Json.Schema.Generation.SchemaGeneratorConfiguration**.

#### Declaration

```c#
public SchemaGeneratorConfiguration()
```


## Methods

### RegisterXmlCommentFile(string filename)

Registers an assembly's XML comment file.

#### Declaration

```c#
public void RegisterXmlCommentFile(string filename)
```

| Parameter | Type | Description |
|---|---|---|
| filename | string | The file name of the XML file. |


