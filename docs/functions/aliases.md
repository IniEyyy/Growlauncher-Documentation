# Function Aliases

Several functions are registered under both a lowercase and a mixed-case name. Each row below is one native implementation, and every name in the same row calls exactly the same code. Names are case sensitive.

| Native VA | Registered names | Notes |
| :- | :- | :- |
| `0x46317c` | `AddHook`, `addHook` | Alias group |
| `0x458e90` | `CSleep` | Single name |
| `0x45fbc8` | `EditToggle`, `editToggle`, `editValue` | Alias group |
| `0x45ccb8` | `FindItemID`, `findItemID` | Alias group |
| `0x45c29c` | `FindPath`, `findPath` | Alias group |
| `0x45fa34` | `GetGems`, `getGems` | Alias group |
| `0x45e65c` | `GetInventory`, `getInventory` | Alias group |
| `0x460b34` | `GetItemInfoByID`, `getItemInfoByID` | Alias group |
| `0x461c50` | `GetItemInfoByName`, `getItemInfoByName` | Alias group |
| `0x462750` | `GetLocal`, `getLocal`, `localPlayer` | localPlayer is the documented short form |
| `0x45f384` | `GetNPCList`, `getNPCList` | Alias group |
| `0x45ea2c` | `GetObjectList`, `getObjectList` | Alias group |
| `0x458130` | `GetPing`, `getPing` | Alias group |
| `0x462ab0` | `GetPlayerList`, `getPlayerList` | Alias group |
| `0x461458` | `GetTile`, `getTile` | Alias group |
| `0x462598` | `GetTiles`, `getTiles` | Alias group |
| `0x458eec` | `getCurrentWorldName`, `GetWorldName` | Alias group |
| `0x4564c0` | `LogToConsole`, `logToConsole` | Alias group |
| `0x46346c` | `RemoveHook`, `removeHook` | Alias group |
| `0x4582e0` | `SendPacket`, `sendPacket` | Alias group |
| `0x459308` | `SendPacketRaw`, `sendPacketRaw` | Alias group |
| `0x45b084` | `SendVariant`, `sendVariant` | Alias group |
| `0x465074` | `SetLogin`, `setLogin` | Alias group |
| `0x465850` | `SetLoginEnabled`, `setLoginEnabled` | Alias group |
| `0x45cab0` | `createPlayer`, `SetPathFlag` | Alias group |
| `0x458cec` | `Sleep`, `sleep` | Alias group |
| `0x464180` | `addCategory` | Single name |
| `0x456a08` | `addIntoModule` | Single name |
| `0x462d0c` | `addShortcut` | Single name |
| `0x463a90` | `executeFromAssets` | Single name |
| `0x4664c8` | `fetch` | Single name |
| `0x465adc` | `getAppLibrary` | Single name |
| `0x467744` | `getDiscordID` | Single name |
| `0x45d0f0` | `getPlayerByNetID` | Single name |
| `0x458014` | `getTime` | Single name |
| `0x456e74` | `getValue` | Single name |
| `0x4636e4` | `getWorldTileMap` | Single name |
| `0x467520` | `logDebug` | Single name |
| `0x462f44` | `removeShortcut` | Single name |
| `0x465d68` | `requireModule` | Single name |
| `0x45a784` | `sendDialog` | Single name |
| `0x457c3c` | `sendNotification` | Single name |
| `0x466374` | `setBg` | Single name |
| `0x466078` | `setFg` | Single name |
| `0x46053c` | `setMinimum` | Single name |
| `0x4645d4` | `setValue` | Single name |

Total: 73 registered names in 46 implementations.

These names come from the native registration block. Lua-level modules such as `growtopia.*`, `tile.*`, `UserInterface`, and `Preferences` are defined elsewhere and are not part of this table.
