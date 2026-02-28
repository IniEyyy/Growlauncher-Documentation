# World & Game State

Functions for getting world information, tile data, and game state.

## Functions

### getTile
```lua
getTile(x:number, y:number) -> Tile
```
Get tile at coordinates.

**Parameters:**
- `x` (number) - X coordinate
- `y` (number) - Y coordinate

**Returns:**
- [`Tile`](/structs/tiles#tile) - Tile data

**Example:**
```lua
log(getTile(10,5).fg)
```

### getTiles
```lua
getTiles() -> Tile[]
```
Get all tiles.

**Returns:**
- [`Tile[]`](/structs/tiles#tile) - Array of tiles

**Example:**
```lua
for _,i in pairs(getTiles()) do log(i.fg) end
```

### FindPath
```lua
FindPath(x:number, y:number, check_only?:boolean) -> boolean
```
Pathfinding check.

**Parameters:**
- `x` (number) - X coordinate
- `y` (number) - Y coordinate
- `check_only` (boolean, optional) - Check only mode

**Returns:**
- `boolean` - Path exists

**Example:**
```lua
FindPath(10,5,true)
```

### isInside
```lua
isInside(cx:number, cy:number, rad:number, x:number, y:number) -> boolean
```
Check if point is inside circle.

**Parameters:**
- `cx` (number) - Circle center X
- `cy` (number) - Circle center Y
- `rad` (number) - Circle radius
- `x` (number) - Point X
- `y` (number) - Point Y

**Returns:**
- `boolean` - Inside circle

**Example:**
```lua
isInside(0,0,10,5,5)
```

### getNPCList
```lua
getNPCList() -> ClientNPC[]
```
Get list of client-side NPCs.

**Returns:**
- [`ClientNPC[]`](/structs/npc#clientnpc) - NPC list

**Example:**
```lua
for _,n in pairs(getNPCList()) do log(n.id) end
```

### getPlayerList
```lua
getPlayerList() -> NetAvatar[]
```
Get list of players.

**Returns:**
- [`NetAvatar[]`](/structs/player#netavatar) - Player list

**Example:**
```lua
for _,plr in pairs(getPlayerList())) do log(plr.name) end
```

### getObjectList
```lua
getObjectList() -> WorldObject[]
```
Get list of world objects.

**Returns:**
- [`WorldObject[]`](/structs/game-objects#worldobject) - Object list

**Example:**
```lua
for _,obj in pairs(objs) do log(obj.itemid) end
```

### getWorldTileMap
```lua
getWorldTileMap() -> WorldTileMap
```
Get world tile map.

**Returns:**
- [`WorldTileMap`](/structs/worldtilemap) - World tile map

**Example:**
```lua
log(getWorldTileMap().x)
```

### getPlayerByNetID
```lua
getPlayerByNetID(netid:number) -> NetAvatar
```
Get player by NetID.

**Parameters:**
- `netid` (number) - Network ID

**Returns:**
- [`NetAvatar`](/structs/player#netavatar) - Player

**Example:**
```lua
log(getPlayerByNetID(1).name)
```

### GetWorldName / getCurrentWorldName
```lua
GetWorldName() -> string
getCurrentWorldName() -> string
```
Get current world name.

**Returns:**
- `string` - World name

**Example:**
```lua
log(GetWorldName())
```
