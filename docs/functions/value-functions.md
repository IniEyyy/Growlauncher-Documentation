# Value Functions

## Overview

Value functions provide access to Growlauncher's internal value system for managing settings, configurations, and module values.

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
- **Example**:
    ```lua
    bindValue(1, "autocrime_delay", 500)
    ```

---

### editValue()
`editValue(name:string, value:string|boolean|number)`
- **Description**: Edit or toggle value
- **Parameters**: 
    - `name: string` - Value name
    - `value: string|boolean|number` - New value
- **Returns**: 
    - None
- **Example**:
    ```lua
    editValue("cheat_config_fastbuy_count", 1)
    ```

---

### editToggle()
`editToggle(name:string, value:boolean)`
- **Description**: Edit or toggle value
- **Parameters**: 
    - `name: string` - Value name
    - `value: boolean` - Toggle value
- **Returns**: 
    - None
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
