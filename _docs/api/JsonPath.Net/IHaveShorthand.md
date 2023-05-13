---
layout: "page"
title: "IHaveShorthand Interface"
bookmark: "IHaveShorthand"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.03"
---
**Namespace:** Json.Path

**Inheritance:**
`IHaveShorthand`

Implemented by selectors which have a shorthand syntax.

## Methods

### AppendShorthandString(StringBuilder builder)

Appends the shorthand syntax string to a string builder.

#### Declaration

```c#
public abstract void AppendShorthandString(StringBuilder builder)
```

### ToShorthandString()

Gets the shorthand syntax string.

#### Declaration

```c#
public abstract string ToShorthandString()
```

#### Returns

The shorthand syntax string.

