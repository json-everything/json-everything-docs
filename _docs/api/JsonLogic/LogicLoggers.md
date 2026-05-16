---
layout: "page"
title: "LogicLoggers Class"
bookmark: "LogicLoggers"
permalink: "/api/JsonLogic/:title/"
order: "10.11.019"
---
**Namespace:** Json.Logic

**Inheritance:**
`LogicLoggers`
 🡒 
`object`

Provides commonly used implementations of the ILogicLogger interface for application logic logging.

## Remarks

This static class offers ready-to-use logger instances, including a console logger for outputting log
            messages to the console and a null logger that ignores all log messages. These loggers can be used to simplify

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConsoleLogger** | ILogicLogger | Gets a logger instance that writes log messages to the console. |
| **NullLogger** | ILogicLogger | Gets a logger instance that performs no logging operations.  This is the default logger. |

