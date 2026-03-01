# Math & Utility

Mathematical functions and utility operations.

## Functions

---

### split()
`split(str:string, regex:string) -> string[]`
- **Description**: Split string by regex
- **Parameters**: 
    - `str:string` - String to split
    - `regex:string` - Regex to split by
- **Returns**: 
    - `string[]` - Array of strings
- **Example**:
    ```lua
    str = "a,b,c"
    for _, letter in pairs(str:split(",")) do 
        log(letter) 
    end
    ```

---

### ImVec2()
`ImVec2(x:number, y:number) -> Vec2`
- **Description**: Sets width and height or value
- **Parameters**: 
    - `x` (number) - X coordinate
    - `y` (number) - Y coordinate
- **Returns**: 
    - [`Vec2`](/structs/vectors#vector2) - 2D vector
- **Example**:
    ```lua
    ImVec2(1,0.3)
    ```

---

### ImVec4()
`ImVec4(x:number, y:number, z:number, w:number) -> Vec4`
- **Description**: Sets color value
- **Parameters**: 
    - `x` (number) - Red value
    - `y` (number) - Green value
    - `z` (number) - Blue value
    - `w` (number) - Alpha value
- **Returns**: 
    - [`Vec4`](/structs/vectors#vector4) - 4D vector
- **Example**:
    ```lua
    ImVec4(0,0.55,0.56,1)
    ```

---

### getTime()
`getTime() -> number`
- **Description**: Current time in ms
- **Returns**: 
    - `number` - Current time in milliseconds
- **Example**: 
    ```lua
    log(getTime())
    ```

---

### string:split()
`string:split(sep:string) -> string[]`
- **Description**: Split string by sep
- **Parameters**: 
    - `sep:string` - Separator
- **Returns**: 
    - `string[]` - Array of strings
- **Example**: 
    ```lua
    str = "1,2"
    for _, part in pairs(str:split(",")) do 
        log(part) 
    end
    ```

---

### writeToLocal()
`writeToLocal(name:string, s:string)`
- **Description**: Write local file/data
- **Parameters**: 
    - `name:string` - File name
    - `s:string` - Content to write
- **Returns**: 
    - None
- **Example**: 
    ```lua
    writeToLocal("save.txt","ok")
    ```

---

### getAppLibrary()
`getAppLibrary() -> string`
- **Description**: Get app library path
- **Returns**: 
    - `string` - Library path
- **Example**: 
    ```lua
    log(getAppLibrary())
    ```

---

### executeFromAssets()
`executeFromAssets(path:string, name:string)`
- **Description**: Deprecated execute asset
- **Parameters**: 
    - `path:string` - Asset path
    - `name:string` - Asset name
- **Returns**: 
    - None

---

### error()
`error(text:string)`
- **Description**: Shows an error warning
- **Parameters**: 
    - `text:string` - Error text
- **Returns**: 
    - None
- **Example**: 
    ```lua
    error("error text")
    ```

---

### fetch()
`fetch(url:string) -> response, error`
- **Description**: Get text data from url
- **Parameters**: 
    - `url:string` - URL to fetch
- **Returns**: 
    - `response` - Response data, `error` - Error message
- **Example**: 
    ```lua
    fetch("https://raw.githubusercontent.com/PowerKuy/Growlauncher-Documentation/refs/heads/main/sample-scripts/example-for-fetch.lua")
    ```

---

### getDiscordID()
`getDiscordID()`
- **Description**: Get user discord id
- **Returns**: 
    - None
- **Example**: 
    ```lua
    log(getDiscordID())
    ```
