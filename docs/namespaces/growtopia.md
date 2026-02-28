# Growtopia Namespace

## Functions

| Function | Params | Return | Description | Example |
| :- | :- | :- | :- | :- |
| `growtopia.enter` | - | - | Enter main door (spawn) | `growtopia.enter()` |
| `growtopia.warpTo` | `world_name:string` | - | Warp to another world | `growtopia.warpTo("START")` |
| `growtopia.notify` | `msg:string` | - | Show a notification | `growtopia.notify("Warning!")` |
| `growtopia.isOnPos` | `posx:number`, `posy:number` | `boolean` | Check if player is on given pos | `growtopia.isOnPos(3,2)` |
| `growtopia.sendChat` | `text:string`, `toClient?:boolean` | - | Send chat message | `growtopia.sendChat("Hello")` |
| `growtopia.enterPos` | - | - | Enter by current position | `growtopia.enterPos()` |
| `growtopia.dropItem` | `itemID:number` | - | Drop 1 of an item | `growtopia.dropItem(242)` |
| `growtopia.getItemID` | `name:string` | `number` | Get item ID by name | `growtopia.getItemID("Dirt")` |
| `growtopia.tileChange` | `posx:number`, `posy:number`, `value:number` | - | Change a tile value | `growtopia.tileChange(1,2,3)` |
| `growtopia.sendDialog` | `dialog:string` | - | Send dialog as string | `growtopia.sendDialog("add_textbox\|iniey\|left\|\nadd_quick_exit")` |
| `growtopia.setWeather` | `weatherid:number` | - | Set world weather | `growtopia.setWeather(6)` |
| `growtopia.getItemName` | `id:number` | `string` | Get item name by ID | `log(growtopia.getItemName(2))` |
| `growtopia.enterGateway` | `x:number`, `y:number`, `n:number` | - | Enter a gateway door | `growtopia.enterGateway(getLocal().posX//32,getLocal().posY//32,0)` |
| `growtopia.checkInventory` | `itemid:number` | `boolean` | Check if player has item | `log(growtopia.checkInventory(242))` |
| `growtopia.confirmDropItem` | `itemID:number`, `amount:number` | - | Drop specific amount of item | `growtopia.confirmDropItem(242,10)` |
| `growtopia.checkInventoryCount` | `itemid:number` | `number` | Count how many items player has | `growtopia.checkInventoryCount(242)` |
