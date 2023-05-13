---
layout: "page"
title: "PathParsingOptions Class"
bookmark: "PathParsingOptions"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.19"
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
| **AllowMathOperations** | bool | Gets or sets whether mathematical operators are allowed. |
| **AllowRelativePathStart** | bool | Gets or sets whether a JSON Path can start with the `@` symbol<br>instead of `$`. |
| **AllowJsonConstructs** | bool | Gets or sets whether JSON objects and arrays (double-quotes only)<br>are permitted in expression syntax. |
| **TolerateSurroundingWhitespace** | bool | Gets or sets whether the JSON Path can contain leading and<br>trailing whitespace. |
| **AllowInOperator** | bool | Gets or sets whether the `in` operator is allowed. |