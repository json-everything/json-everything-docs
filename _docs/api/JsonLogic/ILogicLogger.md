---
layout: "page"
title: "ILogicLogger Interface"
bookmark: "ILogicLogger"
permalink: "/api/JsonLogic/:title/"
order: "10.11.009"
---
**Namespace:** Json.Logic

**Inheritance:**
`ILogicLogger`

Defines a logger that writes structured log entries represented as JSON nodes.

## Remarks

Implementations of this interface can be used to record log information in a structured format,
            enabling easier parsing and analysis of log data. The interface is intended for scenarios where log content is best

## Methods

### WriteLine(JsonNode content)

Writes the specified JSON content followed by a line terminator.

#### Declaration

```c#
public abstract void WriteLine(JsonNode content)
```

| Parameter | Type | Description |
|---|---|---|
| content | JsonNode | The JSON content to write. Can be null, in which case no content is written but a line terminator is still |


