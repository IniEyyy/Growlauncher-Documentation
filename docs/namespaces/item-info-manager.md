# ItemInfoManager Namespace

## Functions

| Function                            | Params        | Returns           | Description                           |
| :-                                  | :-            | :-                | :-                                    |
| `getItemInfoManager`                | -             | `ItemInfoManager` | Get global `ItemInfoManager` instance |
| `itemInfoManager.getItemInfoByID`   | `id:number`   | `table\|nil`      | Get item info object by item ID       |
| `itemInfoManager.getItemInfoByName` | `name:string` | `table\|nil`      | Get item info object by name          |

## Usage Examples

```lua
local itemManager = getItemInfoManager()
local itemInfo = itemManager.getItemInfoByID(2)
if itemInfo then
    log(itemInfo.name)
end

local itemInfo2 = itemManager.getItemInfoByName("Dirt")
if itemInfo2 then
    log(itemInfo2.id)
end
```
