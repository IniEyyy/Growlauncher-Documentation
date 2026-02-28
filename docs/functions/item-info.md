# Item Info

Functions for getting item information and finding items by name or ID.

## Functions

---

### findItemID()
```lua
findItemID(itemname:string) -> number
```
- **Description**: Find item ID by name
- **Parameters**: `itemname` (string) - Item name
- **Returns**: `number` - Item ID
- **Example**: `log(findItemID("Dirt"))`

---

### getItemInfoByID()
```lua
getItemInfoByID(id:number) -> ItemInfo
```
- **Description**: Get item info by ID
- **Parameters**: `id` (number) - Item ID
- **Returns**: [`ItemInfo`](/structs/tiles#iteminfo) - Item information
- **Example**: `log(getItemInfoByID(2).name)`

---

### getItemInfoByName()
```lua
getItemInfoByName(name:string) -> ItemInfo
```
- **Description**: Get item info by name
- **Parameters**: `name` (string) - Item name
- **Returns**: [`ItemInfo`](/structs/tiles#iteminfo) - Item information
- **Example**: `log(getItemInfoByName("Dirt").id)`
