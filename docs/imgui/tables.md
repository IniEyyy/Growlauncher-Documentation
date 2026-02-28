# Tables

Table creation functions for ImGui.

## Functions

---

### BeginTable()
```lua
BeginTable(str_id:string, column:integer, flags:ImGuiTableFlags|nil, outer_size:ImVec2|nil, inner_width:number|nil) -> boolean
```
- **Description**: Begins table
- **Parameters**: 
  - `str_id:string` - Table string ID
  - `column:integer` - Number of columns
  - `flags:ImGuiTableFlags|nil` - Table flags (optional)
  - `outer_size:ImVec2|nil` - Outer size (optional)
  - `inner_width:number|nil` - Inner width (optional)
- **Returns**: `boolean` - Table is open

---

### EndTable()
```lua
EndTable()
```
- **Description**: Ends table
- **Returns**: None

---

### TableNextRow()
```lua
TableNextRow(row_flags:ImGuiTableRowFlags|nil, min_row_height:number|nil)
```
- **Description**: Advances to next row
- **Parameters**: 
  - `row_flags:ImGuiTableRowFlags|nil` - Row flags (optional)
  - `min_row_height:number|nil` - Minimum row height (optional)
- **Returns**: None

---

### TableNextColumn()
```lua
TableNextColumn() -> boolean
```
- **Description**: Advances to next column
- **Returns**: `boolean` - Column is valid

---

### TableSetColumnIndex()
```lua
TableSetColumnIndex(column_n:integer) -> boolean
```
- **Description**: Sets current column index
- **Parameters**: `column_n:integer` - Column index
- **Returns**: `boolean` - Column is valid

---

### TableSetupColumn()
```lua
TableSetupColumn(label:string, flags:ImGuiTableColumnFlags|nil, init_width_or_weight:number|nil, user_id:integer|nil)
```
- **Description**: Sets up column
- **Parameters**: 
  - `label:string` - Column label
  - `flags:ImGuiTableColumnFlags|nil` - Column flags (optional)
  - `init_width_or_weight:number|nil` - Initial width or weight (optional)
  - `user_id:integer|nil` - User ID (optional)
- **Returns**: None

---

### TableSetupScrollFreeze()
```lua
TableSetupScrollFreeze(cols:integer, rows:integer)
```
- **Description**: Sets up scroll freeze
- **Parameters**: 
  - `cols:integer` - Number of columns to freeze
  - `rows:integer` - Number of rows to freeze
- **Returns**: None

---

### TableHeadersRow()
```lua
TableHeadersRow()
```
- **Description**: Creates headers row
- **Returns**: None

---

### TableHeader()
```lua
TableHeader(label:string)
```
- **Description**: Creates header
- **Parameters**: `label:string` - Header label
- **Returns**: None

---

### TableGetSortSpecs()
```lua
TableGetSortSpecs() -> ImGuiTableSortSpecs
```
- **Description**: Gets table sort specifications
- **Returns**: `ImGuiTableSortSpecs` - Sort specifications

---

### TableGetColumnCount()
```lua
TableGetColumnCount() -> integer
```
- **Description**: Gets table column count
- **Returns**: `integer` - Column count

---

### TableGetColumnIndex()
```lua
TableGetColumnIndex() -> integer
```
- **Description**: Gets current column index
- **Returns**: `integer` - Column index

---

### TableGetRowIndex()
```lua
TableGetRowIndex() -> integer
```
- **Description**: Gets current row index
- **Returns**: `integer` - Row index

---

### TableGetColumnName()
```lua
TableGetColumnName(column_n:integer|nil) -> string
```
- **Description**: Gets column name
- **Parameters**: `column_n:integer|nil` - Column index (optional)
- **Returns**: `string` - Column name

---

### TableGetColumnFlags()
```lua
TableGetColumnFlags(column_n:integer|nil) -> ImGuiTableColumnFlags
```
- **Description**: Gets column flags
- **Parameters**: `column_n:integer|nil` - Column index (optional)
- **Returns**: `ImGuiTableColumnFlags` - Column flags

---

### TableSetColumnEnabled()
```lua
TableSetColumnEnabled(column_n:integer, enabled:boolean)
```
- **Description**: Sets column enabled state
- **Parameters**: 
  - `column_n:integer` - Column index
  - `enabled:boolean` - Enabled state
- **Returns**: None

---

### TableSetBgColor()
```lua
TableSetBgColor(target:ImGuiTableBgTarget, color:integer, column_n:integer|nil)
```
- **Description**: Sets table background color
- **Parameters**: 
  - `target:ImGuiTableBgTarget` - Color target
  - `color:integer` - Color
  - `column_n:integer|nil` - Column index (optional)
- **Returns**: None

---

### TableGetCellBgColor()
```lua
TableGetCellBgColor(column_n:integer|nil) -> integer
```
- **Description**: Gets cell background color
- **Parameters**: `column_n:integer|nil` - Column index (optional)
- **Returns**: `integer` - Cell background color

---

### TableGetBorderSize()
```lua
TableGetBorderSize() -> number
```
- **Description**: Gets table border size
- **Returns**: `number` - Border size

---

### TableGetColumnWidth()
```lua
TableGetColumnWidth(column_n:integer) -> number
```
- **Description**: Gets column width
- **Parameters**: `column_n:integer` - Column index
- **Returns**: `number` - Column width

---

### TableSetColumnWidth()
```lua
TableSetColumnWidth(column_n:integer, width:number)
```
- **Description**: Sets column width
- **Parameters**: 
  - `column_n:integer` - Column index
  - `width:number` - Column width
- **Returns**: None

---

### TableGetColumnWidthAuto()
```lua
TableGetColumnWidthAuto(column_n:integer) -> number
```
- **Description**: Gets column auto width
- **Parameters**: `column_n:integer` - Column index
- **Returns**: `number` - Auto width

---

### TableIsColumnHidden()
```lua
TableIsColumnHidden(column_n:integer) -> boolean
```
- **Description**: Checks if column is hidden
- **Parameters**: `column_n:integer` - Column index
- **Returns**: `boolean` - Column is hidden

---

### TableIsColumnSorted()
```lua
TableIsColumnSorted(column_n:integer) -> boolean
```
- **Description**: Checks if column is sorted
- **Parameters**: `column_n:integer` - Column index
- **Returns**: `boolean` - Column is sorted

---

### TableIsColumnHovered()
```lua
TableIsColumnHovered(column_n:integer) -> boolean
```
- **Description**: Checks if column is hovered
- **Parameters**: `column_n:integer` - Column index
- **Returns**: `boolean` - Column is hovered

---

### TableIsColumnResized()
```lua
TableIsColumnResized(column_n:integer) -> boolean
```
- **Description**: Checks if column is being resized
- **Parameters**: `column_n:integer` - Column index
- **Returns**: `boolean` - Column is being resized

---

### TableGetHoveredColumn()
```lua
TableGetHoveredColumn() -> integer
```
- **Description**: Gets hovered column index
- **Returns**: `integer` - Column index

---

### TableGetHoveredRow()
```lua
TableGetHoveredRow() -> integer
```
- **Description**: Gets hovered row index
- **Returns**: `integer` - Row index

---

### TableGetSelectedColumn()
```lua
TableGetSelectedColumn() -> integer
```
- **Description**: Gets selected column index
- **Returns**: `integer` - Column index

---

### TableGetSelectedRow()
```lua
TableGetSelectedRow() -> integer
```
- **Description**: Gets selected row index
- **Returns**: `integer` - Row index

---

### TableGetSortSpecs()
```lua
TableGetSortSpecs() -> ImGuiTableSortSpecs
```
- **Description**: Gets table sort specifications
- **Returns**: `ImGuiTableSortSpecs` - Sort specifications

---

### TableGetSortSpecsDirty()
```lua
TableGetSortSpecsDirty() -> boolean
```
- **Description**: Checks if sort specifications are dirty
- **Returns**: `boolean` - Sort specifications are dirty

---

### TableGetSortSpecsSingle()
```lua
TableGetSortSpecsSingle() -> ImGuiTableColumnSortSpecs
```
- **Description**: Gets single sort specification
- **Returns**: `ImGuiTableColumnSortSpecs` - Sort specification

---

### TableGetSortSpecsMulti()
```lua
TableGetSortSpecsMulti() -> ImGuiTableColumnSortSpecs[]
```
- **Description**: Gets multiple sort specifications
- **Returns**: `ImGuiTableColumnSortSpecs[]` - Sort specifications array

---

### TableGetSortSpecsCount()
```lua
TableGetSortSpecsCount() -> integer
```
- **Description**: Gets sort specifications count
- **Returns**: `integer` - Sort specifications count

---

### TableGetSortSpecsClear()
```lua
TableGetSortSpecsClear()
```
- **Description**: Clears sort specifications
- **Returns**: None

---

### TableGetSortSpecsSwap()
```lua
TableGetSortSpecsSwap(idx_a:integer, idx_b:integer)
```
- **Description**: Swaps sort specifications
- **Parameters**: 
  - `idx_a:integer` - First index
  - `idx_b:integer` - Second index
- **Returns**: None

---

### TableGetSortSpecsApply()
```lua
TableGetSortSpecsApply()
```
- **Description**: Applies sort specifications
- **Returns**: None

---

### TableGetSortSpecsIsDirty()
```lua
TableGetSortSpecsIsDirty() -> boolean
```
- **Description**: Checks if sort specifications are dirty
- **Returns**: `boolean` - Sort specifications are dirty

---

### TableGetSortSpecsReset()
```lua
TableGetSortSpecsReset()
```
- **Description**: Resets sort specifications
- **Returns**: None
