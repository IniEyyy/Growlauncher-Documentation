# Window Management

Window creation and management functions for ImGui.

## Functions

---

### Begin()
```lua
Begin(name:string, p_open:boolean|nil, flags:ImGuiWindowFlags|nil) -> boolean, boolean
```
- **Description**: Begins a new window
- **Parameters**: 
  - `name:string` - Window name
  - `p_open:boolean|nil` - Open state pointer (optional)
  - `flags:ImGuiWindowFlags|nil` - Window flags (optional)
- **Returns**: `boolean, boolean` - Window open, window appeared

---

### End()
```lua
End()
```
- **Description**: Ends current window
- **Returns**: None
