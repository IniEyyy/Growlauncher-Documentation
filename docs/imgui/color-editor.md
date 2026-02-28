# Color Editor/Picker

Color selection widgets for ImGui.

## Functions

---

### ColorEdit3()
```lua
ColorEdit3(label:string, col:number[], flags:ImGuiColorEditFlags|nil) -> boolean, number[]
```
- **Description**: Color editor for 3 values
- **Parameters**: 
  - `label:string` - Widget label
  - `col:number[]` - Color array reference
  - `flags:ImGuiColorEditFlags|nil` - Color edit flags (optional)
- **Returns**: `boolean, number[]` - Active state, current color

---

### ColorEdit4()
```lua
ColorEdit4(label:string, col:number[], flags:ImGuiColorEditFlags|nil) -> boolean, number[]
```
- **Description**: Color editor for 4 values
- **Parameters**: 
  - `label:string` - Widget label
  - `col:number[]` - Color array reference
  - `flags:ImGuiColorEditFlags|nil` - Color edit flags (optional)
- **Returns**: `boolean, number[]` - Active state, current color

---

### ColorPicker3()
```lua
ColorPicker3(label:string, col:number[], flags:ImGuiColorEditFlags|nil) -> boolean, number[]
```
- **Description**: Color picker for 3 values
- **Parameters**: 
  - `label:string` - Widget label
  - `col:number[]` - Color array reference
  - `flags:ImGuiColorEditFlags|nil` - Color edit flags (optional)
- **Returns**: `boolean, number[]` - Active state, current color

---

### ColorPicker4()
```lua
ColorPicker4(label:string, col:number[], flags:ImGuiColorEditFlags|nil) -> boolean, number[]
```
- **Description**: Color picker for 4 values
- **Parameters**: 
  - `label:string` - Widget label
  - `col:number[]` - Color array reference
  - `flags:ImGuiColorEditFlags|nil` - Color edit flags (optional)
- **Returns**: `boolean, number[]` - Active state, current color

---

### ColorButton()
```lua
ColorButton(desc_id:string, col:ImVec4, flags:ImGuiColorEditFlags|nil, size:ImVec2|nil) -> boolean
```
- **Description**: Color button
- **Parameters**: 
  - `desc_id:string` - Button description ID
  - `col:ImVec4` - Color value
  - `flags:ImGuiColorEditFlags|nil` - Color edit flags (optional)
  - `size:ImVec2|nil` - Button size (optional)
- **Returns**: `boolean` - Button clicked

---

### SetColorEditOptions()
```lua
SetColorEditOptions(flags:ImGuiColorEditFlags)
```
- **Description**: Set color edit options
- **Parameters**: `flags:ImGuiColorEditFlags` - Color edit flags
- **Returns**: None
