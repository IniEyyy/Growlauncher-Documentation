# Input Handling

Input event handling functions for ImGui.

## Functions

---

### IsKeyDown()
```lua
IsKeyDown(user_key_index:integer) -> boolean
```
- **Description**: Checks if key is down
- **Parameters**: `user_key_index:integer` - Key index
- **Returns**: `boolean` - Key is down

---

### IsKeyPressed()
```lua
IsKeyPressed(user_key_index:integer, repeat:boolean|nil) -> boolean
```
- **Description**: Checks if key was pressed
- **Parameters**: 
  - `user_key_index:integer` - Key index
  - `repeat:boolean|nil` - Allow repeat (optional)
- **Returns**: `boolean` - Key was pressed

---

### IsKeyReleased()
```lua
IsKeyReleased(user_key_index:integer) -> boolean
```
- **Description**: Checks if key was released
- **Parameters**: `user_key_index:integer` - Key index
- **Returns**: `boolean` - Key was released

---

### IsMouseDown()
```lua
IsMouseDown(button:integer) -> boolean
```
- **Description**: Checks if mouse button is down
- **Parameters**: `button:integer` - Mouse button
- **Returns**: `boolean` - Mouse button is down

---

### IsMouseClicked()
```lua
IsMouseClicked(button:integer, repeat:boolean|nil) -> boolean
```
- **Description**: Checks if mouse button was clicked
- **Parameters**: 
  - `button:integer` - Mouse button
  - `repeat:boolean|nil` - Allow repeat (optional)
- **Returns**: `boolean` - Mouse button was clicked

---

### IsMouseReleased()
```lua
IsMouseReleased(button:integer) -> boolean
```
- **Description**: Checks if mouse button was released
- **Parameters**: `button:integer` - Mouse button
- **Returns**: `boolean` - Mouse button was released

---

### IsMouseDoubleClicked()
```lua
IsMouseDoubleClicked(button:integer) -> boolean
```
- **Description**: Checks if mouse button was double clicked
- **Parameters**: `button:integer` - Mouse button
- **Returns**: `boolean` - Mouse button was double clicked

---

### GetMousePos()
```lua
GetMousePos() -> ImVec2
```
- **Description**: Gets mouse position
- **Returns**: `ImVec2` - Mouse position

---

### GetMouseDragDelta()
```lua
GetMouseDragDelta(button:integer|nil) -> ImVec2
```
- **Description**: Gets mouse drag delta
- **Parameters**: `button:integer|nil` - Mouse button (optional)
- **Returns**: `ImVec2` - Drag delta

---

### ResetMouseDragDelta()
```lua
ResetMouseDragDelta(button:integer|nil)
```
- **Description**: Resets mouse drag delta
- **Parameters**: `button:integer|nil` - Mouse button (optional)
- **Returns**: None

---

### GetMouseCursor()
```lua
GetMouseCursor() -> ImGuiMouseCursor
```
- **Description**: Gets mouse cursor
- **Returns**: `ImGuiMouseCursor` - Mouse cursor

---

### SetMouseCursor()
```lua
SetMouseCursor(cursor:ImGuiMouseCursor)
```
- **Description**: Sets mouse cursor
- **Parameters**: `cursor:ImGuiMouseCursor` - Mouse cursor
- **Returns**: None

---

### GetKeyIndex()
```lua
GetKeyIndex(imgui_key:ImGuiKey) -> integer
```
- **Description**: Gets key index
- **Parameters**: `imgui_key:ImGuiKey` - ImGui key
- **Returns**: `integer` - Key index

---

### CaptureKeyboardFromApp()
```lua
CaptureKeyboardFromApp(want_capture_keyboard:boolean)
```
- **Description**: Capture keyboard from app
- **Parameters**: `want_capture_keyboard:boolean` - Want capture keyboard
- **Returns**: None

---

### CaptureMouseFromApp()
```lua
CaptureMouseFromApp(want_capture_mouse:boolean)
```
- **Description**: Capture mouse from app
- **Parameters**: `want_capture_mouse:boolean` - Want capture mouse
- **Returns**: None

---

### SetNextFrameWantCaptureKeyboard()
```lua
SetNextFrameWantCaptureKeyboard(want_capture_keyboard:boolean)
```
- **Description**: Set next frame keyboard capture
- **Parameters**: `want_capture_keyboard:boolean` - Want capture keyboard
- **Returns**: None

---

### SetNextFrameWantCaptureMouse()
```lua
SetNextFrameWantCaptureMouse(want_capture_mouse:boolean)
```
- **Description**: Set next frame mouse capture
- **Parameters**: `want_capture_mouse:boolean` - Want capture mouse
- **Returns**: None
