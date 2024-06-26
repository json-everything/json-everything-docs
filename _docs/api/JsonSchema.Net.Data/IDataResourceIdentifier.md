---
layout: "page"
title: "IDataResourceIdentifier Interface"
bookmark: "IDataResourceIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.003"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`IDataResourceIdentifier`

Provides an abstraction for different resource identifier types.

## Methods

### TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)

Resolves a resource.

#### Declaration

```c#
public abstract bool TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| evaluation | KeywordEvaluation | The evaluation being process.  This will help identify. |
| registry | SchemaRegistry | The schema registry. |
| value | out JsonNode | The value, if **evaluation** was resolvable. |


#### Returns

True if resolution was successful; false otherwise.

