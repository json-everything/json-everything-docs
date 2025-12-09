---
layout: "page"
title: "IDataResourceIdentifier Interface"
bookmark: "IDataResourceIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.005"
---
**Namespace:** Json.Schema.Data.Keywords

**Inheritance:**
`IDataResourceIdentifier`

Provides an abstraction for different resource identifier types.

## Methods

### TryResolve(JsonElement root, out JsonElement value)

Attempts to resolve a value from the specified JSON element.

#### Declaration

```c#
public abstract bool TryResolve(JsonElement root, out JsonElement value)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonElement | The root **System.Text.Json.JsonElement** to search for the desired value. |
| value | out JsonElement | When this method returns, contains the resolved **System.Text.Json.JsonElement** if the operation succeeds; otherwise, |


#### Returns

true if the value was successfully resolved; otherwise, false.

