# Logging

Logging functions for ImGui.

## Functions

---

### LogToTTY()
```lua
LogToTTY(auto_open_depth:integer|nil)
```
- **Description**: Log to TTY
- **Parameters**: `auto_open_depth:integer|nil` - Auto open depth (optional)
- **Returns**: None

---

### LogToFile()
```lua
LogToFile(auto_open_depth:integer|nil, filename:string|nil)
```
- **Description**: Log to file
- **Parameters**: 
  - `auto_open_depth:integer|nil` - Auto open depth (optional)
  - `filename:string|nil` - Filename (optional)
- **Returns**: None

---

### LogToClipboard()
```lua
LogToClipboard(auto_open_depth:integer|nil)
```
- **Description**: Log to clipboard
- **Parameters**: `auto_open_depth:integer|nil` - Auto open depth (optional)
- **Returns**: None

---

### LogFinish()
```lua
LogFinish()
```
- **Description**: Finish logging
- **Returns**: None

---

### LogButtons()
```lua
LogButtons()
```
- **Description**: Add log buttons
- **Returns**: None

---

### LogText()
```lua
LogText(fmt:string, ...:any)
```
- **Description**: Add log text
- **Parameters**: 
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: None
