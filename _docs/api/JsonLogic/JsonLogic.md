---
layout: "page"
title: "JsonLogic Class"
bookmark: "JsonLogic"
permalink: "/api/JsonLogic/:title/"
order: "10.10.009"
---
**Namespace:** Json.Logic

**Inheritance:**
`JsonLogic`
 🡒 
`object`

Provides factory methods to create operations.

## Methods

### Add(Rule a, params Rule[] more)

Creates a `+` ("add") rule.

#### Declaration

```c#
public static Rule Add(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

A `+` rule.

### All(Rule input, Rule rule)

Creates an `all` rule.

#### Declaration

```c#
public static Rule All(Rule input, Rule rule)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| rule | Rule | The predicate to test by. |


#### Returns

An `all` rule.

### And(Rule a, params Rule[] more)

Creates an `and` rule.

#### Declaration

```c#
public static Rule And(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

An `and` rule.

### BetweenExclusive(Rule a, Rule b, Rule c)

Creates a three-argument `&lt;` ("exclusive between") rule.

#### Declaration

```c#
public static Rule BetweenExclusive(Rule a, Rule b, Rule c)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The lower limit rule. |
| b | Rule | The rule. |
| c | Rule | The upper limit rule. |


#### Returns

A `&lt;` rule.

### BetweenInclusive(Rule a, Rule b, Rule c)

Creates a three-argument `&lt;=` ("inclusive between") rule.

#### Declaration

```c#
public static Rule BetweenInclusive(Rule a, Rule b, Rule c)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The lower limit rule. |
| b | Rule | The second rule. |
| c | Rule | The upper limit rule. |


#### Returns

A `&lt;=` rule.

### BoolCast(Rule value)

Creates a `!!` ("boolean cast") rule.

#### Declaration

```c#
public static Rule BoolCast(Rule value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Rule | The rule to negate. |


#### Returns

A `!!` rule.

### Cat(Rule a, params Rule[] more)

Creates a `cat` ("concatenation") rule.

#### Declaration

```c#
public static Rule Cat(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

A `cat` rule.

### Divide(Rule a, Rule b)

Creates a `/` ("divide") rule.

#### Declaration

```c#
public static Rule Divide(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| b | Rule |  |


#### Returns

A `/` rule.

### Filter(Rule input, Rule rule)

Creates a `filter` rule.

#### Declaration

```c#
public static Rule Filter(Rule input, Rule rule)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| rule | Rule | The predicate to test by. |


#### Returns

A `filter` rule.

### If(params Rule[] components)

Creates an `if` rule.

#### Declaration

```c#
public static Rule If(params Rule[] components)
```

| Parameter | Type | Description |
|---|---|---|
| components | params Rule[] | The rule chain to process. |


#### Returns

An `if` rule.

### In(Rule test, Rule input)

Creates a `none` rule.

#### Declaration

```c#
public static Rule In(Rule test, Rule input)
```

| Parameter | Type | Description |
|---|---|---|
| test | Rule | The predicate to test by. |
| input | Rule | The input rule. |


#### Returns

A `none` rule.

### LessThan(Rule a, Rule b)

Creates a `&lt;` ("less than") rule.

#### Declaration

```c#
public static Rule LessThan(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The lower limit rule. |
| b | Rule | The upper limit rule. |


#### Returns

A `&lt;` rule.

### LessThanOrEqual(Rule a, Rule b)

Creates a `&lt;=` ("less than or equal") rule.

#### Declaration

```c#
public static Rule LessThanOrEqual(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The lower limit rule. |
| b | Rule | The upper limit rule. |


#### Returns

A `&lt;=` rule.

### Literal(JsonNode value)

Creates a rule that stands in for a literal JSON value.

#### Declaration

```c#
public static Rule Literal(JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonNode | The JSON value. |


#### Returns

A literal rule.

### Log(Rule log)

Functions as a no-op.  Processes the rule, then logs and returns the output.

#### Declaration

```c#
public static Rule Log(Rule log)
```

| Parameter | Type | Description |
|---|---|---|
| log | Rule | The rule to log. |


#### Returns

The result of the rule.

### LooseEquals(Rule a, Rule b)

Creates a `==` ("loose equal") rule.

#### Declaration

```c#
public static Rule LooseEquals(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| b | Rule | The second rule. |


#### Returns

A `==` rule.

### LooseNotEquals(Rule a, Rule b)

Creates a `!=` ("loose not equal") rule.

#### Declaration

```c#
public static Rule LooseNotEquals(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| b | Rule | The second rule. |


#### Returns

A `!=` rule.

### Map(Rule input, Rule rule)

Creates a `map` rule.

#### Declaration

```c#
public static Rule Map(Rule input, Rule rule)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| rule | Rule | The predicate to test by. |


#### Returns

A `map` rule.

### Max(Rule a, params Rule[] more)

Creates a `max` rule.

#### Declaration

```c#
public static Rule Max(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

A `max` rule.

### Merge(params Rule[] items)

Creates a `merge` rule.

#### Declaration

```c#
public static Rule Merge(params Rule[] items)
```

| Parameter | Type | Description |
|---|---|---|
| items | params Rule[] | The items to merge. |


#### Returns

A `merge` rule.

### Min(Rule a, params Rule[] more)

Creates a `min` rule.

#### Declaration

```c#
public static Rule Min(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

A `min` rule.

### Missing(params Rule[] components)

Creates a `missing` rule.

#### Declaration

```c#
public static Rule Missing(params Rule[] components)
```

| Parameter | Type | Description |
|---|---|---|
| components | params Rule[] | The missing components. |


#### Returns

A `missing` rule.

### MissingSome(Rule requiredCount, Rule components)

Creates a `missing-some` rule.

#### Declaration

```c#
public static Rule MissingSome(Rule requiredCount, Rule components)
```

| Parameter | Type | Description |
|---|---|---|
| requiredCount | Rule | The required count. |
| components | Rule | The missing components. |


#### Returns

A `missing_some` rule.

### Modulus(Rule a, Rule b)

Creates a `%` ("modulus") rule.

#### Declaration

```c#
public static Rule Modulus(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| b | Rule |  |


#### Returns

A `%` rule.

### MoreThan(Rule a, Rule b)

Creates a `&gt;` ("more than") rule.

#### Declaration

```c#
public static Rule MoreThan(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The upper limit rule. |
| b | Rule | The lower limit rule. |


#### Returns

A `&gt;` rule.

### MoreThanOrEqual(Rule a, Rule b)

Creates a `&gt;=` ("more than or equal") rule.

#### Declaration

```c#
public static Rule MoreThanOrEqual(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The upper limit rule. |
| b | Rule | The lower limit rule. |


#### Returns

A `&gt;` rule.

### Multiply(Rule a, params Rule[] more)

Creates a `*` ("multiply") rule.

#### Declaration

```c#
public static Rule Multiply(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

A `*` rule.

### None(Rule input, Rule rule)

Creates a `none` rule.

#### Declaration

```c#
public static Rule None(Rule input, Rule rule)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| rule | Rule | The predicate to test by. |


#### Returns

A `none` rule.

### Not(Rule value)

Creates a `!` ("not") rule.

#### Declaration

```c#
public static Rule Not(Rule value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Rule | The rule to negate. |


#### Returns

A `!` rule.

### Or(Rule a, params Rule[] more)

Creates an `or` rule.

#### Declaration

```c#
public static Rule Or(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

An `or` rule.

### Reduce(Rule input, Rule rule, Rule initial)

Creates a `reduce` rule.

#### Declaration

```c#
public static Rule Reduce(Rule input, Rule rule, Rule initial)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| rule | Rule | The predicate to test by. |
| initial | Rule | The initial rule. |


#### Returns

A `reduce` rule.

### Some(Rule input, Rule rule)

Creates a `some` ("any") rule.

#### Declaration

```c#
public static Rule Some(Rule input, Rule rule)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| rule | Rule | The predicate to test by. |


#### Returns

A `some` rule.

### StrictEquals(Rule a, Rule b)

Creates a `===` ("strict equal") rule.

#### Declaration

```c#
public static Rule StrictEquals(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| b | Rule | The second rule. |


#### Returns

A `===` rule.

### StrictNotEquals(Rule a, Rule b)

Creates a `!==` ("strict not equal") rule.

#### Declaration

```c#
public static Rule StrictNotEquals(Rule a, Rule b)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| b | Rule | The second rule. |


#### Returns

A `!==` rule.

### Substr(Rule input, Rule start)

Creates a `substr` ("concatenation") rule.

#### Declaration

```c#
public static Rule Substr(Rule input, Rule start)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| start | Rule | The start rule. |


#### Returns

A `substr` rule.

### Substr(Rule input, Rule start, Rule count)

Creates a `substr` ("concatenation") rule.

#### Declaration

```c#
public static Rule Substr(Rule input, Rule start, Rule count)
```

| Parameter | Type | Description |
|---|---|---|
| input | Rule | The input rule. |
| start | Rule | The start rule. |
| count | Rule | The count rule. |


#### Returns

A `substr` rule.

### Subtract(Rule a, params Rule[] more)

Creates a `-` ("subtract") rule.

#### Declaration

```c#
public static Rule Subtract(Rule a, params Rule[] more)
```

| Parameter | Type | Description |
|---|---|---|
| a | Rule | The first rule. |
| more | params Rule[] | Subsequent rules. |


#### Returns

A `-` rule.

### Variable(string path)

Creates a `var` rule that accesses data.

#### Declaration

```c#
public static Rule Variable(string path)
```

| Parameter | Type | Description |
|---|---|---|
| path | string |  |


#### Returns

A variable rule.

### Variable(string path, Rule defaultValue)

Creates a `var` rule that accesses data.

#### Declaration

```c#
public static Rule Variable(string path, Rule defaultValue)
```

| Parameter | Type | Description |
|---|---|---|
| path | string | The dot-delimited path. |
| defaultValue | Rule | A default value to use if the path is not found. |


#### Returns

A variable rule.

