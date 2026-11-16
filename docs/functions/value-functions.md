# Value Functions

## Overview

Value functions provide access to Growlauncher's internal value system for managing settings, configurations, and module values.

Native globals in Growlauncher 7.0.38: `getValue`, `setValue`, `editValue` (also `editToggle`), `setMinimum`, and `addIntoModule`. `bindValue` and `setOnValue` are not registered in the native binding table. Their implementation is not verifiable statically because the Lua assets ship encrypted.

## Functions

---

### getValue()
`getValue(type:number, name:string) -> boolean|number|string`
- **Description**: Get value by type and name
- **Parameters**: 
    - `type: number` - Value type (0=boolean, 1=number, 2=string)
    - `name: string` - Value name
- **Returns**: 
    - `boolean|number|string` - Value data
- **Example**:
    ```lua
    getValue(0, "ModFly")
    ```

---

### setValue()
`setValue(name:string, value:any)`
- **Description**: Set value (no UI update)
- **Parameters**: 
    - `name: string` - Value name
    - `value: any` - Value to set
- **Returns**: 
    - None
- **Example**:
    ```lua
    setValue("cheat_config_fastbuy_count", 1)
    ```

---

### bindValue()
`bindValue(type:number, alias:string, default:string|number|boolean) -> boolean|number|string`
- **Description**: Bind alias with default value
- **Parameters**: 
    - `type: number` - Value type (0=boolean, 1=number, 2=string)
    - `alias: string` - Value alias
    - `default: string|number|boolean` - Default value
- **Returns**: 
    - `boolean|number|string` - Bound value
- **Status**: Not registered in Growlauncher 7.0.38; Lua layer only and not statically verified.
- **Example**:
    ```lua
    bindValue(1, "autocrime_delay", 500)
    ```

---

### editValue()
`editValue(name:string, value:string|boolean|number)`
- **Description**: Write a value into the launcher value store. The UI item registered under the same alias is updated too.
- **Parameters**: 
    - `name: string` - Value name, which is the `alias` of the module item
    - `value: string|boolean|number` - New value; numbers are stored as signed 32-bit integers, booleans are stored as the strings `true` / `false`
- **Returns**: 
    - None
- **Note**:
    - `editToggle` and `editValue` are the same native function. Any module toggle whose `alias` matches `name` flips when you pass `true` or `false`.
- **Example**:
    ```lua
    editValue("cheat_config_fastbuy_count", 1)
    ```

---

### editToggle()
`editToggle(name:string, value:boolean)`
- **Description**: Edit or toggle value. For example, enable a module toggle without clicking it.
- **Parameters**: 
    - `name: string` - Value name, which is the `alias` of the module item
    - `value: boolean` - Toggle value
- **Returns**: 
    - None
- **Note**:
    - Same native implementation as `editValue`. The alias must match the `alias` field in the module JSON added with `addIntoModule`.
- **Example**:
    ```lua
    editToggle("ModFly", true)
    ```

---

### setMinimum()
`setMinimum(version:string)`
- **Description**: Set minimum version requirement
- **Parameters**: 
    - `version: string` - Minimum version
- **Returns**: 
    - None
- **Example**:
    ```lua
    setMinimum("6.0.0")
    ```

---

### setOnValue()
`setOnValue(name:string, func:function)`
- **Description**: Callback when value changes
- **Parameters**: 
    - `name: string` - Value name
    - `func: function` - Callback function
- **Returns**: 
    - None
- **Status**: Not registered in Growlauncher 7.0.38. No string for this name exists in the native library or DEX, so it is unverified and may be absent.
- **Example**:
    ```lua
    setOnValue("autocrime_delay", onChange)
    ```

---

### addIntoModule()
`addIntoModule(json:string, category_name?:string)`
- **Description**: Add JSON into module
- **Parameters**: 
    - `json: string` - JSON data
    - `category_name?: string` - Category name
- **Returns**: 
    - None
- **Example**:
    ```lua
    addIntoModule('{"key":1}', "Test")
    ```
