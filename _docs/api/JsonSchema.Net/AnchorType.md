---
layout: "page"
title: "AnchorType Enum"
bookmark: "AnchorType"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.005"
---
# AnchorType Enum

Namespace: Json.Schema

Specifies the type of anchor that was used during a reference resolution operation.

## Values

| Name | Summary |
|---|---|
| **Static** | Indicates the anchor was produced by `$anchor` (Draft 2019-09+) or by `$id` (Drafts 6 &amp; 7). |
| **Dynamic** | Indicates the anchor was produced by `$dynamicAnchor` (Draft 2020-12+). |
| **Recursive** | Indicates the anchor was produced by `$recursiveAnchor` (Draft 2019-09). |

