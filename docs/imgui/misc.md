# Miscellaneous Utilities

Miscellaneous utility functions for ImGui.

## Functions

---

### GetBackgroundDrawList()
```lua
GetBackgroundDrawList(viewport:ImGuiViewport|nil) -> ImDrawList
```
- **Description**: Gets background draw list
- **Parameters**: `viewport:ImGuiViewport|nil` - Viewport (optional)
- **Returns**: `ImDrawList` - Background draw list

---

### GetForegroundDrawList()
```lua
GetForegroundDrawList(viewport:ImGuiViewport|nil) -> ImDrawList
```
- **Description**: Gets foreground draw list
- **Parameters**: `viewport:ImGuiViewport|nil` - Viewport (optional)
- **Returns**: `ImDrawList` - Foreground draw list

---

### GetDrawListSharedData()
```lua
GetDrawListSharedData() -> ImDrawListSharedData
```
- **Description**: Gets draw list shared data
- **Returns**: `ImDrawListSharedData` - Shared data

---

### GetStyle()
```lua
GetStyle() -> ImGuiStyle
```
- **Description**: Gets style
- **Returns**: `ImGuiStyle` - Style structure

---

### GetIO()
```lua
GetIO() -> ImGuiIO
```
- **Description**: Gets I/O
- **Returns**: `ImGuiIO` - I/O structure

---

### GetFont()
```lua
GetFont() -> ImFont
```
- **Description**: Gets current font
- **Returns**: `ImFont` - Current font

---

### GetFontSize()
```lua
GetFontSize() -> number
```
- **Description**: Gets font size
- **Returns**: `number` - Font size

---

### GetFontTexUvWhitePixel()
```lua
GetFontTexUvWhitePixel() -> ImVec2
```
- **Description**: Gets font texture UV white pixel
- **Returns**: `ImVec2` - UV coordinates

---

### GetColorU32()
```lua
GetColorU32(col:ImVec4, alpha_mul:number|nil) -> integer
```
- **Description**: Gets color as U32
- **Parameters**: 
  - `col:ImVec4` - Color
  - `alpha_mul:number|nil` - Alpha multiplier (optional)
- **Returns**: `integer` - Color as U32

---

### GetColorU32()
```lua
GetColorU32(idx:ImGuiCol, alpha_mul:number|nil) -> integer
```
- **Description**: Gets color as U32 from style
- **Parameters**: 
  - `idx:ImGuiCol` - Color index
  - `alpha_mul:number|nil` - Alpha multiplier (optional)
- **Returns**: `integer` - Color as U32

---

### PushStyleColor()
```lua
PushStyleColor(idx:ImGuiCol, col:ImVec4)
```
- **Description**: Pushes style color
- **Parameters**: 
  - `idx:ImGuiCol` - Color index
  - `col:ImVec4` - Color
- **Returns**: None

---

### PopStyleColor()
```lua
PopStyleColor(count:integer|nil)
```
- **Description**: Pops style colors
- **Parameters**: `count:integer|nil` - Number of colors to pop (optional)
- **Returns**: None

---

### PushStyleVar()
```lua
PushStyleVar(idx:ImGuiStyleVar, val:number|ImVec2)
```
- **Description**: Pushes style variable
- **Parameters**: 
  - `idx:ImGuiStyleVar` - Style variable index
  - `val:number|ImVec2` - Value
- **Returns**: None

---

### PopStyleVar()
```lua
PopStyleVar(count:integer|nil)
```
- **Description**: Pops style variables
- **Parameters**: `count:integer|nil` - Number of variables to pop (optional)
- **Returns**: None

---

### GetKeyIndex()
```lua
GetKeyIndex(imgui_key:ImGuiKey) -> integer
```
- **Description**: Gets key index
- **Parameters**: `imgui_key:ImGuiKey` - ImGui key
- **Returns**: `integer` - Key index

---

### IsKeyDown()
```lua
IsKeyDown(user_key_index:integer) -> boolean
```
- **Description**: Checks if key is down
- **Parameters**: `user_key_index:integer` - Key index
- **Returns**: `boolean` - Key is down

---

### IsKeyPressed()
```lua
IsKeyPressed(user_key_index:integer, repeat:boolean|nil) -> boolean
```
- **Description**: Checks if key was pressed
- **Parameters**: 
  - `user_key_index:integer` - Key index
  - `repeat:boolean|nil` - Allow repeat (optional)
- **Returns**: `boolean` - Key was pressed

---

### IsKeyReleased()
```lua
IsKeyReleased(user_key_index:integer) -> boolean
```
- **Description**: Checks if key was released
- **Parameters**: `user_key_index:integer` - Key index
- **Returns**: `boolean` - Key was released

---

### IsMouseDown()
```lua
IsMouseDown(button:integer) -> boolean
```
- **Description**: Checks if mouse button is down
- **Parameters**: `button:integer` - Mouse button
- **Returns**: `boolean` - Mouse button is down

---

### IsMouseClicked()
```lua
IsMouseClicked(button:integer, repeat:boolean|nil) -> boolean
```
- **Description**: Checks if mouse button was clicked
- **Parameters**: 
  - `button:integer` - Mouse button
  - `repeat:boolean|nil` - Allow repeat (optional)
- **Returns**: `boolean` - Mouse button was clicked

---

### IsMouseReleased()
```lua
IsMouseReleased(button:integer) -> boolean
```
- **Description**: Checks if mouse button was released
- **Parameters**: `button:integer` - Mouse button
- **Returns**: `boolean` - Mouse button was released

---

### IsMouseDoubleClicked()
```lua
IsMouseDoubleClicked(button:integer) -> boolean
```
- **Description**: Checks if mouse button was double clicked
- **Parameters**: `button:integer` - Mouse button
- **Returns**: `boolean` - Mouse button was double clicked

---

### GetMousePos()
```lua
GetMousePos() -> ImVec2
```
- **Description**: Gets mouse position
- **Returns**: `ImVec2` - Mouse position

---

### GetMouseDragDelta()
```lua
GetMouseDelta(button:integer|nil) -> ImVec2
```
- **Description**: Gets mouse drag delta
- **Parameters**: `button:integer|nil` - Mouse button (optional)
- **Returns**: `ImVec2` - Drag delta

---

### ResetMouseDragDelta()
```lua
ResetMouseDragDelta(button:integer|nil)
```
- **Description**: Resets mouse drag delta
- **Parameters**: `button:integer|nil` - Mouse button (optional)
- **Returns**: None

---

### GetMouseCursor()
```lua
GetMouseCursor() -> ImGuiMouseCursor
```
- **Description**: Gets mouse cursor
- **Returns**: `ImGuiMouseCursor` - Mouse cursor

---

### SetMouseCursor()
```lua
SetMouseCursor(cursor:ImGuiMouseCursor)
```
- **Description**: Sets mouse cursor
- **Parameters**: `cursor:ImGuiMouseCursor` - Mouse cursor
- **Returns**: None

---

### SetNextFrameWantCaptureKeyboard()
```lua
SetNextFrameWantCaptureKeyboard(want_capture_keyboard:boolean)
```
- **Description**: Set next frame keyboard capture
- **Parameters**: `want_capture_keyboard:boolean` - Want capture keyboard
- **Returns**: None

---

### SetNextFrameWantCaptureMouse()
```lua
SetNextFrameWantCaptureMouse(want_capture_mouse:boolean)
```
- **Description**: Set next frame mouse capture
- **Parameters**: `want_capture_mouse:boolean` - Want capture mouse
- **Returns**: None

---

### GetTime()
```lua
GetTime() -> number
```
- **Description**: Gets global time
- **Returns**: `number` - Global time

---

### GetFrameCount()
```lua
GetFrameCount() -> integer
```
- **Description**: Gets frame count
- **Returns**: `integer` - Frame count

---

### GetFrameTime()
```lua
GetFrameTime() -> number
```
- **Description**: Gets frame time
- **Returns**: `number` - Frame time

---

### GetIO()
```lua
GetIO() -> ImGuiIO
```
- **Description**: Gets I/O structure
- **Returns**: `ImGuiIO` - I/O structure

---

### GetStyle()
```lua
GetStyle() -> ImGuiStyle
```
- **Description**: Gets style structure
- **Returns**: `ImGuiStyle` - Style structure

---

### GetDrawData()
```lua
GetDrawData() -> ImDrawData
```
- **Description**: Gets draw data
- **Returns**: `ImDrawData` - Draw data

---

### GetDrawListSharedData()
```lua
GetDrawListSharedData() -> ImDrawListSharedData
```
- **Description**: Gets draw list shared data
- **Returns**: `ImDrawListSharedData` - Shared data

---

### GetFont()
```lua
GetFont() -> ImFont
```
- **Description**: Gets current font
- **Returns**: `ImFont` - Current font

---

### GetFontSize()
```lua
GetFontSize() -> number
```
- **Description**: Gets font size
- **Returns**: `number` - Font size

---

### GetFontTexUvWhitePixel()
```lua
GetFontTexUvWhitePixel() -> ImVec2
```
- **Description**: Gets font texture UV white pixel
- **Returns**: `ImVec2` - UV coordinates

---

### GetColorU32()
```lua
GetColorU32(col:ImVec4, alpha_mul:number|nil) -> integer
```
- **Description**: Gets color as U32
- **Parameters**: 
  - `col:ImVec4` - Color
  - `alpha_mul:number|nil` - Alpha multiplier (optional)
- **Returns**: `integer` - Color as U32

---

### GetColorU32()
```lua
GetColorU32(idx:ImGuiCol, alpha_mul:number|nil) -> integer
```
- **Description**: Gets color as U32 from style
- **Parameters**: 
  - `idx:ImGuiCol` - Color index
  - `alpha_mul:number|nil` - Alpha multiplier (optional)
- **Returns**: `integer` - Color as U32
