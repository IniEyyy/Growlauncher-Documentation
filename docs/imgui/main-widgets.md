# Main Widgets

Primary interactive widgets for ImGui.

## Functions

---

### Button()
```lua
Button(label:string, size:ImVec2|nil) -> boolean
```
- **Description**: Creates a button
- **Parameters**: 
  - `label:string` - Button label
  - `size:ImVec2|nil` - Button size (optional)
- **Returns**: `boolean` - Button clicked

---

### SmallButton()
```lua
SmallButton(label:string) -> boolean
```
- **Description**: Creates a small button
- **Parameters**: `label:string` - Button label
- **Returns**: `boolean` - Button clicked

---

### InvisibleButton()
```lua
InvisibleButton(str_id:string, size:ImVec2, flags:ImGuiButtonFlags|nil) -> boolean
```
- **Description**: Creates invisible button
- **Parameters**: 
  - `str_id:string` - Button ID
  - `size:ImVec2` - Button size
  - `flags:ImGuiButtonFlags|nil` - Button flags (optional)
- **Returns**: `boolean` - Button clicked

---

### ArrowButton()
```lua
ArrowButton(str_id:string, dir:ImGuiDir) -> boolean
```
- **Description**: Creates arrow button
- **Parameters**: 
  - `str_id:string` - Button ID
  - `dir:ImGuiDir` - Arrow direction
- **Returns**: `boolean` - Button clicked

---

### DragFloat()
```lua
DragFloat(label:string, v:number, v_speed:number|nil, v_min:number|nil, v_max:number|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number
```
- **Description**: Drag for float value
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number` - Value reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:number|nil` - Minimum value (optional)
  - `v_max:number|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number` - Active state, current value

---

### DragFloat2()
```lua
DragFloat2(label:string, v:number[], v_speed:number|nil, v_min:number|nil, v_max:number|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number[]
```
- **Description**: Drag for 2 float values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:number|nil` - Minimum value (optional)
  - `v_max:number|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number[]` - Active state, current values

---

### DragFloat3()
```lua
DragFloat3(label:string, v:number[], v_speed:number|nil, v_min:number|nil, v_max:number|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number[]
```
- **Description**: Drag for 3 float values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:number|nil` - Minimum value (optional)
  - `v_max:number|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number[]` - Active state, current values

---

### DragFloat4()
```lua
DragFloat4(label:string, v:number[], v_speed:number|nil, v_min:number|nil, v_max:number|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number[]
```
- **Description**: Drag for 4 float values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:number|nil` - Minimum value (optional)
  - `v_max:number|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number[]` - Active state, current values

---

### DragFloatRange2()
```lua
DragFloatRange2(label:string, v_current_min:number, v_current_max:number, v_speed:number|nil, v_min:number|nil, v_max:number|nil, format:string|nil, format_max:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number, number
```
- **Description**: Drag for float range
- **Parameters**: 
  - `label:string` - Widget label
  - `v_current_min:number` - Current minimum value
  - `v_current_max:number` - Current maximum value
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:number|nil` - Minimum value (optional)
  - `v_max:number|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `format_max:string|nil` - Max format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number, number` - Active state, min value, max value

---

### DragInt()
```lua
DragInt(label:string, v:integer, v_speed:number|nil, v_min:integer|nil, v_max:integer|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer
```
- **Description**: Drag for integer value
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer` - Value reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:integer|nil` - Minimum value (optional)
  - `v_max:integer|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer` - Active state, current value

---

### DragInt2()
```lua
DragInt2(label:string, v:integer[], v_speed:number|nil, v_min:integer|nil, v_max:integer|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer[]
```
- **Description**: Drag for 2 integer values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:integer|nil` - Minimum value (optional)
  - `v_max:integer|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer[]` - Active state, current values

---

### DragInt3()
```lua
DragInt3(label:string, v:integer[], v_speed:number|nil, v_min:integer|nil, v_max:integer|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer[]
```
- **Description**: Drag for 3 integer values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:integer|nil` - Minimum value (optional)
  - `v_max:integer|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer[]` - Active state, current values

---

### DragInt4()
```lua
DragInt4(label:string, v:integer[], v_speed:number|nil, v_min:integer|nil, v_max:integer|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer[]
```
- **Description**: Drag for 4 integer values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:integer|nil` - Minimum value (optional)
  - `v_max:integer|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer[]` - Active state, current values

---

### DragIntRange2()
```lua
DragIntRange2(label:string, v_current_min:integer, v_current_max:integer, v_speed:number|nil, v_min:integer|nil, v_max:integer|nil, format:string|nil, format_max:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer, integer
```
- **Description**: Drag for integer range
- **Parameters**: 
  - `label:string` - Widget label
  - `v_current_min:integer` - Current minimum value
  - `v_current_max:integer` - Current maximum value
  - `v_speed:number|nil` - Drag speed (optional)
  - `v_min:integer|nil` - Minimum value (optional)
  - `v_max:integer|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `format_max:string|nil` - Max format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer, integer` - Active state, min value, max value

---

### DragScalar()
```lua
DragScalar(label:string, data_type:ImGuiDataType, p_data:any, v_speed:number|nil, p_min:any|nil, p_max:any|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean
```
- **Description**: Drag for scalar value
- **Parameters**: 
  - `label:string` - Widget label
  - `data_type:ImGuiDataType` - Data type
  - `p_data:any` - Data reference
  - `v_speed:number|nil` - Drag speed (optional)
  - `p_min:any|nil` - Minimum value (optional)
  - `p_max:any|nil` - Maximum value (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean` - Active state

---

### SliderFloat()
```lua
SliderFloat(label:string, v:number, v_min:number, v_max:number, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number
```
- **Description**: Slider for float value
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number` - Value reference
  - `v_min:number` - Minimum value
  - `v_max:number` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number` - Active state, current value

---

### SliderFloat2()
```lua
SliderFloat2(label:string, v:number[], v_min:number, v_max:number, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number[]
```
- **Description**: Slider for 2 float values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `v_min:number` - Minimum value
  - `v_max:number` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number[]` - Active state, current values

---

### SliderFloat3()
```lua
SliderFloat3(label:string, v:number[], v_min:number, v_max:number, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number[]
```
- **Description**: Slider for 3 float values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `v_min:number` - Minimum value
  - `v_max:number` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number[]` - Active state, current values

---

### SliderFloat4()
```lua
SliderFloat4(label:string, v:number[], v_min:number, v_max:number, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number[]
```
- **Description**: Slider for 4 float values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:number[]` - Value array reference
  - `v_min:number` - Minimum value
  - `v_max:number` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number[]` - Active state, current values

---

### SliderAngle()
```lua
SliderAngle(label:string, v_rad:number, v_degrees_min:number|nil, v_degrees_max:number|nil, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number
```
- **Description**: Slider for angle in radians
- **Parameters**: 
  - `label:string` - Widget label
  - `v_rad:number` - Value in radians
  - `v_degrees_min:number|nil` - Minimum degrees (optional)
  - `v_degrees_max:number|nil` - Maximum degrees (optional)
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number` - Active state, current value

---

### SliderInt()
```lua
SliderInt(label:string, v:integer, v_min:integer, v_max:integer, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer
```
- **Description**: Slider for integer value
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer` - Value reference
  - `v_min:integer` - Minimum value
  - `v_max:integer` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer` - Active state, current value

---

### SliderInt2()
```lua
SliderInt2(label:string, v:integer[], v_min:integer, v_max:integer, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer[]
```
- **Description**: Slider for 2 integer values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `v_min:integer` - Minimum value
  - `v_max:integer` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer[]` - Active state, current values

---

### SliderInt3()
```lua
SliderInt3(label:string, v:integer[], v_min:integer, v_max:integer, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer[]
```
- **Description**: Slider for 3 integer values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `v_min:integer` - Minimum value
  - `v_max:integer` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer[]` - Active state, current values

---

### SliderInt4()
```lua
SliderInt4(label:string, v:integer[], v_min:integer, v_max:integer, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer[]
```
- **Description**: Slider for 4 integer values
- **Parameters**: 
  - `label:string` - Widget label
  - `v:integer[]` - Value array reference
  - `v_min:integer` - Minimum value
  - `v_max:integer` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer[]` - Active state, current values

---

### SliderScalar()
```lua
SliderScalar(label:string, data_type:ImGuiDataType, p_data:any, p_min:any, p_max:any, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean
```
- **Description**: Slider for scalar value
- **Parameters**: 
  - `label:string` - Widget label
  - `data_type:ImGuiDataType` - Data type
  - `p_data:any` - Data reference
  - `p_min:any` - Minimum value
  - `p_max:any` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean` - Active state

---

### VSliderFloat()
```lua
VSliderFloat(label:string, size:ImVec2, v:number, v_min:number, v_max:number, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, number
```
- **Description**: Vertical slider for float
- **Parameters**: 
  - `label:string` - Widget label
  - `size:ImVec2` - Slider size
  - `v:number` - Value reference
  - `v_min:number` - Minimum value
  - `v_max:number` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, number` - Active state, current value

---

### VSliderInt()
```lua
VSliderInt(label:string, size:ImVec2, v:integer, v_min:integer, v_max:integer, format:string|nil, flags:ImGuiSliderFlags|nil) -> boolean, integer
```
- **Description**: Vertical slider for integer
- **Parameters**: 
  - `label:string` - Widget label
  - `size:ImVec2` - Slider size
  - `v:integer` - Value reference
  - `v_min:integer` - Minimum value
  - `v_max:integer` - Maximum value
  - `format:string|nil` - Format string (optional)
  - `flags:ImGuiSliderFlags|nil` - Slider flags (optional)
- **Returns**: `boolean, integer` - Active state, current value

---

### Checkbox()
```lua
Checkbox(label:string, v:boolean) -> boolean, boolean
```
- **Description**: Checkbox widget
- **Parameters**: 
  - `label:string` - Checkbox label
  - `v:boolean` - Value reference
- **Returns**: `boolean, boolean` - Active state, current value

---

### CheckboxFlags()
```lua
CheckboxFlags(label:string, flags:integer, flags_value:integer) -> boolean, integer
```
- **Description**: Checkbox for flags
- **Parameters**: 
  - `label:string` - Checkbox label
  - `flags:integer` - Flags value
  - `flags_value:integer` - Flags reference
- **Returns**: `boolean, integer` - Active state, current flags

---

### RadioButton()
```lua
RadioButton(label:string, active:boolean) -> boolean
```
- **Description**: Radio button
- **Parameters**: 
  - `label:string` - Button label
  - `active:boolean` - Active state
- **Returns**: `boolean` - Button clicked

---

### RadioButtonInt()
```lua
RadioButtonInt(label:string, v:integer, v_button:integer) -> boolean, integer
```
- **Description**: Radio button returning integer
- **Parameters**: 
  - `label:string` - Button label
  - `v:integer` - Value reference
  - `v_button:integer` - Button value
- **Returns**: `boolean, integer` - Button clicked, current value

---

### ProgressBar()
```lua
ProgressBar(fraction:number, size_arg:ImVec2|nil, overlay:string|nil)
```
- **Description**: Progress bar
- **Parameters**: 
  - `fraction:number` - Progress fraction
  - `size_arg:ImVec2|nil` - Size argument (optional)
  - `overlay:string|nil` - Overlay text (optional)
- **Returns**: None

---

### TreeNode()
```lua
TreeNode(label:string, flags:ImGuiTreeNodeFlags|nil) -> boolean
```
- **Description**: Tree node with label
- **Parameters**: 
  - `label:string` - Node label
  - `flags:ImGuiTreeNodeFlags|nil` - Tree flags (optional)
- **Returns**: `boolean` - Node open

---

### TreeNode()
```lua
TreeNode(str_id:string, flags:ImGuiTreeNodeFlags|nil, fmt:string, ...:any) -> boolean
```
- **Description**: Tree node with string ID and format
- **Parameters**: 
  - `str_id:string` - String ID
  - `flags:ImGuiTreeNodeFlags|nil` - Tree flags (optional)
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: `boolean` - Node open

---

### TreeNode()
```lua
TreeNode(ptr_id:userdata, flags:ImGuiTreeNodeFlags|nil, fmt:string, ...:any) -> boolean
```
- **Description**: Tree node with pointer ID and format
- **Parameters**: 
  - `ptr_id:userdata` - Pointer ID
  - `flags:ImGuiTreeNodeFlags|nil` - Tree flags (optional)
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: `boolean` - Node open

---

### TreePush()
```lua
TreePush()
```
- **Description**: Pushes tree node
- **Returns**: None

---

### TreePush()
```lua
TreePush(str_id:string)
```
- **Description**: Pushes tree node with string ID
- **Parameters**: `str_id:string` - String ID
- **Returns**: None

---

### TreePush()
```lua
TreePush(ptr_id:userdata)
```
- **Description**: Pushes tree node with pointer ID
- **Parameters**: `ptr_id:userdata` - Pointer ID
- **Returns**: None

---

### TreePop()
```lua
TreePop()
```
- **Description**: Pops tree node
- **Returns**: None

---

### GetTreeNodeToLabelSpacing()
```lua
GetTreeNodeToLabelSpacing() -> number
```
- **Description**: Gets tree node to label spacing
- **Returns**: `number` - Spacing value

---

### CollapsingHeader()
```lua
CollapsingHeader(label:string, flags:ImGuiTreeNodeFlags|nil) -> boolean
```
- **Description**: Collapsing header
- **Parameters**: 
  - `label:string` - Header label
  - `flags:ImGuiTreeNodeFlags|nil` - Tree flags (optional)
- **Returns**: `boolean` - Header open

---

### CollapsingHeader()
```lua
CollapsingHeader(label:string, p_open:boolean, flags:ImGuiTreeNodeFlags|nil) -> boolean, boolean
```
- **Description**: Collapsing header with open state
- **Parameters**: 
  - `label:string` - Header label
  - `p_open:boolean` - Open state reference
  - `flags:ImGuiTreeNodeFlags|nil` - Tree flags (optional)
- **Returns**: `boolean, boolean` - Header open, current state

---

### ListBox()
```lua
ListBox(label:string, current_item:integer, items:string[], height_in_items:integer|nil) -> boolean, integer
```
- **Description**: List box
- **Parameters**: 
  - `label:string` - List label
  - `current_item:integer` - Current item index
  - `items:string[]` - Item list
  - `height_in_items:integer|nil` - Height in items (optional)
- **Returns**: `boolean, integer` - Item clicked, current item

---

### ListBox()
```lua
ListBox(label:string, current_item:integer, items_getter:function, data:userdata, items_count:integer, height_in_items:integer|nil) -> boolean, integer
```
- **Description**: List box with callback
- **Parameters**: 
  - `label:string` - List label
  - `current_item:integer` - Current item index
  - `items_getter:function` - Item getter callback
  - `data:userdata` - User data
  - `items_count:integer` - Item count
  - `height_in_items:integer|nil` - Height in items (optional)
- **Returns**: `boolean, integer` - Item clicked, current item

---

### BeginListBox()
```lua
BeginListBox(label:string, size:ImVec2|nil) -> boolean
```
- **Description**: Begins a list box
- **Parameters**: 
  - `label:string` - List label
  - `size:ImVec2|nil` - List size (optional)
- **Returns**: `boolean` - List open

---

### EndListBox()
```lua
EndListBox()
```
- **Description**: Ends a list box
- **Returns**: None

---

### BeginCombo()
```lua
BeginCombo(label:string, preview_value:string, flags:ImGuiComboFlags|nil) -> boolean
```
- **Description**: Begins a combo box
- **Parameters**: 
  - `label:string` - Combo label
  - `preview_value:string` - Preview value
  - `flags:ImGuiComboFlags|nil` - Combo flags (optional)
- **Returns**: `boolean` - Combo open

---

### EndCombo()
```lua
EndCombo()
```
- **Description**: Ends a combo box
- **Returns**: None

---

### Combo()
```lua
Combo(label:string, current_item:integer, items:string[], popup_max_height_in_items:integer|nil) -> boolean, integer
```
- **Description**: Combo box
- **Parameters**: 
  - `label:string` - Combo label
  - `current_item:integer` - Current item index
  - `items:string[]` - Item list
  - `popup_max_height_in_items:integer|nil` - Max height in items (optional)
- **Returns**: `boolean, integer` - Item clicked, current item

---

### Combo()
```lua
Combo(label:string, current_item:integer, items_getter:function, data:userdata, items_count:integer, popup_max_height_in_items:integer|nil) -> boolean, integer
```
- **Description**: Combo box with callback
- **Parameters**: 
  - `label:string` - Combo label
  - `current_item:integer` - Current item index
  - `items_getter:function` - Item getter callback
  - `data:userdata` - User data
  - `items_count:integer` - Item count
  - `popup_max_height_in_items:integer|nil` - Max height in items (optional)
- **Returns**: `boolean, integer` - Item clicked, current item
