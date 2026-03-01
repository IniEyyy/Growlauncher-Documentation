# World & Game State

Functions for getting world information, tile data, and game state.

## Functions

### getTile()
`getTile(x:number, y:number) -> Tile`
- **Description**: Get tile at coordinates
- **Parameters**: 
  - `x` (number) - X coordinate
  - `y` (number) - Y coordinate
- **Returns**: 
  - [`Tile`](/structs/tiles#tile) - Tile data
- **Example**:
    ```lua
    log(getTile(10,5).fg)
    ```

### getTiles()
`getTiles() -> Tile[]`
- **Description**: Get all tiles
- **Returns**: 
    - [`Tile[]`](/structs/tiles#tile) - Array of tiles
- **Example**:
    ```lua
    for _,i in pairs(getTiles())
        do log(i.fg)
    end
    ```

### FindPath()
`FindPath(x:number, y:number, check_only?:boolean) -> boolean`
- **Description**: Pathfinding check
- **Parameters**: 
  - `x` (number) - X coordinate
  - `y` (number) - Y coordinate
  - `check_only` (boolean, optional) - Check only mode
- **Returns**: `isBlocked: boolean`
- `boolean` - Path exists

- **Example**:
    ```lua
    local isBlocked = FindPath(10,5,true)
    ```

### isInside()
`isInside(cx:number, cy:number, rad:number, x:number, y:number) -> boolean`
- **Description**: Check if point is inside circle.
- **Parameters**:
    - `cx` (number) - Circle center X
    - `cy` (number) - Circle center Y
    - `rad` (number) - Circle radius
    - `x` (number) - Point X
    - `y` (number) - Point Y
- **Returns**: `boolean` - Inside circle
- **Example**:
    ```lua
    log(isInside(0,0,10,5,5))
    ```

### getNPCList()
`getNPCList() -> ClientNPC[]`
- **Description**: Get list of client-side NPCs.
- **Returns**: 
    - [`ClientNPC[]`](/structs/npc#clientnpc) - NPC list
- **Example**:
    ```lua
    for _,n in pairs(getNPCList()) do
        log(n.id) 
    end
    ```

### getPlayerList()
`getPlayerList() -> NetAvatar[]`
- **Description**: Get list of players.
- **Returns**: 
    - [`NetAvatar[]`](/structs/player#netavatar) - Player list
- **Example**:
    ```lua
    for _, player in pairs(getPlayerList()) do
        log(player.name)
    end
    ```

### getObjectList()
`getObjectList() -> WorldObject[]`
- **Description**: Get list of world objects.
- **Returns**: 
    - [`WorldObject[]`](/structs/game-objects#worldobject) - Object list
- **Example**:
    ```lua
    for _, object in pairs(getObjectList()) do
        log(object.itemid)
    end
    ```

### getWorldTileMap()
`getWorldTileMap() -> WorldTileMap`
- **Description**: Get world tile map.
- **Returns**: 
    - [`WorldTileMap`](/structs/worldtilemap) - World tile map
- **Example**:
    ```lua
    log(getWorldTileMap().x)
    ```

### getPlayerByNetID()
`getPlayerByNetID(netid:number) -> NetAvatar`
- **Description**: Get player by NetID.
- **Parameters**: 
    - `netid` (number) - Network ID
- **Returns**: 
    - [`NetAvatar`](/structs/player#netavatar) - Player
- **Example**:
    ```lua
    log(getPlayerByNetID(-1).name)
    ```

### GetWorldName() / getCurrentWorldName()
`GetWorldName() -> string` / `getCurrentWorldName() -> string`
- **Description**: Get current world name.
- **Returns**: 
    - `string` - World name
- **Example**:
    ```lua
    log(GetWorldName())
    ```
