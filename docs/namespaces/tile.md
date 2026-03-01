# Tile Namespace

## Functions

| Function       | Params                              | Return            | Description                    | Example                                                 |
| :-             | :-                                  | :-                | :-                             | :-                                                      |
| `tile.getTile` | `x:number`, `y:number`              | [`Tile`](#tile)   | Get tile at coordinates        | `tile.getTile(GetLocal().posX//32,GetLocal().posY//32)` |
| `tile.setFg`   | [`Tile`](#tile), `itemid:number`    | -                 | Change foreground visually     | `tile.setFg(tile.getTile(GetLocal().posX//32,GetLocal().posY//32), 7188)` |
| `tile.setBg`   | [`Tile`](#tile), `itemid:number`    | -                 | Change background visually     | `tile.setBg(tile.getTile(GetLocal().posX//32,GetLocal().posY//32), 18)` |
