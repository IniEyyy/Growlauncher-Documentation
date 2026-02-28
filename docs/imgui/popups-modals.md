# Popups & Modals

Popup and modal window functions for ImGui.

## Functions

---

### BeginPopup()
```lua
BeginPopup(str_id:string, flags:ImGuiWindowFlags|nil) -> boolean
```
- **Description**: Begins popup
- **Parameters**: 
  - `str_id:string` - Popup string ID
  - `flags:ImGuiWindowFlags|nil` - Window flags (optional)
- **Returns**: `boolean` - Popup is open

---

### BeginPopupModal()
```lua
BeginPopupModal(name:string, p_open:boolean|nil, flags:ImGuiWindowFlags|nil) -> boolean
```
- **Description**: Begins modal popup
- **Parameters**: 
  - `name:string` - Modal name
  - `p_open:boolean|nil` - Open state reference (optional)
  - `flags:ImGuiWindowFlags|nil` - Window flags (optional)
- **Returns**: `boolean` - Modal is open

---

### EndPopup()
```lua
EndPopup()
```
- **Description**: Ends popup
- **Returns**: None

---

### OpenPopup()
```lua
OpenPopup(str_id:string, popup_flags:ImGuiPopupFlags|nil)
```
- **Description**: Opens popup
- **Parameters**: 
  - `str_id:string` - Popup string ID
  - `popup_flags:ImGuiPopupFlags|nil` - Popup flags (optional)
- **Returns**: None

---

### CloseCurrentPopup()
```lua
CloseCurrentPopup()
```
- **Description**: Closes current popup
- **Returns**: None

---

### IsPopupOpen()
```lua
IsPopupOpen(str_id:string, popup_flags:ImGuiPopupFlags|nil) -> boolean
```
- **Description**: Checks if popup is open
- **Parameters**: 
  - `str_id:string` - Popup string ID
  - `popup_flags:ImGuiPopupFlags|nil` - Popup flags (optional)
- **Returns**: `boolean` - Popup is open

---

### BeginPopupContextItem()
```lua
BeginPopupContextItem(str_id:string|nil, popup_flags:ImGuiPopupFlags|nil) -> boolean
```
- **Description**: Begins context menu for last item
- **Parameters**: 
  - `str_id:string|nil` - String ID (optional)
  - `popup_flags:ImGuiPopupFlags|nil` - Popup flags (optional)
- **Returns**: `boolean` - Context menu is open

---

### BeginPopupContextWindow()
```lua
BeginPopupContextWindow(str_id:string|nil, popup_flags:ImGuiPopupFlags|nil, mouse_button:integer|nil) -> boolean
```
- **Description**: Begins context menu for window
- **Parameters**: 
  - `str_id:string|nil` - String ID (optional)
  - `popup_flags:ImGuiPopupFlags|nil` - Popup flags (optional)
  - `mouse_button:integer|nil` - Mouse button (optional)
- **Returns**: `boolean` - Context menu is open

---

### BeginPopupContextVoid()
```lua
BeginPopupContextVoid(str_id:string|nil, popup_flags:ImGuiPopupFlags|nil, mouse_button:integer|nil) -> boolean
```
- **Description**: Begins context menu for void area
- **Parameters**: 
  - `str_id:string|nil` - String ID (optional)
  - `popup_flags:ImGuiPopupFlags|nil` - Popup flags (optional)
  - `mouse_button:integer|nil` - Mouse button (optional)
- **Returns**: `boolean` - Context menu is open
