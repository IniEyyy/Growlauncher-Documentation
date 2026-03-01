# Hooks & Callbacks

Hooks allow intercepting game events and packets for advanced scripting capabilities.

## Hook Events

---

### onVariant()
`onVariant(var, pkt)`
- **Parameters**: 
  - `var:VariantList` - Variant list data
  - `pkt:TankPacket` - Tank packet data
- **Description**: Called when variant list is received from server

---

### onGamePacket()
`onGamePacket(pkt)`
- **Parameters**: 
  - `pkt:TankPacket` - Tank packet data
- **Description**: Called when game packet is received

---

### onSendPacketRaw()
`onSendPacketRaw(pkt)`
- **Parameters**: 
  - `pkt:TankPacket` - Tank packet data
- **Description**: Called when raw packet is being sent

---

### onSendPacket()
`onSendPacket(type, pkt)`
- **Parameters**: 
  - `type:number` - Packet type
  - `pkt:string` - Packet data
- **Description**: Called when packet is being sent

---

### onValue()
`onValue(type, name, value)`
- **Parameters**: 
  - `type:number` - Value type
  - `name:string` - Value name
  - `value:string|number|boolean|table` - Value data
- **Description**: Called when value event occurs

---

### onDrawImGui()
`onDrawImGui(deltaTime)`
- **Parameters**: 
  - `deltaTime:number` - Time since last frame
- **Description**: Called every frame for ImGui rendering

---

### onDraw()
`onDraw(deltaTime)`
- **Parameters**: 
  - `deltaTime:number` - Time since last frame
- **Description**: Called every frame for drawing operations

---

### onDialog()
`onDialog(title, alias, isAccepted)`
- **Parameters**: 
  - `title:string` - Dialog title
  - `alias:string` - Dialog alias
  - `isAccepted:boolean` - Dialog acceptance status
- **Description**: Called when dialog interaction occurs

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
