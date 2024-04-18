---
layout: "page"
title: "RuleRegistry Class"
bookmark: "RuleRegistry"
permalink: "/api/JsonLogic/:title/"
order: "10.11.039"
---
**Namespace:** Json.Logic

**Inheritance:**
`RuleRegistry`
 🡒 
`object`

Catalogs all of the known rules.

## Methods

### AddRule()

Registers a new rule type.

#### Declaration

```c#
public static void AddRule()
```


#### Remarks

Rules must contain a parameterless constructor.
            
Decorate your rule type with one or more **Json.Logic.OperatorAttribute**s to
define its identifier.
            
Registering a rule with an identifier that already exists will overwrite the
existing registration.

### AddRule(JsonSerializerContext typeContext)

Registers a new rule type.

#### Declaration

```c#
public static void AddRule(JsonSerializerContext typeContext)
```


#### Remarks

Rules must contain a parameterless constructor.
            
Decorate your rule type with one or more **Json.Logic.OperatorAttribute**s to
define its identifier.
            
Registering a rule with an identifier that already exists will overwrite the
existing registration.

### AddRule(string op, IRule rule)

Adds a custom **Json.Logic.IRule** implementation.

#### Declaration

```c#
public static void AddRule(string op, IRule rule)
```

| Parameter | Type | Description |
|---|---|---|
| op | string | The operator that the rule handles. |
| rule | IRule | The rule implementation. |


### GetHandler(string op)

Gets an **Json.Logic.IRule** handler for model-less rule evaluation.

#### Declaration

```c#
public static IRule GetHandler(string op)
```

| Parameter | Type | Description |
|---|---|---|
| op | string | The operator that the rule handles. |


#### Returns

The handler implementation.

### GetRule(string identifier)

Gets a **Json.Logic.Rule** implementation for a given identifier string.

#### Declaration

```c#
public static Type GetRule(string identifier)
```

| Parameter | Type | Description |
|---|---|---|
| identifier | string | The identifier. |


#### Returns

The **System.Type** of the rule.

