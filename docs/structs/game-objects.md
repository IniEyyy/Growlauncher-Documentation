# Game Objects

Game world objects and UI structures.

## InventoryItem

Represents an item in player inventory.

| Field    | Type   |
| :-       | :-:    |
| `id`     | number |
| `amount` | number |

## WorldObject

Represents an object in the game world.

| Field    | Type                |
| :-       | :-:                 |
| `pos`    | [Vector2](/structs/vectors#vector2) |
| `itemid` | number              |
| `amount` | number              |
| `invbit` | number              |
| `id`     | number              |

## Dialog

Represents a dialog interface.

| Field     | Type   |
| :-        | :-:    |
| `title`   | string |
| `alias`   | string |
| `message` | string |
| `confirm` | string |
| `ignore`  | string |
| `url`     | string |
