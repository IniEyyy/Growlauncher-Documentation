# ID Management

Widget ID management functions for ImGui.

## Functions

---

### PushID()
```lua
PushID(str_id:string)
```
- **Description**: Pushes string ID
- **Parameters**: `str_id:string` - String ID
- **Returns**: None

---

### PushID()
```lua
PushID(int_id:integer)
```
- **Description**: Pushes integer ID
- **Parameters**: `int_id:integer` - Integer ID
- **Returns**: None

---

### PushID()
```lua
PushID(ptr_id:userdata)
```
- **Description**: Pushes pointer ID
- **Parameters**: `ptr_id:userdata` - Pointer ID
- **Returns**: None

---

### PopID()
```lua
PopID()
```
- **Description**: Pops ID
- **Returns**: None

---

### GetID()
```lua
GetID(str_id:string) -> integer
```
- **Description**: Gets ID from string
- **Parameters**: `str_id:string` - String ID
- **Returns**: `integer` - Integer ID
