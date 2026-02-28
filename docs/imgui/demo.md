# Demo & Debug Utilities

Demo and debug utilities for ImGui.

## Functions

---

### ShowDemoWindow()
```lua
ShowDemoWindow(p_open:boolean|nil)
```
- **Description**: Shows ImGui demo window
- **Parameters**: `p_open:boolean|nil` - Open state pointer (optional)
- **Returns**: None

---

### ShowMetricsWindow()
```lua
ShowMetricsWindow(p_open:boolean|nil)
```
- **Description**: Shows ImGui metrics window
- **Parameters**: `p_open:boolean|nil` - Open state pointer (optional)
- **Returns**: None

---

### ShowDebugLogWindow()
```lua
ShowDebugLogWindow(p_open:boolean|nil)
```
- **Description**: Shows ImGui debug log window
- **Parameters**: `p_open:boolean|nil` - Open state pointer (optional)
- **Returns**: None

---

### ShowStyleEditor()
```lua
ShowStyleEditor(ref:ImGuiStyle|nil)
```
- **Description**: Shows ImGui style editor
- **Parameters**: `ref:ImGuiStyle|nil` - Style reference (optional)
- **Returns**: None

---

### ShowStyleSelector()
```lua
ShowStyleSelector(label:string) -> boolean
```
- **Description**: Shows style selector
- **Parameters**: `label:string` - Label text
- **Returns**: `boolean` - Style was selected

---

### ShowFontSelector()
```lua
ShowFontSelector(label:string)
```
- **Description**: Shows font selector
- **Parameters**: `label:string` - Label text
- **Returns**: None

---

### ShowUserGuide()
```lua
ShowUserGuide()
```
- **Description**: Shows ImGui user guide
- **Returns**: None

---

### ShowAboutWindow()
```lua
ShowAboutWindow(p_open:boolean|nil)
```
- **Description**: Shows ImGui about window
- **Parameters**: `p_open:boolean|nil` - Open state pointer (optional)
- **Returns**: None

---

### ShowStackToolWindow()
```lua
ShowStackToolWindow(p_open:boolean|nil)
```
- **Description**: Shows ImGui stack tool window
- **Parameters**: `p_open:boolean|nil` - Open state pointer (optional)
- **Returns**: None

---

### GetVersion()
```lua
GetVersion() -> string
```
- **Description**: Returns ImGui version
- **Returns**: `string` - Version string
