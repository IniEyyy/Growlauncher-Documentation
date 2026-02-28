# Tiles

Tile and world data structures.

## Tile

Represents a tile in the game world.

### Properties

| Field          | Type                     |
| :-             | :-:                      |
| `fg`           | number                   |
| `bg`           | number                   |
| `flag`         | number                   |
| `collidable`   | boolean                  |
| `x`            | number                   |
| `y`            | number                   |
| `coltype`      | number                   |
| `extra`        | [TileExtra](#tileextra)? |
| `progress`     | number                   |
| `readyharvest` | boolean                  |

## TileExtra

Additional tile data for special tiles.

### Properties

| Field          | Type     |
| :-             | :-:      |
| `type`         | number   |
| `label`        | string   |
| `label2`       | string   |
| `label3`       | string   |
| `owner`        | number   |
| `owner_signed` | number   |
| `vend_price`   | number   |
| `vend_item`    | number   |
| `dshelf1`      | number   |
| `dshelf2`      | number   |
| `dshelf3`      | number   |
| `dshelf4`      | number   |
| `flag`         | number   |
| `admin`        | number[] |
| `lastupdate`   | number   |
| `lastupdate2`  | number   |
| `alttype`      | number   |
| `growth`       | number   |
| `volume`       | number   |
| `fruitcount`   | number   |
| `visible`      | boolean  |
| `color`        | number   |

## ItemInfo

Item information and properties.

### Properties

| Field           | Type   |
| :-              | :-:    |
| `id`            | number |
| `type`          | number |
| `name`          | string |
| `breakHits`     | number |
| `rarity`        | number |
| `collisiontype` | number |
| `growTime`      | number |

## TankPacket

Network packet structure for game communication.

### Properties

| Field      | Type   |
| :-         | :-:    |
| `netid`    | number |
| `secnetid` | number |
| `type`     | number |
| `state`    | number |
| `value`    | number |
| `x`        | number |
| `y`        | number |
| `xspeed`   | number |
| `yspeed`   | number |
| `px`       | number |
| `py`       | number |
| `padding1` | number |
| `padding2` | number |
| `padding3` | number |
| `padding4` | number |
| `padding5` | number |
| `time`     | number |
