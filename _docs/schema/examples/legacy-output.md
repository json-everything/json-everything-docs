---
layout: page
title: Example - Serializing Output in the 2019-09 / 2020-12 Format
bookmark: Legacy Output
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "01.4.5"
---
The 2019-09 and 2020-12 JSON Schema specifications define output formats that can be difficult to work with.

For future versions of the specification, the output is undergoing some [changes](https://json-schema.org/blog/posts/fixing-json-schema-output).  This new format is the default for _JsonSchema.Net_, however the evaluation results can still be serialized to the 2019-09 / 2020-12 formats by using the `Pre202012EvaluationResultsJsonConverter`.

```c#
var schema = JsonSchema.FromText(" ... ");
var options = new EvaluationOptions
{
    OutputFormat = OutputFormats.List
};
var instance = JsonNode.Parse(" ... ");
var results = schema.Evaluate(instance, options);

var serializerOptions = new JsonSerializerOptions
{
    Converters = { new Pre202012EvaluationResultsJsonConverter() }
};
var output = JsonSerializer.Serialize(results, serializationOptions);
```

The `OutputFormat` option still controls which format you'll get:

| `OutputFormat` | "New" format (default) | "Legacy" format |
|:-:|:-:|:-:|
| `Flag` | flag | flag |
| `List` | list | basic |
| `Hierarchical` | hierarchical | verbose |

> The "detailed" format defined by the specification is not supported since it requires some advanced logic (which was never properly specified) to pare down the nodes.
{: .prompt-warning}
