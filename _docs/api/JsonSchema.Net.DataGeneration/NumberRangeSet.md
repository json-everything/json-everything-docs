---
layout: "page"
title: "NumberRangeSet Class"
bookmark: "NumberRangeSet"
permalink: "/api/JsonSchema.Net.DataGeneration/:title/"
order: "9.06.05"
---
**Namespace:** Json.Schema.DataGeneration

**Inheritance:**
`NumberRangeSet`
 🡒 
`object`

Managees a collection of number ranges as a single entity.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Full** | NumberRangeSet | Represents the full range of representable values. |
| **None** | NumberRangeSet | Represent the empty set. |
| **NonNegative** | NumberRangeSet | Represents the range of 0 and all positive numbers. |
| **Ranges** | IReadOnlyList\<NumberRange\> | Gets the ranges. |

## Constructors

### NumberRangeSet(NumberRange range)

Creates a new set from a single range.

#### Declaration

```c#
public NumberRangeSet(NumberRange range)
```


### NumberRangeSet(NumberRangeSet other)

Copies a range set.

#### Declaration

```c#
public NumberRangeSet(NumberRangeSet other)
```


### NumberRangeSet(IEnumerable\<NumberRange\> other)

Creates a new set from a collection of ranges.

#### Declaration

```c#
public NumberRangeSet(IEnumerable<NumberRange> other)
```

| Parameter | Type | Description |
|---|---|---|
| other | IEnumerable\<NumberRange\> |  |


## Methods

### Ceiling(decimal ceiling)

Applies a ceiling (upper bound).

#### Declaration

```c#
public NumberRangeSet Ceiling(decimal ceiling)
```


#### Returns



### Floor(decimal floor)

Applies a floor (lower bound).

#### Declaration

```c#
public NumberRangeSet Floor(decimal floor)
```

| Parameter | Type | Description |
|---|---|---|
| floor | decimal |  |


#### Returns



### GetComplement()

Gets the complement, or inversion, of the set.

#### Declaration

```c#
public NumberRangeSet GetComplement()
```


#### Returns



### Intersect(NumberRangeSet left, NumberRangeSet right)

Calculates the intersection of two sets.

#### Declaration

```c#
public static NumberRangeSet Intersect(NumberRangeSet left, NumberRangeSet right)
```


#### Returns

The resulting set of ranges that exist in both parameters.

### Subtract(NumberRange range)

Calculates the set of one set omitting another.

#### Declaration

```c#
public NumberRangeSet Subtract(NumberRange range)
```

| Parameter | Type | Description |
|---|---|---|
| range | NumberRange | The operating set. |


#### Returns

The resulting set of ranges that exist in this set but not the operating set.

### Subtract(NumberRangeSet left, NumberRangeSet right)

Calculates the set of one set omitting another.

#### Declaration

```c#
public static NumberRangeSet Subtract(NumberRangeSet left, NumberRangeSet right)
```

| Parameter | Type | Description |
|---|---|---|
| left | NumberRangeSet | The source set. |
| right | NumberRangeSet | The operating set. |


#### Returns

The resulting set of ranges that exist in the source set but not the operating set.

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

### Union(NumberRange range)

Calculates the union of two sets.

#### Declaration

```c#
public NumberRangeSet Union(NumberRange range)
```


#### Returns

The resulting set of ranges that exist in either parameters.

### Union(NumberRangeSet left, NumberRangeSet right)

Calculates the union of two sets.

#### Declaration

```c#
public static NumberRangeSet Union(NumberRangeSet left, NumberRangeSet right)
```


#### Returns

The resulting set of ranges that exist in either parameters.

