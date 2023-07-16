---
layout: "page"
title: "LogExtensions Class"
bookmark: "LogExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.057"
---
**Namespace:** Json.Schema

**Inheritance:**
`LogExtensions`
 🡒 
`object`

Provides common log messages.

## Methods

### EnterKeyword(this EvaluationContext context, string keyword)

Adds a message to indicate a keyword has begun processing.  Increments indention.

#### Declaration

```c#
public static void EnterKeyword(this EvaluationContext context, string keyword)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context. |
| keyword | string | The keyword name |


### ExitKeyword(this EvaluationContext context, string keyword)

Adds a message to indicate a keyword has finished processing.  Decrements indention.

#### Declaration

```c#
public static void ExitKeyword(this EvaluationContext context, string keyword)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context. |
| keyword | string | The keyword name |


### ExitKeyword(this EvaluationContext context, string keyword, bool valid)

Adds a message to indicate a keyword has finished processing.  Decrements indention.

#### Declaration

```c#
public static void ExitKeyword(this EvaluationContext context, string keyword, bool valid)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context. |
| keyword | string | The keyword name |
| valid | bool | Whether the validation was successful |


### GetValidityString(this bool isValid)

Gets the valid or invalid strings.

#### Declaration

```c#
public static string GetValidityString(this bool isValid)
```

| Parameter | Type | Description |
|---|---|---|
| isValid | bool | The validity. |


#### Returns

"valid" for `true`; "invalid" for `false`.

### Log(this EvaluationContext context, Func\<string\> message)

Logs a message.

#### Declaration

```c#
public static void Log(this EvaluationContext context, Func<string> message)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context. |
| message | Func\<string\> | The message. |


### NotApplicable(this EvaluationContext context, Func\<string\> reason)

Adds a message to indicate that a keyword doesn't apply and why.  Decrements indention.

#### Declaration

```c#
public static void NotApplicable(this EvaluationContext context, Func<string> reason)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context. |
| reason | Func\<string\> | The reason |


### WrongValueKind(this EvaluationContext context, SchemaValueType kind)

Adds a message to indicate that a keyword doesn't apply and why.  Decrements indention.

#### Declaration

```c#
public static void WrongValueKind(this EvaluationContext context, SchemaValueType kind)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | The evaluation context. |
| kind | SchemaValueType | The value kind |


