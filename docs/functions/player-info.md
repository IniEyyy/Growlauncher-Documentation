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
    - [`NetAvatar`](/structs/player#netavatar) - Local player data, or `nil` when no local avatar exists (for example at the login screen)
- **Note**:
    - The table is a serialized copy, not a live native object. `pos.x` and `pos.y` are confirmed integer fields; other fields come from the same native snapshot.
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
