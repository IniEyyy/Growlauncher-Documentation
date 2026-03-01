# Hooks & Callbacks

Hooks allow intercepting game events and packets for advanced scripting capabilities.

## Hook Events

---

- `onVariant(var, pkt)` [`var:VariantList`](/structs/variants#variantlist)[`pkt:TankPacket`](/structs/tiles#tankpacket)

- `onGamePacket(pkt)` [`pkt:TankPacket`](/structs/tiles#tankpacket)

- `onSendPacketRaw(pkt)` [`pkt:TankPacket`](/structs/tiles#tankpacket)

- `onSendPacket(type,pkt)` `type:number`, `pkt:string`

- `onValue(type,name,value)` `type:number`, `name:string`, `value:string|number|boolean|table`

- `onDrawImGui(deltaTime)` `deltaTime:number`

- `onDraw(deltaTime)` `deltaTime:number`

- `onDialog(title,alias,isAccepted)` `title:string`, `alias:string`, `isAccepted:boolean`

---

## Hook & Callbacks Functions

---

| Function             | Params                                           | Return | Description                               | Example                                                  |
| :-                   | :-                                               | :-     | :-                                        | :-                                                       |
| `addHook`            | `func:function`, `name:string`, `noret?:boolean` | -      | Add event hook. (noret is deprecated rn.) | `addHook(onDraw,"onDraw")`                               |
| `applyHook`          | -                                                | -      | Apply hooks.                              | `applyHook()`                                            |
| `removeHook`         | `name:string`                                    | -      | Remove event hook.                        | `removeHook("onDraw")`                                   |
| `AddHookCallback`    | `func:function`, `name:string`                   | -      | Low-level hook callback                   | `AddHookCallback("OnPlayerJoin", "join_logger", function(player) log("Player joined: " .. player.name) end)` |
| `CallHookCallback`   | `name:string`, `...`                             | -      | Call a registered hook callback           | `CallHookCallback("OnPlayerJoin", { name = "TestBot" })`                                                     |
| `RemoveHookCallback` | `name:string`                                    | -      | Remove a hook callback                    | `RemoveHookCallback("OnPlayerJoin", "join_logger")`                                                          |

---

## Usage Examples

```lua
-- Basic hook registration
addHook(onDraw,"onDraw")
applyHook()

-- Hook callback usage
AddHookCallback(function(var, pkt)
    log("Variant received: " .. var.v1)
end, "onVariant")

-- Remove hooks
removeHook("onDraw")
RemoveHookCallback("onVariant")
```
