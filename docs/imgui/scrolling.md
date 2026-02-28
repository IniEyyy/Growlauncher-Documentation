# Scrolling

Scroll control functions for ImGui.

## Functions

---

### GetScrollX()
```lua
GetScrollX() -> number
```
- **Description**: Gets horizontal scroll position
- **Returns**: `number` - Horizontal scroll position

---

### GetScrollY()
```lua
GetScrollY() -> number
```
- **Description**: Gets vertical scroll position
- **Returns**: `number` - Vertical scroll position

---

### SetScrollX()
```lua
SetScrollX(scroll_x:number)
```
- **Description**: Sets horizontal scroll position
- **Parameters**: `scroll_x:number` - Horizontal scroll position
- **Returns**: None

---

### SetScrollY()
```lua
SetScrollY(scroll_y:number)
```
- **Description**: Sets vertical scroll position
- **Parameters**: `scroll_y:number` - Vertical scroll position
- **Returns**: None

---

### GetScrollMaxX()
```lua
GetScrollMaxX() -> number
```
- **Description**: Gets maximum horizontal scroll
- **Returns**: `number` - Maximum horizontal scroll

---

### GetScrollMaxY()
```lua
GetScrollMaxY() -> number
```
- **Description**: Gets maximum vertical scroll
- **Returns**: `number` - Maximum vertical scroll

---

### SetScrollHereX()
```lua
SetScrollHereX(center_x_ratio:number|nil)
```
- **Description**: Sets horizontal scroll to current pos
- **Parameters**: `center_x_ratio:number|nil` - Center ratio (optional)
- **Returns**: None

---

### SetScrollHereY()
```lua
SetScrollHereY(center_y_ratio:number|nil)
```
- **Description**: Sets vertical scroll to current pos
- **Parameters**: `center_y_ratio:number|nil` - Center ratio (optional)
- **Returns**: None

---

### SetScrollFromPosX()
```lua
SetScrollFromPosX(local_x:number, center_x_ratio:number|nil)
```
- **Description**: Sets horizontal scroll from pos
- **Parameters**: 
  - `local_x:number` - Local X position
  - `center_x_ratio:number|nil` - Center ratio (optional)
- **Returns**: None

---

### SetScrollFromPosY()
```lua
SetScrollFromPosY(local_y:number, center_y_ratio:number|nil)
```
- **Description**: Sets vertical scroll from pos
- **Parameters**: 
  - `local_y:number` - Local Y position
  - `center_y_ratio:number|nil` - Center ratio (optional)
- **Returns**: None
