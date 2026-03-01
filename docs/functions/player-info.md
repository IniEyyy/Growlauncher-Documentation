# Player Info

Functions for getting player information and inventory data.

## Functions

---

### getGems()
`getGems() -> number`
- **Description**: Get current gem amount
- **Parameters**: 
    - None
- **Returns**: 
    - `number` - Gem amount
- **Example**:
    ```lua
    log(getGems())
    ```

---

### getLocal()
`getLocal() -> NetAvatar`
- **Description**: Get local player
- **Parameters**: 
    - None
- **Returns**: 
    - [`NetAvatar`](/structs/player#netavatar) - Local player data
- **Example**:
    ```lua
    log(getLocal().name)
    ```

---

### getInventory()
`getInventory() -> InventoryItem[]`
- **Description**: Get inventory items
- **Parameters**: 
    - None
- **Returns**: 
    - [`InventoryItem[]`](/structs/game-objects#inventoryitem) - Inventory items
- **Example**:
    ```lua
    for _,item in pairs(getInventory()) do
        log(item.id)
    end
    ```
