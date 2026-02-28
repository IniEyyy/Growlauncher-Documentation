# Console Functions

## Overview

Console functions provide logging capabilities for debugging and monitoring script execution in Growlauncher.

## Functions

---

### log()
```lua
log(text)
```
- **Description**: Logs text to console
- **Parameters**: `text:string|number|boolean`
- **Returns**: None
- **Example**: `log("Hello")`

---

### LogToConsole()
```lua
LogToConsole(text)
```
- **Description**: Logs text to console
- **Parameters**: `text:string|number|boolean`
- **Returns**: None
- **Example**: `logToConsole("Hello")`

---

### dumpTable()
```lua
dumpTable(o: any) -> string
```
- **Description**: Dump table into string
- **Parameters**: `o: any`
- **Returns**: `string`
- **Example**: `tbl = {1,2,3}; log(dumpTable(tbl))`
