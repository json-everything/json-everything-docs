---
layout: "page"
title: "PathParsingOptions Class"
bookmark: "PathParsingOptions"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.21"
---
**Namespace:** Json.Path

**Inheritance:**
`PathParsingOptions`
 🡒 
`object`

Defines a set of configuration options to control parsing behavior.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AllowInOperator** | bool | Gets or sets whether the `in` operator is allowed. |
| **AllowJsonConstructs** | bool | Gets or sets whether JSON objects and arrays (double-quotes only)<br>are permitted in expression syntax. |
| **AllowMathOperations** | bool | Gets or sets whether mathematical operators are allowed. |
| **AllowRelativePathStart** | bool | Gets or sets whether a JSON Path can start with the `@` symbol<br>instead of `$`. |
| **TolerateExtraWhitespace** | bool | Gets or sets whether the JSON Path can contain whitespace in places<br>the spec says it shouldn't, e.g. between a function name and the<br>opening parenthesis. |

