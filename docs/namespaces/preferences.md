# Preferences Namespace

## Functions

| Function | Params | Return | Description |
| :- | :- | :- | :- |
| `:new` | `name:string` | `Preferences` | Create new preferences instance |
| `:load` | - | - | Load preferences from file |
| `:save` | - | - | Save preferences to file |
| `:get` | `name:string`, `default:any` | `any` | Get value by key with default fallback |
| `:set` | `name:string`, `value:any` | - | Set value by key |

## Examples

```lua
local pref = require("preferences")
pref:new("configFile")
pref:save()
pref:set("config", true)    
config = pref:get("config", false)
log(config)
```
