# Trees

Tree view widgets for ImGui.

## Functions

---

### TreeNodeEx()
```lua
TreeNodeEx(label:string, flags:ImGuiTreeNodeFlags|nil) -> boolean
```
- **Description**: Tree node with extended flags
- **Parameters**: 
  - `label:string` - Node label
  - `flags:ImGuiTreeNodeFlags|nil` - Tree node flags (optional)
- **Returns**: `boolean` - Node is open

---

### TreeNodeEx()
```lua
TreeNodeEx(str_id:string, flags:ImGuiTreeNodeFlags, fmt:string, ...:any) -> boolean
```
- **Description**: Tree node with string ID and format
- **Parameters**: 
  - `str_id:string` - String ID
  - `flags:ImGuiTreeNodeFlags` - Tree node flags
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: `boolean` - Node is open

---

### TreeNodeEx()
```lua
TreeNodeEx(ptr_id:userdata, flags:ImGuiTreeNodeFlags, fmt:string, ...:any) -> boolean
```
- **Description**: Tree node with pointer ID and format
- **Parameters**: 
  - `ptr_id:userdata` - Pointer ID
  - `flags:ImGuiTreeNodeFlags` - Tree node flags
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: `boolean` - Node is open
