# Console Functions

## Overview

Console functions provide logging capabilities for debugging and monitoring script execution in Growlauncher.

## Functions

---

### log()
`log(text)`
- **Description**: Logs text to console
- **Parameters**:
    - `text: string|number|boolean`
- **Returns**:
    - None
- **Example**:
    ```lua
    log("Hello")
    ```

---

### logToConsole()
`logToConsole(text)`
- **Description**: Logs text to console
- **Parameters**:
    - `text: string|number|boolean`
- **Returns**:
    - None
- **Example**:
    ```lua
    logToConsole("Hello")
    ```

---

### dumpTable()
`dumpTable(o: any) -> string`
- **Description**: Dump table into string
- **Parameters**:
    - `o: any`
- **Returns**:
    - `string`
- **Example**:
    ```lua
    tbl = {1,2,3}
    log(dumpTable(tbl))
    ```

