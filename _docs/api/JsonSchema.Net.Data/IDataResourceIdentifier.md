---
layout: "page"
title: "IDataResourceIdentifier Interface"
bookmark: "IDataResourceIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "9.02.01"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`IDataResourceIdentifier`

Provides an abstraction for different resource identifier types.

## Methods

### TryResolve(EvaluationContext context, out JsonNode value)

Attempts to resolve the reference.

#### Declaration

```c#
public abstract bool TryResolve(EvaluationContext context, out JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The schema evaluation context. |
| value | out JsonNode | If return is true, the value at the indicated location. |


#### Returns

true if resolution is successful; false otherwise.

