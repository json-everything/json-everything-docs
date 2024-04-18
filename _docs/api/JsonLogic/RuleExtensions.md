---
layout: "page"
title: "RuleExtensions Class"
bookmark: "RuleExtensions"
permalink: "/api/JsonLogic/:title/"
order: "10.11.038"
---
**Namespace:** Json.Logic

**Inheritance:**
`RuleExtensions`
 🡒 
`object`

Calls **Json.Logic.Rule.Apply(System.Text.Json.Nodes.JsonNode,System.Text.Json.Nodes.JsonNode)** with no data.

## Methods

### Apply(this Rule rule)

Calls **Json.Logic.Rule.Apply(System.Text.Json.Nodes.JsonNode,System.Text.Json.Nodes.JsonNode)** with no data.

#### Declaration

```c#
public static JsonNode Apply(this Rule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | Rule | The rule. |


#### Returns

The result.

### GetCondition(this IfRule rule)

Gets the rule that returns the condition.

#### Declaration

```c#
public static Rule GetCondition(this IfRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | IfRule | The rule |


#### Returns

A rule.

### GetCount(this SubstrRule rule)

Gets the rule that returns the character count.

#### Declaration

```c#
public static Rule GetCount(this SubstrRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | SubstrRule | The rule |


#### Returns

A rule.

### GetDefault(this VariableRule rule)

Gets the rule that returns the default value.

#### Declaration

```c#
public static Rule GetDefault(this VariableRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | VariableRule | The rule |


#### Returns

A rule.

### GetDividend(this DivideRule rule)

Gets the rule that returns the dividend.

#### Declaration

```c#
public static Rule GetDividend(this DivideRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | DivideRule | The rule |


#### Returns

A rule.

### GetDividend(this ModRule rule)

Gets the rule that returns the dividend.

#### Declaration

```c#
public static Rule GetDividend(this ModRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | ModRule | The rule |


#### Returns

A rule.

### GetDivisor(this DivideRule rule)

Gets the rule that returns the divisor.

#### Declaration

```c#
public static Rule GetDivisor(this DivideRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | DivideRule | The rule |


#### Returns

A rule.

### GetDivisor(this ModRule rule)

Gets the rule that returns the divisor.

#### Declaration

```c#
public static Rule GetDivisor(this ModRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | ModRule | The rule |


#### Returns

A rule.

### GetElse(this IfRule rule)

Gets the rule that returns the else requirement.

#### Declaration

```c#
public static Rule GetElse(this IfRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | IfRule | The rule |


#### Returns

A rule.

### GetInitial(this ReduceRule rule)

Gets the rule that returns the initial value.

#### Declaration

```c#
public static Rule GetInitial(this ReduceRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | ReduceRule | The rule |


#### Returns

A rule.

### GetInput(this AllRule rule)

Gets the rule that returns the input.

#### Declaration

```c#
public static Rule GetInput(this AllRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | AllRule | The rule |


#### Returns

A rule.

### GetInput(this FilterRule rule)

Gets the rule that returns the input.

#### Declaration

```c#
public static Rule GetInput(this FilterRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | FilterRule | The rule |


#### Returns

A rule.

### GetInput(this MapRule rule)

Gets the rule that returns the input.

#### Declaration

```c#
public static Rule GetInput(this MapRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MapRule | The rule |


#### Returns

A rule.

### GetInput(this NoneRule rule)

Gets the rule that returns the input.

#### Declaration

```c#
public static Rule GetInput(this NoneRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | NoneRule | The rule |


#### Returns

A rule.

### GetInput(this ReduceRule rule)

Gets the rule that returns the input.

#### Declaration

```c#
public static Rule GetInput(this ReduceRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | ReduceRule | The rule |


#### Returns

A rule.

### GetInput(this SomeRule rule)

Gets the rule that returns the input.

#### Declaration

```c#
public static Rule GetInput(this SomeRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | SomeRule | The rule |


#### Returns

A rule.

### GetInput(this SubstrRule rule)

Gets the rule that returns the input.

#### Declaration

```c#
public static Rule GetInput(this SubstrRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | SubstrRule | The rule |


#### Returns

A rule.

### GetItems(this AddRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this AddRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | AddRule | The rule |


#### Returns

The collection of rules.

### GetItems(this AndRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this AndRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | AndRule | The rule |


#### Returns

The collection of items.

### GetItems(this CatRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this CatRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | CatRule | The rule |


#### Returns

The collection of rules.

### GetItems(this MaxRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this MaxRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MaxRule | The rule |


#### Returns

The collection of rules.

### GetItems(this MergeRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this MergeRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MergeRule | The rule |


#### Returns

The collection of rules.

### GetItems(this MinRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this MinRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MinRule | The rule |


#### Returns

The collection of rules.

### GetItems(this MissingRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this MissingRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MissingRule | The rule |


#### Returns

The collection of rules.

### GetItems(this MissingSomeRule rule)

Gets the rule that returns the items collection.

#### Declaration

```c#
public static Rule GetItems(this MissingSomeRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MissingSomeRule | The rule |


#### Returns

A rule.

### GetItems(this MultiplyRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this MultiplyRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MultiplyRule | The rule |


#### Returns

The collection of rules.

### GetItems(this OrRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this OrRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | OrRule | The rule |


#### Returns

The collection of rules.

### GetItems(this RuleCollection rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this RuleCollection rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | RuleCollection | The rule |


#### Returns

The collection of rules.

### GetItems(this SubtractRule rule)

Gets the collection of items within the rule.

#### Declaration

```c#
public static IEnumerable<Rule> GetItems(this SubtractRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | SubtractRule | The rule |


#### Returns

The collection of rules.

### GetLeft(this LessThanEqualRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this LessThanEqualRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LessThanEqualRule | The rule |


#### Returns

A rule.

### GetLeft(this LessThanRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this LessThanRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LessThanRule | The rule |


#### Returns

A rule.

### GetLeft(this LooseEqualsRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this LooseEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LooseEqualsRule | The rule |


#### Returns

A rule.

### GetLeft(this LooseNotEqualsRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this LooseNotEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LooseNotEqualsRule | The rule |


#### Returns

A rule.

### GetLeft(this MoreThanEqualRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this MoreThanEqualRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MoreThanEqualRule | The rule |


#### Returns

A rule.

### GetLeft(this MoreThanRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this MoreThanRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MoreThanRule | The rule |


#### Returns

A rule.

### GetLeft(this StrictEqualsRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this StrictEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | StrictEqualsRule | The rule |


#### Returns

A rule.

### GetLeft(this StrictNotEqualsRule rule)

Gets the rule that returns the left operand.

#### Declaration

```c#
public static Rule GetLeft(this StrictNotEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | StrictNotEqualsRule | The rule |


#### Returns

A rule.

### GetMiddle(this LessThanEqualRule rule)

Gets the rule that returns the middle operand, if there is one.

#### Declaration

```c#
public static Rule GetMiddle(this LessThanEqualRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LessThanEqualRule | The rule |


#### Returns

A rule.

### GetMiddle(this LessThanRule rule)

Gets the rule that returns the middle operand, if there is one.

#### Declaration

```c#
public static Rule GetMiddle(this LessThanRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LessThanRule | The rule |


#### Returns

A rule.

### GetPath(this VariableRule rule)

Gets the rule that returns the path.

#### Declaration

```c#
public static Rule GetPath(this VariableRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | VariableRule | The rule |


#### Returns

A rule.

### GetRequiredCount(this MissingSomeRule rule)

Gets the rule that returns the required count.

#### Declaration

```c#
public static Rule GetRequiredCount(this MissingSomeRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MissingSomeRule | The rule |


#### Returns

A rule.

### GetRight(this LessThanEqualRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this LessThanEqualRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LessThanEqualRule | The rule |


#### Returns

A rule.

### GetRight(this LessThanRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this LessThanRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LessThanRule | The rule |


#### Returns

A rule.

### GetRight(this LooseEqualsRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this LooseEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LooseEqualsRule | The rule |


#### Returns

A rule.

### GetRight(this LooseNotEqualsRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this LooseNotEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LooseNotEqualsRule | The rule |


#### Returns

A rule.

### GetRight(this MoreThanEqualRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this MoreThanEqualRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MoreThanEqualRule | The rule |


#### Returns

A rule.

### GetRight(this MoreThanRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this MoreThanRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MoreThanRule | The rule |


#### Returns

A rule.

### GetRight(this StrictEqualsRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this StrictEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | StrictEqualsRule | The rule |


#### Returns

A rule.

### GetRight(this StrictNotEqualsRule rule)

Gets the rule that returns the right operand.

#### Declaration

```c#
public static Rule GetRight(this StrictNotEqualsRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | StrictNotEqualsRule | The rule |


#### Returns

A rule.

### GetRule(this AllRule rule)

Gets the rule that the items in the input should follow.

#### Declaration

```c#
public static Rule GetRule(this AllRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | AllRule | The rule |


#### Returns

A rule.

### GetRule(this FilterRule rule)

Gets the rule that the items in the input should follow.

#### Declaration

```c#
public static Rule GetRule(this FilterRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | FilterRule | The rule |


#### Returns

A rule.

### GetRule(this MapRule rule)

Gets the rule to process the items in the input.

#### Declaration

```c#
public static Rule GetRule(this MapRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | MapRule | The rule |


#### Returns

A rule.

### GetRule(this NoneRule rule)

Gets the rule that the items in the input should not follow.

#### Declaration

```c#
public static Rule GetRule(this NoneRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | NoneRule | The rule |


#### Returns

A rule.

### GetRule(this ReduceRule rule)

Gets the rule to process the items in the input.

#### Declaration

```c#
public static Rule GetRule(this ReduceRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | ReduceRule | The rule |


#### Returns

A rule.

### GetRule(this SomeRule rule)

Gets the rule that the items in the input should follow.

#### Declaration

```c#
public static Rule GetRule(this SomeRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | SomeRule | The rule |


#### Returns

A rule.

### GetStart(this SubstrRule rule)

Gets the rule that returns the start index.

#### Declaration

```c#
public static Rule GetStart(this SubstrRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | SubstrRule | The rule |


#### Returns

A rule.

### GetTest(this InRule rule)

Gets the rule that returns the test.

#### Declaration

```c#
public static Rule GetTest(this InRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | InRule | The rule |


#### Returns

A rule.

### GetThen(this IfRule rule)

Gets the rule that returns the then requirement.

#### Declaration

```c#
public static Rule GetThen(this IfRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | IfRule | The rule |


#### Returns

A rule.

### GetValue(this BooleanCastRule rule)

Gets the rule that returns the value.

#### Declaration

```c#
public static Rule GetValue(this BooleanCastRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | BooleanCastRule | The rule |


#### Returns

A rule.

### GetValue(this InRule rule)

Gets the rule that returns the value.

#### Declaration

```c#
public static Rule GetValue(this InRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | InRule | The rule |


#### Returns

A rule.

### GetValue(this LiteralRule rule)

Gets the rule that returns the value.

#### Declaration

```c#
public static Rule GetValue(this LiteralRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LiteralRule | The rule |


#### Returns

A rule.

### GetValue(this LogRule rule)

Gets the rule that returns the log entry.

#### Declaration

```c#
public static Rule GetValue(this LogRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | LogRule | The rule |


#### Returns

A rule.

### GetValue(this NotRule rule)

Gets the rule that returns the value.

#### Declaration

```c#
public static Rule GetValue(this NotRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| rule | NotRule | The rule |


#### Returns

A rule.

