# Cursor & Layout

Layout and cursor control functions for ImGui.

## Functions

---

### Separator()
```lua
Separator()
```
- **Description**: Adds a separator
- **Returns**: None

---

### SameLine()
```lua
SameLine(offset_from_start_x:number|nil, spacing:number|nil)
```
- **Description**: Moves cursor to same line
- **Parameters**: 
  - `offset_from_start_x:number|nil` - Offset from start X (optional)
  - `spacing:number|nil` - Spacing (optional)
- **Returns**: None

---

### NewLine()
```lua
NewLine()
```
- **Description**: Adds a new line
- **Returns**: None

---

### Spacing()
```lua
Spacing()
```
- **Description**: Adds vertical spacing
- **Returns**: None

---

### Dummy()
```lua
Dummy(size:ImVec2)
```
- **Description**: Adds a dummy item
- **Parameters**: `size:ImVec2` - Dummy size
- **Returns**: None

---

### Indent()
```lua
Indent(indent_w:number|nil)
```
- **Description**: Indents the layout
- **Parameters**: `indent_w:number|nil` - Indent width (optional)
- **Returns**: None

---

### Unindent()
```lua
Unindent(indent_w:number|nil)
```
- **Description**: Unindents the layout
- **Parameters**: `indent_w:number|nil` - Unindent width (optional)
- **Returns**: None

---

### BeginGroup()
```lua
BeginGroup()
```
- **Description**: Begins a group
- **Returns**: None

---

### EndGroup()
```lua
EndGroup()
```
- **Description**: Ends a group
- **Returns**: None

---

### GetCursorPos()
```lua
GetCursorPos() -> ImVec2
```
- **Description**: Gets cursor position
- **Returns**: `ImVec2` - Cursor position

---

### SetCursorPos()
```lua
SetCursorPos(pos:ImVec2)
```
- **Description**: Sets cursor position
- **Parameters**: `pos:ImVec2` - Cursor position
- **Returns**: None

---

### SetCursorPosX()
```lua
SetCursorPosX(x:number)
```
- **Description**: Sets cursor X position
- **Parameters**: `x:number` - X position
- **Returns**: None

---

### SetCursorPosY()
```lua
SetCursorPosY(y:number)
```
- **Description**: Sets cursor Y position
- **Parameters**: `y:number` - Y position
- **Returns**: None

---

### GetCursorPosX()
```lua
GetCursorPosX() -> number
```
- **Description**: Gets cursor X position
- **Returns**: `number` - X position

---

### GetCursorPosY()
```lua
GetCursorPosY() -> number
```
- **Description**: Gets cursor Y position
- **Returns**: `number` - Y position

---

### GetCursorStartPos()
```lua
GetCursorStartPos() -> ImVec2
```
- **Description**: Gets cursor start position
- **Returns**: `ImVec2` - Start position

---

### GetCursorScreenPos()
```lua
GetCursorScreenPos() -> ImVec2
```
- **Description**: Gets cursor screen position
- **Returns**: `ImVec2` - Screen position

---

### SetCursorScreenPos()
```lua
SetCursorScreenPos(pos:ImVec2)
```
- **Description**: Sets cursor screen position
- **Parameters**: `pos:ImVec2` - Screen position
- **Returns**: None

---

### AlignTextToFramePadding()
```lua
AlignTextToFramePadding()
```
- **Description**: Aligns text to frame padding
- **Returns**: None

---

### GetTextLineHeight()
```lua
GetTextLineHeight() -> number
```
- **Description**: Gets text line height
- **Returns**: `number` - Line height

---

### GetTextLineHeightWithSpacing()
```lua
GetTextLineHeightWithSpacing() -> number
```
- **Description**: Gets text line height with spacing
- **Returns**: `number` - Line height with spacing

---

### GetFrameHeight()
```lua
GetFrameHeight() -> number
```
- **Description**: Gets frame height
- **Returns**: `number` - Frame height

---

### GetFrameHeightWithSpacing()
```lua
GetFrameHeightWithSpacing() -> number
```
- **Description**: Gets frame height with spacing
- **Returns**: `number` - Frame height with spacing

---

### GetFontSize()
```lua
GetFontSize() -> number
```
- **Description**: Gets font size
- **Returns**: `number` - Font size
