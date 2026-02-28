# Window Utilities

Window helper functions for ImGui.

## Functions

---

### IsWindowAppearing()
```lua
IsWindowAppearing() -> boolean
```
- **Description**: Returns true if window is appearing
- **Returns**: `boolean` - Window appearing state

---

### IsWindowCollapsed()
```lua
IsWindowCollapsed() -> boolean
```
- **Description**: Returns true if window is collapsed
- **Returns**: `boolean` - Window collapsed state

---

### IsWindowFocused()
```lua
IsWindowFocused(flags:ImGuiFocusedFlags|nil) -> boolean
```
- **Description**: Returns true if window is focused
- **Parameters**: `flags:ImGuiFocusedFlags|nil` - Focus flags (optional)
- **Returns**: `boolean` - Window focused state

---

### IsWindowHovered()
```lua
IsWindowHovered(flags:ImGuiHoveredFlags|nil) -> boolean
```
- **Description**: Returns true if window is hovered
- **Parameters**: `flags:ImGuiHoveredFlags|nil` - Hover flags (optional)
- **Returns**: `boolean` - Window hovered state

---

### GetWindowDrawList()
```lua
GetWindowDrawList() -> ImDrawList
```
- **Description**: Gets window's draw list
- **Returns**: `ImDrawList` - Draw list

---

### GetWindowDpiScale()
```lua
GetWindowDpiScale() -> number
```
- **Description**: Gets window's DPI scale
- **Returns**: `number` - DPI scale

---

### GetWindowPos()
```lua
GetWindowPos() -> number, number
```
- **Description**: Gets window position
- **Returns**: `number, number` - X, Y position

---

### GetWindowSize()
```lua
GetWindowSize() -> number, number
```
- **Description**: Gets window size
- **Returns**: `number, number` - Width, height

---

### GetWindowWidth()
```lua
GetWindowWidth() -> number
```
- **Description**: Gets window width
- **Returns**: `number` - Window width

---

### GetWindowHeight()
```lua
GetWindowHeight() -> number
```
- **Description**: Gets window height
- **Returns**: `number` - Window height

---

### GetWindowContentRegionMin()
```lua
GetWindowContentRegionMin() -> number, number
```
- **Description**: Gets window content region min
- **Returns**: `number, number` - Min X, Y

---

### GetWindowContentRegionMax()
```lua
GetWindowContentRegionMax() -> number, number
```
- **Description**: Gets window content region max
- **Returns**: `number, number` - Max X, Y

---

### GetWindowContentRegionWidth()
```lua
GetWindowContentRegionWidth() -> number
```
- **Description**: Gets window content region width
- **Returns**: `number` - Content region width

---

### SetNextWindowPos()
```lua
SetNextWindowPos(pos:ImVec2, cond:ImGuiCond|nil, pivot:ImVec2|nil)
```
- **Description**: Sets next window position
- **Parameters**: 
  - `pos:ImVec2` - Position
  - `cond:ImGuiCond|nil` - Condition (optional)
  - `pivot:ImVec2|nil` - Pivot point (optional)
- **Returns**: None

---

### SetNextWindowSize()
```lua
SetNextWindowSize(size:ImVec2, cond:ImGuiCond|nil)
```
- **Description**: Sets next window size
- **Parameters**: 
  - `size:ImVec2` - Window size
  - `cond:ImGuiCond|nil` - Condition (optional)
- **Returns**: None

---

### SetNextWindowContentSize()
```lua
SetNextWindowContentSize(size:ImVec2)
```
- **Description**: Sets next window content size
- **Parameters**: `size:ImVec2` - Content size
- **Returns**: None

---

### SetNextWindowCollapsed()
```lua
SetNextWindowCollapsed(collapsed:boolean, cond:ImGuiCond|nil)
```
- **Description**: Sets next window collapsed state
- **Parameters**: 
  - `collapsed:boolean` - Collapsed state
  - `cond:ImGuiCond|nil` - Condition (optional)
- **Returns**: None

---

### SetNextWindowFocus()
```lua
SetNextWindowFocus()
```
- **Description**: Sets next window to be focused
- **Returns**: None

---

### SetNextWindowBgAlpha()
```lua
SetNextWindowBgAlpha(alpha:number)
```
- **Description**: Sets next window background alpha
- **Parameters**: `alpha:number` - Alpha value
- **Returns**: None

---

### SetNextWindowViewport()
```lua
SetNextWindowViewport(viewport:ImGuiViewport)
```
- **Description**: Sets next window viewport
- **Parameters**: `viewport:ImGuiViewport` - Viewport
- **Returns**: None

---

### SetWindowPos()
```lua
SetWindowPos(pos:ImVec2, cond:ImGuiCond|nil)
```
- **Description**: Sets current window position
- **Parameters**: 
  - `pos:ImVec2` - Position
  - `cond:ImGuiCond|nil` - Condition (optional)
- **Returns**: None

---

### SetWindowSize()
```lua
SetWindowSize(size:ImVec2, cond:ImGuiCond|nil)
```
- **Description**: Sets current window size
- **Parameters**: 
  - `size:ImVec2` - Window size
  - `cond:ImGuiCond|nil` - Condition (optional)
- **Returns**: None

---

### SetWindowCollapsed()
```lua
SetWindowCollapsed(collapsed:boolean, cond:ImGuiCond|nil)
```
- **Description**: Sets current window collapsed state
- **Parameters**: 
  - `collapsed:boolean` - Collapsed state
  - `cond:ImGuiCond|nil` - Condition (optional)
- **Returns**: None

---

### SetWindowFocus()
```lua
SetWindowFocus()
```
- **Description**: Sets current window to be focused
- **Returns**: None

---

### SetWindowFocus()
```lua
SetWindowFocus(name:string)
```
- **Description**: Sets named window to be focused
- **Parameters**: `name:string` - Window name
- **Returns**: None

---

### SetWindowFontScale()
```lua
SetWindowFontScale(scale:number)
```
- **Description**: Sets current window font scale
- **Parameters**: `scale:number` - Font scale
- **Returns**: None
