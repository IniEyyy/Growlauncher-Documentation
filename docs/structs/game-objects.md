# Game Objects

Game world objects and UI structures.

## InventoryItem

Represents an item in player inventory.

### Properties

| Field    | Type   |
| :-       | :-:    |
| `id`     | number |
| `amount` | number |

## WorldObject

Represents an object in the game world.

### Properties

| Field    | Type                |
| :-       | :-:                 |
| `pos`    | [Vector2](/structs/vectors#vector2) |
| `itemid` | number              |
| `amount` | number              |
| `invbit` | number              |
| `id`     | number              |

## Dialog

Represents a dialog interface.

### Properties

| Field     | Type   |
| :-        | :-:    |
| `title`   | string |
| `alias`   | string |
| `message` | string |
| `confirm` | string |
| `ignore`  | string |
| `url`     | string |
