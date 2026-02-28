# Menus

Menu creation functions for ImGui.

## Functions

---

### BeginMainMenuBar()
```lua
BeginMainMenuBar() -> boolean
```
- **Description**: Begins main menu bar
- **Returns**: `boolean` - Menu bar is open

---

### EndMainMenuBar()
```lua
EndMainMenuBar()
```
- **Description**: Ends main menu bar
- **Returns**: None

---

### BeginMenuBar()
```lua
BeginMenuBar() -> boolean
```
- **Description**: Begins menu bar
- **Returns**: `boolean` - Menu bar is open

---

### EndMenuBar()
```lua
EndMenuBar()
```
- **Description**: Ends menu bar
- **Returns**: None

---

### BeginMenu()
```lua
BeginMenu(label:string, enabled:boolean|nil) -> boolean
```
- **Description**: Begins menu
- **Parameters**: 
  - `label:string` - Menu label
  - `enabled:boolean|nil` - Menu enabled state (optional)
- **Returns**: `boolean` - Menu is open

---

### EndMenu()
```lua
EndMenu()
```
- **Description**: Ends menu
- **Returns**: None

---

### MenuItem()
```lua
MenuItem(label:string, shortcut:string|nil, selected:boolean|nil, enabled:boolean|nil) -> boolean
```
- **Description**: Menu item
- **Parameters**: 
  - `label:string` - Item label
  - `shortcut:string|nil` - Shortcut text (optional)
  - `selected:boolean|nil` - Selected state (optional)
  - `enabled:boolean|nil` - Item enabled state (optional)
- **Returns**: `boolean` - Item clicked

---

### MenuItem()
```lua
MenuItem(label:string, shortcut:string|nil, p_selected:boolean, enabled:boolean|nil) -> boolean, boolean
```
- **Description**: Menu item with state reference
- **Parameters**: 
  - `label:string` - Item label
  - `shortcut:string|nil` - Shortcut text (optional)
  - `p_selected:boolean` - Selected state reference
  - `enabled:boolean|nil` - Item enabled state (optional)
- **Returns**: `boolean, boolean` - Item clicked, current selected state
