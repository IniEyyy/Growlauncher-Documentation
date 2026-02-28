# Clipping

Rendering clipping functions for ImGui.

## Functions

---

### PushClipRect()
```lua
PushClipRect(clip_rect_min:ImVec2, clip_rect_max:ImVec2, intersect_with_current_clip_rect:boolean)
```
- **Description**: Pushes clipping rectangle
- **Parameters**: 
  - `clip_rect_min:ImVec2` - Clip rectangle minimum
  - `clip_rect_max:ImVec2` - Clip rectangle maximum
  - `intersect_with_current_clip_rect:boolean` - Intersect with current clip rect
- **Returns**: None

---

### PopClipRect()
```lua
PopClipRect()
```
- **Description**: Pops clipping rectangle
- **Returns**: None

---

### SetItemClipRect()
```lua
SetItemClipRect()
```
- **Description**: Sets item clip rect to last item bounds
- **Returns**: None

---

### GetClipRect()
```lua
GetClipRect() -> ImVec2, ImVec2
```
- **Description**: Gets current clipping rectangle
- **Returns**: `ImVec2, ImVec2` - Clip rectangle min, max

---

### GetWindowClipRect()
```lua
GetWindowClipRect() -> ImVec2, ImVec2
```
- **Description**: Gets window clipping rectangle
- **Returns**: `ImVec2, ImVec2` - Clip rectangle min, max
