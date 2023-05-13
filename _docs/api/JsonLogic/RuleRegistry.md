---
layout: "page"
title: "RuleRegistry Class"
bookmark: "RuleRegistry"
permalink: "/api/JsonLogic/:title/"
order: "9.10.08"
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

