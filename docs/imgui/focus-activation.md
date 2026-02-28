# Focus & Activation

Focus management functions for ImGui.

## Functions

---

### IsItemFocused()
```lua
IsItemFocused() -> boolean
```
- **Description**: Checks if current item is focused
- **Returns**: `boolean` - Item is focused

---

### IsItemActive()
```lua
IsItemActive() -> boolean
```
- **Description**: Checks if current item is active
- **Returns**: `boolean` - Item is active

---

### IsItemActivated()
```lua
IsItemActivated() -> boolean
```
- **Description**: Checks if current item was just activated
- **Returns**: `boolean` - Item was just activated

---

### IsItemDeactivated()
```lua
IsItemDeactivated() -> boolean
```
- **Description**: Checks if current item was just deactivated
- **Returns**: `boolean` - Item was just deactivated

---

### IsItemDeactivatedAfterEdit()
```lua
IsItemDeactivatedAfterEdit() -> boolean
```
- **Description**: Checks if current item was just deactivated after edit
- **Returns**: `boolean` - Item was just deactivated after edit

---

### IsItemToggledOpen()
```lua
IsItemToggledOpen() -> boolean
```
- **Description**: Checks if current item was toggled open
- **Returns**: `boolean` - Item was toggled open

---

### IsAnyItemActive()
```lua
IsAnyItemActive() -> boolean
```
- **Description**: Checks if any item is active
- **Returns**: `boolean` - Any item is active

---

### IsAnyItemFocused()
```lua
IsAnyItemFocused() -> boolean
```
- **Description**: Checks if any item is focused
- **Returns**: `boolean` - Any item is focused

---

### SetItemDefaultFocus()
```lua
SetItemDefaultFocus()
```
- **Description**: Sets item as default focus
- **Returns**: None

---

### SetKeyboardFocusHere()
```lua
SetKeyboardFocusHere(offset:integer|nil)
```
- **Description**: Set keyboard focus to next widget
- **Parameters**: `offset:integer|nil` - Focus offset (optional)
- **Returns**: None

---

### SetNextItemAllowOverlap()
```lua
SetNextItemAllowOverlap()
```
- **Description**: Allow next item to overlap
- **Returns**: None
