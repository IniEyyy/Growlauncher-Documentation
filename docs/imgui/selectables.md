# Selectables

Selection widgets for ImGui.

## Functions

---

### Selectable()
```lua
Selectable(label:string, selected:boolean|nil, flags:ImGuiSelectableFlags|nil, size:ImVec2|nil) -> boolean
```
- **Description**: Selectable item
- **Parameters**: 
  - `label:string` - Item label
  - `selected:boolean|nil` - Selected state (optional)
  - `flags:ImGuiSelectableFlags|nil` - Selectable flags (optional)
  - `size:ImVec2|nil` - Item size (optional)
- **Returns**: `boolean` - Item clicked

---

### Selectable()
```lua
Selectable(label:string, p_selected:boolean, flags:ImGuiSelectableFlags|nil, size:ImVec2|nil) -> boolean, boolean
```
- **Description**: Selectable item with state reference
- **Parameters**: 
  - `label:string` - Item label
  - `p_selected:boolean` - Selected state reference
  - `flags:ImGuiSelectableFlags|nil` - Selectable flags (optional)
  - `size:ImVec2|nil` - Item size (optional)
- **Returns**: `boolean, boolean` - Item clicked, current selected state
