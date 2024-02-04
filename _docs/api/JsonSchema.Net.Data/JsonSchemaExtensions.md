---
layout: "page"
title: "JsonSchemaExtensions Class"
bookmark: "JsonSchemaExtensions"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.006"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`JsonSchemaExtensions`
 🡒 
`object`



## Methods

### GetData(this JsonSchema schema)

Gets the references in `data` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, IDataResourceIdentifier> GetData(this JsonSchema schema)
```


#### Returns



### GetOptionalData(this JsonSchema schema)

Gets the references in `optionalData` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, IDataResourceIdentifier> GetOptionalData(this JsonSchema schema)
```


#### Returns



