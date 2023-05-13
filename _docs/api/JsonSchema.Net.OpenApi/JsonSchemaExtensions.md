---
layout: "page"
title: "JsonSchemaExtensions Class"
bookmark: "JsonSchemaExtensions"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.05"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`JsonSchemaExtensions`
 🡒 
`object`



## Methods

### GetDiscriminator(this JsonSchema schema)

Gets the `discriminator` keyword if it exists.

#### Declaration

```c#
public static DiscriminatorKeyword GetDiscriminator(this JsonSchema schema)
```

#### Returns



### GetExample(this JsonSchema schema)

Gets the value of `example` if the keyword exists.

#### Declaration

```c#
public static JsonNode GetExample(this JsonSchema schema)
```

#### Returns



### GetExternalDocs(this JsonSchema schema)

Gets the value of `externalDocs` if the keyword exists.

#### Declaration

```c#
public static string GetExternalDocs(this JsonSchema schema)
```

#### Returns



### GetXml(this JsonSchema schema)

Gets the `xml` keyword if it exists.

#### Declaration

```c#
public static XmlKeyword GetXml(this JsonSchema schema)
```

#### Returns



