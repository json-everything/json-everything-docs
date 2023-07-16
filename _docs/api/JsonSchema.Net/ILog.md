---
layout: "page"
title: "ILog Interface"
bookmark: "ILog"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.044"
---
**Namespace:** Json.Schema

**Inheritance:**
`ILog`

Used to log processing details.

## Methods

### Write(Func\<string\> message, int indent)

Logs a message with a newline.

#### Declaration

```c#
public abstract void Write(Func<string> message, int indent)
```

| Parameter | Type | Description |
|---|---|---|
| message | Func\<string\> | The message. |
| indent | int |  |


