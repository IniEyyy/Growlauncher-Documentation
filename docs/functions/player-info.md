# Player Info

Functions for getting player information and inventory data.

## Functions

---

### getGems()
```lua
getGems() -> number
```
- **Description**: Get current gem amount
- **Returns**: `number` - Gem amount
- **Example**: `log(getGems())`

---

### getLocal()
```lua
getLocal() -> NetAvatar
```
- **Description**: Get local player
- **Returns**: [`NetAvatar`](/structs/player#netavatar) - Local player data
- **Example**: `log(getLocal().name)`

---

### getInventory()
```lua
getInventory() -> InventoryItem[]
```
- **Description**: Get inventory items
- **Returns**: [`InventoryItem[]`](/structs/game-objects#inventoryitem) - Inventory items
- **Example**: `for _,item in pairs(getInventory()) do log(item.id) end`
