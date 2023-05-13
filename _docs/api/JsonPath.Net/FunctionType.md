---
layout: "page"
title: "FunctionType Enum"
bookmark: "FunctionType"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.02"
---
# FunctionType Enum

Namespace: Json.Path

Indicates the return type of a filter expression function.

## Values

| Name | Summary |
|---|---|
| **Unspecified** | Holder for a default value.  Not an actual valid function type. |
| **Value** | Indicates the function returns a JSON-like value that can be<br>compared with equality and inequality operators. |
| **Logical** | Indicates the function returns a non-JSON boolean value that can be<br>compared with logical operators. |
| **Nodelist** | Indicates the function returns a nodelist. |
