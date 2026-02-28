# List Boxes

List display widgets for ImGui (Legacy).

## Functions

---

### ListBoxHeader()
```lua
ListBoxHeader(label:string, size:ImVec2|nil) -> boolean
```
- **Description**: Begins list box (legacy)
- **Parameters**: 
  - `label:string` - List label
  - `size:ImVec2|nil` - List size (optional)
- **Returns**: `boolean` - List is open

---

### ListBoxHeader()
```lua
ListBoxHeader(label:string, items_count:integer, height_in_items:integer|nil) -> boolean
```
- **Description**: Begins list box with item count (legacy)
- **Parameters**: 
  - `label:string` - List label
  - `items_count:integer` - Number of items
  - `height_in_items:integer|nil` - Height in items (optional)
- **Returns**: `boolean` - List is open

---

### ListBoxFooter()
```lua
ListBoxFooter()
```
- **Description**: Ends list box (legacy)
- **Returns**: None
