# Child Windows

Child window creation and management functions for ImGui.

## Functions

---

### BeginChild()
```lua
BeginChild(str_id:string, size:ImVec2|nil, border:boolean|nil, flags:ImGuiWindowFlags|nil) -> boolean
```
- **Description**: Begins child window with string ID
- **Parameters**: 
  - `str_id:string` - String ID
  - `size:ImVec2|nil` - Child window size (optional)
  - `border:boolean|nil` - Show border (optional)
  - `flags:ImGuiWindowFlags|nil` - Window flags (optional)
- **Returns**: `boolean` - Child window is open

---

### BeginChild()
```lua
BeginChild(id:integer, size:ImVec2|nil, border:boolean|nil, flags:ImGuiWindowFlags|nil) -> boolean
```
- **Description**: Begins child window with integer ID
- **Parameters**: 
  - `id:integer` - Integer ID
  - `size:ImVec2|nil` - Child window size (optional)
  - `border:boolean|nil` - Show border (optional)
  - `flags:ImGuiWindowFlags|nil` - Window flags (optional)
- **Returns**: `boolean` - Child window is open

---

### EndChild()
```lua
EndChild()
```
- **Description**: Ends a child window
- **Returns**: None
