# Tab Bars & Tabs

Tab interface functions for ImGui.

## Functions

---

### BeginTabBar()
```lua
BeginTabBar(str_id:string, flags:ImGuiTabBarFlags|nil) -> boolean
```
- **Description**: Begins tab bar
- **Parameters**: 
  - `str_id:string` - Tab bar string ID
  - `flags:ImGuiTabBarFlags|nil` - Tab bar flags (optional)
- **Returns**: `boolean` - Tab bar is open

---

### EndTabBar()
```lua
EndTabBar()
```
- **Description**: Ends tab bar
- **Returns**: None

---

### BeginTabItem()
```lua
BeginTabItem(label:string, p_open:boolean|nil, flags:ImGuiTabItemFlags|nil) -> boolean
```
- **Description**: Begins tab item
- **Parameters**: 
  - `label:string` - Tab label
  - `p_open:boolean|nil` - Open state reference (optional)
  - `flags:ImGuiTabItemFlags|nil` - Tab item flags (optional)
- **Returns**: `boolean` - Tab is selected

---

### EndTabItem()
```lua
EndTabItem()
```
- **Description**: Ends tab item
- **Returns**: None

---

### TabItemButton()
```lua
TabItemButton(label:string, flags:ImGuiTabItemFlags|nil) -> boolean
```
- **Description**: Tab item button
- **Parameters**: 
  - `label:string` - Button label
  - `flags:ImGuiTabItemFlags|nil` - Tab item flags (optional)
- **Returns**: `boolean` - Button clicked

---

### SetTabItemClosed()
```lua
SetTabItemClosed(tab_or_docked_window_label:string)
```
- **Description**: Notify that tab item was closed
- **Parameters**: `tab_or_docked_window_label:string` - Tab label
- **Returns**: None
