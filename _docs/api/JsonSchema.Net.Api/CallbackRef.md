---
layout: "page"
title: "CallbackRef Class"
bookmark: "CallbackRef"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.002"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`CallbackRef`
 🡒 
`Callback`
 🡒 
`Dictionary<CallbackKeyExpression, PathItem>`
 🡒 
`object`

**Implemented interfaces:**

- IDictionary\<CallbackKeyExpression, PathItem\>
- ICollection\<KeyValuePair\<CallbackKeyExpression, PathItem\>\>
- IEnumerable\<KeyValuePair\<CallbackKeyExpression, PathItem\>\>
- IEnumerable
- IDictionary
- ICollection
- IReadOnlyDictionary\<CallbackKeyExpression, PathItem\>
- IReadOnlyCollection\<KeyValuePair\<CallbackKeyExpression, PathItem\>\>
- ISerializable
- IDeserializationCallback
- IRefTargetContainer
- IComponentRef

Models a `$ref` to a callback.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Capacity** | int |  |
| **Comparer** | IEqualityComparer\<CallbackKeyExpression\> |  |
| **Count** | int |  |
| **Description** | string | Gets or sets the description. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **IsResolved** | bool | Gets whether the reference has been resolved. |
| **Item** | PathItem |  |
| **Keys** | KeyCollection |  |
| **Ref** | Uri | The URI for the reference. |
| **Summary** | string | Gets or sets the summary. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Values** | ValueCollection |  |

## Constructors

### CallbackRef(Uri reference)



#### Declaration

```c#
public CallbackRef(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference URI |


### CallbackRef(string reference)



#### Declaration

```c#
public CallbackRef(string reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | string | The reference URI |


