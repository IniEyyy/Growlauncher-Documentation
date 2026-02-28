# Math & Utility

Mathematical functions and utility operations.

## Functions

---

### split()
```lua
split(str:string, regex:string) -> string[]
```
- **Description**: Split string by regex
- **Parameters**: `str:string`, `regex:string`
- **Returns**: `string[]`
- **Example**: `str = "a,b,c"; for _,a in pairs(str:split(",")) do log(a) end`

---

### ImVec2()
```lua
ImVec2(x:number, y:number) -> Vec2
```
- **Description**: Sets width and height or value
- **Parameters**: `x` (number) - X coordinate, `y` (number) - Y coordinate
- **Returns**: [`Vec2`](/structs/vectors#vector2) - 2D vector
- **Example**: `ImVec2(1,0.3)`

---

### ImVec4()
```lua
ImVec4(x:number, y:number, z:number, w:number) -> Vec4
```
- **Description**: Sets the color value
- **Parameters**: `x` (number) - Red value, `y` (number) - Green value, `z` (number) - Blue value, `w` (number) - Alpha value
- **Returns**: [`Vec4`](/structs/vectors#vector4) - 4D vector
- **Example**: `ImVec4(0,0.55,0.56,1)`

---

### getTime()
```lua
getTime() -> number
```
- **Description**: Current time in ms
- **Returns**: `number` - Current time in milliseconds
- **Example**: `getTime()`

---

### string:split()
```lua
string:split(sep:string) -> string[]
```
- **Description**: Split string by sep
- **Parameters**: `sep:string` - Separator
- **Returns**: `string[]` - Array of strings
- **Example**: `str = "1,2"; for _,a in pairs(str:split(",")) do log(a) end`

---

### writeToLocal()
```lua
writeToLocal(name:string, s:string)
```
- **Description**: Write local file/data
- **Parameters**: `name:string` - File name, `s:string` - Content to write
- **Returns**: None
- **Example**: `writeToLocal("save.txt","ok")`

---

### getAppLibrary()
```lua
getAppLibrary() -> string
```
- **Description**: Get app library path
- **Returns**: `string` - Library path
- **Example**: `log(getAppLibrary())`

---

### executeFromAssets()
```lua
executeFromAssets(path:string, name:string)
```
- **Description**: Deprecated execute asset
- **Parameters**: `path:string` - Asset path, `name:string` - Asset name
- **Returns**: None

---

### error()
```lua
error(text:string)
```
- **Description**: Shows an error warning
- **Parameters**: `text:string` - Error text
- **Returns**: None
- **Example**: `error("error text")`

---

### fetch()
```lua
fetch(url:string) -> response, error
```
- **Description**: Get text data from url
- **Parameters**: `url:string` - URL to fetch
- **Returns**: `response` - Response data, `error` - Error message
- **Example**: `fetch("https://raw.githubusercontent.com/PowerKuy/Growlauncher-Documentation/refs/heads/main/sample-scripts/example-for-fetch.lua")`

---

### getDiscordID()
```lua
getDiscordID()
```
- **Description**: Get user discord id
- **Returns**: None
- **Example**: `log(getDiscordID())`
