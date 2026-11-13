---
layout: "page"
title: "DotnetCompatibility Class"
bookmark: "DotnetCompatibility"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.030"
---
**Namespace:** Json.Schema

**Inheritance:**
`DotnetCompatibility`
 🡒 
`object`

Provides compatibility extension methods that replicate .NET API behaviors on earlier framework versions.

## Remarks

This class contains static extension methods that offer functionality introduced in later .NET
            versions, enabling codebases to use newer APIs when targeting older frameworks. Methods are conditionally included

## Methods

### ConvertToDecimal(this double value, bool useNet10CompatibleRounding)

Performs a conversion from **System.Double** to **System.Decimal** while optionally allowing
for .Net 11's breaking change.

#### Declaration

```c#
public static decimal ConvertToDecimal(this double value, bool useNet10CompatibleRounding)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |
| useNet10CompatibleRounding | bool | (.Net 11 only) `>true` forces .Net 10 and earlier rounding from `>double` to `>decimal` |


#### Returns



