# Tile Namespace

## Functions

| Function       | Params                              | Return            | Description                    | Example                                                 |
| :-             | :-                                  | :-                | :-                             | :-                                                      |
| `tile.getTile` | `x:number`, `y:number`              | [`Tile`](#tile)   | Get tile at coordinates        | `tile.getTile(GetLocal().posX//32,GetLocal().posY//32)` |
| `tile.setFg`   | [`Tile`](#tile), `itemid:number`    | -                 | Change foreground visually     | `tile.setFg(tile.getTile(GetLocal().posX//32,GetLocal().posY//32), 7188)` |
| `tile.setBg`   | [`Tile`](#tile), `itemid:number`    | -                 | Change background visually     | `tile.setBg(tile.getTile(GetLocal().posX//32,GetLocal().posY//32), 18)` |

The same two functions are also registered as globals. Both forms take the tile table first and the item ID second.

| Function | Params                           | Return | Description                | Example                              |
| :-       | :-                               | :-     | :-                         | :-                                   |
| `setFg`  | [`Tile`](#tile), `itemid:number` | -      | Change foreground visually | `setFg(getTile(10,5), 7188)`         |
| `setBg`  | [`Tile`](#tile), `itemid:number` | -      | Change background visually | `setBg(getTile(10,5), 18)`           |
