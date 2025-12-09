---
layout: page
title: Using Multiple `[If]` Attributes in a Single Group
bookmark: Stacking [If]s
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "01.06.4.5"
---
This example shows how multiple `[If]` attributes can be combined to create "OR" logic.

Suppose we have the following model

```c#
class CarColors
{
    public string Interior { get; set; }
    public string Exterior { get; set; }
}
```

Now let's say that there is a requirement that if the exterior color is white or black, the interior needs to be gray; otherwise, the interior can be any color.

## The standard way

In normal usage, we could create two condition groups: one for white and one for black.  We would the apply constraints under those conditions.

```c#
[If(nameof(Exterior, "white", "isWhite"))]
[If(nameof(Exterior, "black", "isBlack"))]
class CarColors
{
    [Const("gray", ConditionGroup = "isWhite")]
    [Const("gray", ConditionGroup = "isBlack")]
    public string Interior { get; set; }
    public string Exterior { get; set; }
}
```

This would create the schema:

```json
{
  "type": "object",
  "properties": {
    "Interior": { "type": "string" },
    "Exterior": { "type": "string" }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "Exterior": { "const": "white" }
        },
        "required": [ "Exterior" ]
      },
      "then": {
        "properties": {
          "Interior": { "const": "gray" }
        }
      }
    },
    {
      "if": {
        "properties": {
          "Exterior": { "const": "black" }
        },
        "required": [ "Exterior" ]
      },
      "then": {
        "properties": {
          "Interior": { "const": "gray" }
        }
      }
    }
  ]
}
```

This is fine.  But notice how the `then` constraint sets are the same.  It'd be better if the conditions could be combined to check if `Exterior` is _either_ `"white"` or `"black"` and just have a single `then`.

## Combining conditions

To do this, we just need to specify the same group in the appropriate `[If]` attributes.

```c#
[If(nameof(Exterior, "white", "grayRequirement"))]
[If(nameof(Exterior, "black", "grayRequirement"))]
class CarColors
{
    [Const("gray", ConditionGroup = "grayRequirement")]
    public string Interior { get; set; }
    public string Exterior { get; set; }
}
```

This will collect all of the possible values for that property and render them under an `enum` instead of a `const`.

```json
{
  "type": "object",
  "properties": {
    "Interior": { "type": "string" },
    "Exterior": { "type": "string" }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "Exterior": { "enum": [ "white", "black" ] }
        },
        "required": [ "Exterior" ]
      },
      "then": {
        "properties": {
          "Interior": { "const": "gray" }
        }
      }
    }
  ]
}
```

This is a much more concise schema that better expresses the requirement.
