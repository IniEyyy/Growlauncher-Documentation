# Data Plotting

Data visualization widgets for ImGui.

## Functions

---

### PlotLines()
```lua
PlotLines(label:string, values:number[], values_count:integer, values_offset:integer|nil, overlay_text:string|nil, scale_min:number|nil, scale_max:number|nil, graph_size:ImVec2|nil, stride:integer|nil)
```
- **Description**: Plot lines
- **Parameters**: 
  - `label:string` - Plot label
  - `values:number[]` - Value array
  - `values_count:integer` - Number of values
  - `values_offset:integer|nil` - Values offset (optional)
  - `overlay_text:string|nil` - Overlay text (optional)
  - `scale_min:number|nil` - Scale minimum (optional)
  - `scale_max:number|nil` - Scale maximum (optional)
  - `graph_size:ImVec2|nil` - Graph size (optional)
  - `stride:integer|nil` - Stride (optional)
- **Returns**: None

---

### PlotLines()
```lua
PlotLines(label:string, values_getter:function, data:userdata, values_count:integer, values_offset:integer|nil, overlay_text:string|nil, scale_min:number|nil, scale_max:number|nil, graph_size:ImVec2|nil, stride:integer|nil)
```
- **Description**: Plot lines with callback
- **Parameters**: 
  - `label:string` - Plot label
  - `values_getter:function` - Value getter callback
  - `data:userdata` - User data
  - `values_count:integer` - Number of values
  - `values_offset:integer|nil` - Values offset (optional)
  - `overlay_text:string|nil` - Overlay text (optional)
  - `scale_min:number|nil` - Scale minimum (optional)
  - `scale_max:number|nil` - Scale maximum (optional)
  - `graph_size:ImVec2|nil` - Graph size (optional)
  - `stride:integer|nil` - Stride (optional)
- **Returns**: None

---

### PlotHistogram()
```lua
PlotHistogram(label:string, values:number[], values_count:integer, values_offset:integer|nil, overlay_text:string|nil, scale_min:number|nil, scale_max:number|nil, graph_size:ImVec2|nil, stride:integer|nil)
```
- **Description**: Plot histogram
- **Parameters**: 
  - `label:string` - Plot label
  - `values:number[]` - Value array
  - `values_count:integer` - Number of values
  - `values_offset:integer|nil` - Values offset (optional)
  - `overlay_text:string|nil` - Overlay text (optional)
  - `scale_min:number|nil` - Scale minimum (optional)
  - `scale_max:number|nil` - Scale maximum (optional)
  - `graph_size:ImVec2|nil` - Graph size (optional)
  - `stride:integer|nil` - Stride (optional)
- **Returns**: None

---

### PlotHistogram()
```lua
PlotHistogram(label:string, values_getter:function, data:userdata, values_count:integer, values_offset:integer|nil, overlay_text:string|nil, scale_min:number|nil, scale_max:number|nil, graph_size:ImVec2|nil, stride:integer|nil)
```
- **Description**: Plot histogram with callback
- **Parameters**: 
  - `label:string` - Plot label
  - `values_getter:function` - Value getter callback
  - `data:userdata` - User data
  - `values_count:integer` - Number of values
  - `values_offset:integer|nil` - Values offset (optional)
  - `overlay_text:string|nil` - Overlay text (optional)
  - `scale_min:number|nil` - Scale minimum (optional)
  - `scale_max:number|nil` - Scale maximum (optional)
  - `graph_size:ImVec2|nil` - Graph size (optional)
  - `stride:integer|nil` - Stride (optional)
- **Returns**: None
