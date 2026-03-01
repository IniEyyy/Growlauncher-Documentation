# Item Info

Functions for getting item information and finding items by name or ID.

## Functions

---

### findItemID()
`findItemID(itemname:string) -> number`
- **Description**: Find item ID by name
- **Parameters**: 
    - `itemname` (string) - Item name
- **Returns**: 
    - `number` - Item ID
- **Example**:
    ```lua
    log(findItemID("Dirt"))
    ```

---

### getItemInfoByID()
`getItemInfoByID(id:number) -> ItemInfo`
- **Description**: Get item info by ID
- **Parameters**: 
    - `id` (number) - Item ID
- **Returns**: 
    - [`ItemInfo`](/structs/tiles#iteminfo) - Item information
- **Example**:
    ```lua
    log(getItemInfoByID(2).name)
    ```

---

### getItemInfoByName()
`getItemInfoByName(name:string) -> ItemInfo`
- **Description**: Get item info by name
- **Parameters**: 
    - `name` (string) - Item name
- **Returns**: 
    - [`ItemInfo`](/structs/tiles#iteminfo) - Item information
- **Example**:
    ```lua
    log(getItemInfoByName("Dirt").id)
    ```
