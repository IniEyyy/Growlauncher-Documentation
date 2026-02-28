# Drag & Drop

Drag and drop functions for ImGui.

## Functions

---

### BeginDragDropSource()
```lua
BeginDragDropSource(flags:ImGuiDragDropFlags|nil) -> boolean
```
- **Description**: Begins drag drop source
- **Parameters**: `flags:ImGuiDragDropFlags|nil` - Drag drop flags (optional)
- **Returns**: `boolean` - Drag drop source is active

---

### SetDragDropPayload()
```lua
SetDragDropPayload(type:string, data:any, data_size:integer, cond:ImGuiCond|nil) -> boolean
```
- **Description**: Sets drag drop payload
- **Parameters**: 
  - `type:string` - Payload type
  - `data:any` - Payload data
  - `data_size:integer` - Data size
  - `cond:ImGuiCond|nil` - Condition (optional)
- **Returns**: `boolean` - Payload set successfully

---

### EndDragDropSource()
```lua
EndDragDropSource()
```
- **Description**: Ends drag drop source
- **Returns**: None

---

### BeginDragDropTarget()
```lua
BeginDragDropTarget() -> boolean
```
- **Description**: Begins drag drop target
- **Returns**: `boolean` - Drag drop target is active

---

### AcceptDragDropPayload()
```lua
AcceptDragDropPayload(type:string, flags:ImGuiDragDropFlags|nil) -> any
```
- **Description**: Accept drag drop payload
- **Parameters**: 
  - `type:string` - Payload type
  - `flags:ImGuiDragDropFlags|nil` - Drag drop flags (optional)
- **Returns**: `any` - Payload data

---

### GetDragDropPayload()
```lua
GetDragDropPayload() -> any
```
- **Description**: Gets drag drop payload
- **Returns**: `any` - Payload data

---

### EndDragDropTarget()
```lua
EndDragDropTarget()
```
- **Description**: Ends drag drop target
- **Returns**: None
