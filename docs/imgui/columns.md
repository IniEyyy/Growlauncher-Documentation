# Columns

Column layout functions for ImGui.

## Functions

---

### Columns()
```lua
Columns(count:integer|nil, id:string|nil, border:boolean|nil)
```
- **Description**: Begin columns
- **Parameters**: 
  - `count:integer|nil` - Number of columns (optional)
  - `id:string|nil` - Column ID (optional)
  - `border:boolean|nil` - Show borders (optional)
- **Returns**: None

---

### NextColumn()
```lua
NextColumn()
```
- **Description**: Next column
- **Returns**: None

---

### GetColumnIndex()
```lua
GetColumnIndex() -> integer
```
- **Description**: Gets current column index
- **Returns**: `integer` - Column index

---

### GetColumnWidth()
```lua
GetColumnWidth(column_index:integer|nil) -> number
```
- **Description**: Gets column width
- **Parameters**: `column_index:integer|nil` - Column index (optional)
- **Returns**: `number` - Column width

---

### SetColumnWidth()
```lua
SetColumnWidth(column_index:integer, width:number)
```
- **Description**: Sets column width
- **Parameters**: 
  - `column_index:integer` - Column index
  - `width:number` - Column width
- **Returns**: None

---

### GetColumnOffset()
```lua
GetColumnOffset(column_index:integer|nil) -> number
```
- **Description**: Gets column offset
- **Parameters**: `column_index:integer|nil` - Column index (optional)
- **Returns**: `number` - Column offset

---

### SetColumnOffset()
```lua
SetColumnOffset(column_index:integer, offset_x:number)
```
- **Description**: Sets column offset
- **Parameters**: 
  - `column_index:integer` - Column index
  - `offset_x:number` - Column offset
- **Returns**: None

---

### GetColumnsCount()
```lua
GetColumnsCount() -> integer
```
- **Description**: Gets number of columns
- **Returns**: `integer` - Column count
