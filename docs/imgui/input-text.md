# Input Text Widgets

Text input widgets for ImGui.

## Functions

---

### InputText()
```lua
InputText(label:string, buf:string, buf_size:integer, flags:ImGuiInputTextFlags|nil, callback:function|nil, user_data:userdata|nil) -> boolean, string
```
- **Description**: Text input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `buf:string` - Input buffer
  - `buf_size:integer` - Buffer size
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
  - `callback:function|nil` - Callback function (optional)
  - `user_data:userdata|nil` - User data (optional)
- **Returns**: `boolean, string` - Text changed, current text

---

### InputTextMultiline()
```lua
InputTextMultiline(label:string, buf:string, buf_size:integer, size:ImVec2|nil, flags:ImGuiInputTextFlags|nil, callback:function|nil, user_data:userdata|nil) -> boolean, string
```
- **Description**: Multiline text input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `buf:string` - Input buffer
  - `buf_size:integer` - Buffer size
  - `size:ImVec2|nil` - Widget size (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
  - `callback:function|nil` - Callback function (optional)
  - `user_data:userdata|nil` - User data (optional)
- **Returns**: `boolean, string` - Text changed, current text

---

### InputTextWithHint()
```lua
InputTextWithHint(label:string, hint:string, buf:string, buf_size:integer, flags:ImGuiInputTextFlags|nil, callback:function|nil, user_data:userdata|nil) -> boolean, string
```
- **Description**: Text input widget with hint
- **Parameters**: 
  - `label:string` - Widget label
  - `hint:string` - Hint text
  - `buf:string` - Input buffer
  - `buf_size:integer` - Buffer size
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
  - `callback:function|nil` - Callback function (optional)
  - `user_data:userdata|nil` - User data (optional)
- **Returns**: `boolean, string` - Text changed, current text

---

### InputFloat()
```lua
InputFloat(label:string, v:number, step:number|nil, step_fast:number|nil, format:string|nil, flags:ImGuiInputTextFlags|nil) -> boolean, number
```
- **Description**: Float input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number` - Value reference
  - `step:number|nil` - Step value (optional)
  - `step_fast:number|nil` - Fast step value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, number` - Value changed, current value

---

### InputFloat2()
```lua
InputFloat2(label:string, v:number[], format:string|nil, flags:ImGuiInputTextFlags|nil) -> boolean, number[]
```
- **Description**: 2D float input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, number[]` - Value changed, current values

---

### InputFloat3()
```lua
InputFloat3(label:string, v:number[], format:string|nil, flags:ImGuiInputTextFlags|nil) -> boolean, number[]
```
- **Description**: 3D float input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, number[]` - Value changed, current values

---

### InputFloat4()
```lua
InputFloat4(label:string, v:number[], format:string|nil, flags:ImGuiInputTextFlags|nil) -> boolean, number[]
```
- **Description**: 4D float input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, number[]` - Value changed, current values

---

### InputInt()
```lua
InputInt(label:string, v:integer, step:integer|nil, step_fast:integer|nil, flags:ImGuiInputTextFlags|nil) -> boolean, integer
```
- **Description**: Integer input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer` - Value reference
  - `step:integer|nil` - Step value (optional)
  - `step_fast:integer|nil` - Fast step value (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, integer` - Value changed, current value

---

### InputInt2()
```lua
InputInt2(label:string, v:integer[], flags:ImGuiInputTextFlags|nil) -> boolean, integer[]
```
- **Description**: 2D integer input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, integer[]` - Value changed, current values

---

### InputInt3()
```lua
InputInt3(label:string, v:integer[], flags:ImGuiInputTextFlags|nil) -> boolean, integer[]
```
- **Description**: 3D integer input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, integer[]` - Value changed, current values

---

### InputInt4()
```lua
InputInt4(label:string, v:integer[], flags:ImGuiInputTextFlags|nil) -> boolean, integer[]
```
- **Description**: 4D integer input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, integer[]` - Value changed, current values

---

### InputDouble()
```lua
InputDouble(label:string, v:number, step:number|nil, step_fast:number|nil, format:string|nil, flags:ImGuiInputTextFlags|nil) -> boolean, number
```
- **Description**: Double input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number` - Value reference
  - `step:number|nil` - Step value (optional)
  - `step_fast:number|nil` - Fast step value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean, number` - Value changed, current value

---

### InputScalar()
```lua
InputScalar(label:string, data_type:ImGuiDataType, p_data:any, p_step:any|nil, p_step_fast:any|nil, format:string|nil, flags:ImGuiInputTextFlags|nil) -> boolean
```
- **Description**: Scalar input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `data_type:ImGuiDataType` - Data type
  - `p_data:any` - Data reference
  - `p_step:any|nil` - Step value (optional)
  - `p_step_fast:any|nil` - Fast step value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean` - Value changed

---

### InputScalarN()
```lua
InputScalarN(label:string, data_type:ImGuiDataType, p_data:any, components:integer, p_step:any|nil, p_step_fast:any|nil, format:string|nil, flags:ImGuiInputTextFlags|nil) -> boolean
```
- **Description**: N-component scalar input widget
- **Parameters**: 
  - `label:string` - Widget label
  - `data_type:ImGuiDataType` - Data type
  - `p_data:any` - Data reference
  - `components:integer` - Number of components
  - `p_step:any|nil` - Step value (optional)
  - `p_step_fast:any|nil` - Fast step value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiInputTextFlags|nil` - Input text flags (optional)
- **Returns**: `boolean` - Value changed
