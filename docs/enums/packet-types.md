# Growtopia Packet Types

Packet types represent internal packet identifiers used in Growtopia's networking protocol.

| Packet Type | Value | Description |
| :- | :-: | ----------- |
| PACKET_STATE | 0 | State information |
| PACKET_CALL_FUNCTION | 1 | Function call packet |
| PACKET_UPDATE_STATUS | 2 | Status update |
| PACKET_TILE_CHANGE_REQUEST | 3 | Tile modification request |
| PACKET_SEND_MAP_DATA | 4 | Map data transmission |
| PACKET_SEND_TILE_UPDATE_DATA | 5 | Single tile update |
| PACKET_SEND_TILE_UPDATE_DATA_MULTIPLE | 6 | Multiple tile updates |
| PACKET_TILE_ACTIVATE_REQUEST | 7 | Tile activation request |
| PACKET_TILE_APPLY_DAMAGE | 8 | Tile damage application |
| PACKET_SEND_INVENTORY_STATE | 9 | Inventory state sync |
| PACKET_ITEM_ACTIVATE_REQUEST | 10 | Item activation |
| PACKET_ITEM_ACTIVATE_OBJECT_REQUEST | 11 | Object item activation |
| PACKET_SEND_TILE_TREE_STATE | 12 | Tree state information |
| PACKET_MODIFY_ITEM_INVENTORY | 13 | Inventory modification |
| PACKET_ITEM_CHANGE_OBJECT | 14 | Object transformation |
| PACKET_SEND_LOCK | 15 | Lock information |
| PACKET_SEND_ITEM_DATABASE_DATA | 16 | Item database data |
| PACKET_SEND_PARTICLE_EFFECT | 17 | Particle effects |
| PACKET_SET_ICON_STATE | 18 | Icon state changes |
| PACKET_ITEM_EFFECT | 19 | Item effects |
| PACKET_SET_CHARACTER_STATE | 20 | Character state |
| PACKET_PING_REPLY | 21 | Ping response |
| PACKET_PING_REQUEST | 22 | Ping request |
| PACKET_GOT_PUNCHED | 23 | Punch event |
| PACKET_APP_CHECK_RESPONSE | 24 | App verification |
| PACKET_APP_INTEGRITY_FAIL | 25 | Integrity check failure |
| PACKET_DISCONNECT | 26 | Disconnection |
| PACKET_BATTLE_JOIN | 27 | Battle entry |
| PACKET_BATTLE_EVEN | 28 | Battle event |
| PACKET_USE_DOOR | 29 | Door interaction |
| PACKET_SEND_PARENTAL | 30 | Parental controls |
| PACKET_GONE_FISHIN | 31 | Fishing activity |
| PACKET_STEAM | 32 | Steam integration |
| PACKET_PET_BATTLE | 33 | Pet battles |
| PACKET_NPC | 34 | NPC interactions |
| PACKET_SPECIAL | 35 | Special events |
| PACKET_SEND_PARTICLE_EFFECT_V2 | 36 | Enhanced particle effects |
| GAME_ACTIVE_ARROW_TO_ITEM | 37 | Arrow to item conversion |
| GAME_SELECT_TILE_INDEX | 38 | Tile selection |

## Note

Packet types are used for network communication between client and server. Each packet type has specific data structure and purpose.