# Player

Player and character related structures.

## NetAvatar

Represents a player character in the world.

### Properties

| Field       | Type                                  |
| :-          | :-:                                   |
| `pos`       | [Vector2](/structs/vectors#vector2)                   |
| `size`      | [Vector2](/structs/vectors#vector2)                   |
| `posX`      | number                                |
| `posY`      | number                                |
| `posXenc`   | number                                |
| `posYenc`   | number                                |
| `sizeX`     | number                                |
| `sizeY`     | number                                |
| `sizeXenc`  | number                                |
| `sizeYenc`  | number                                |
| `punchID`   | number                                |
| `userID`    | number                                |
| `name`      | string                                |
| `netID`     | number                                |
| `isLeft`    | boolean                               |
| `status`    | number                                |
| `irisColor` | number                                |
| `pupilColor`| number                                |
| `onGround`  | boolean                               |
| `country`   | string                                |
| `equip`     | [NetAvatarClothes](#netavatarclothes) |
| `effect`    | [NetAvatarClothes](#netavatarclothes) |

## NetAvatarClothes

Represents player clothing and accessories.

### Properties

| Field      | Type   |
| :-         | :-:    |
| `hair`     | number |
| `shirt`    | number |
| `pants`    | number |
| `feet`     | number |
| `hand`     | number |
| `back`     | number |
| `face`     | number |
| `mask`     | number |
| `necklace` | number |
