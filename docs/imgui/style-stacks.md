# Style Stacks

Style stack operations for ImGui.

## Functions

---

### PushStyleVar()
```lua
PushStyleVar(idx:ImGuiStyleVar, val:number|ImVec2)
```
- **Description**: Pushes a style variable
- **Parameters**: 
  - `idx:ImGuiStyleVar` - Style variable index
  - `val:number|ImVec2` - Style value
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

### PushStyleColor()
```lua
PushStyleColor(idx:ImGuiCol, col:ImVec4)
```
- **Description**: Pushes a style color
- **Parameters**: 
  - `idx:ImGuiCol` - Color index
  - `col:ImVec4` - Color value
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

### PushFont()
```lua
PushFont(font:ImFont)
```
- **Description**: Pushes a font
- **Parameters**: `font:ImFont` - Font to push
- **Returns**: None

---

### PopFont()
```lua
PopFont()
```
- **Description**: Pops current font
- **Returns**: None

---

### PopAllowKeyboardFocus()
```lua
PopAllowKeyboardFocus()
```
- **Description**: Pops keyboard focus allowance
- **Returns**: None

---

### PushAllowKeyboardFocus()
```lua
PushAllowKeyboardFocus(allow_keyboard_focus:boolean)
```
- **Description**: Pushes keyboard focus allowance
- **Parameters**: `allow_keyboard_focus:boolean` - Allow keyboard focus
- **Returns**: None

---

### PushItemWidth()
```lua
PushItemWidth(item_width:number)
```
- **Description**: Pushes item width
- **Parameters**: `item_width:number` - Item width
- **Returns**: None

---

### PopItemWidth()
```lua
PopItemWidth()
```
- **Description**: Pops item width
- **Returns**: None

---

### SetNextItemWidth()
```lua
SetNextItemWidth(item_width:number)
```
- **Description**: Sets next item width
- **Parameters**: `item_width:number` - Item width
- **Returns**: None

---

### CalcItemWidth()
```lua
CalcItemWidth() -> number
```
- **Description**: Calculates item width
- **Returns**: `number` - Calculated width

---

### PushTextWrapPos()
```lua
PushTextWrapPos(wrap_pos_x:number|nil)
```
- **Description**: Pushes text wrap position
- **Parameters**: `wrap_pos_x:number|nil` - Wrap position X (optional)
- **Returns**: None

---

### PopTextWrapPos()
```lua
PopTextWrapPos()
```
- **Description**: Pops text wrap position
- **Returns**: None
