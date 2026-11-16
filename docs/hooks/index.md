# Hooks & Callbacks

Hooks allow intercepting game events and packets for advanced scripting capabilities.

## Hook Events

The dispatcher inside the native layer compares hook names as lowercase strings. The official sample scripts also register hooks in lowercase, for example `removeHook("ondraw")`. Use the lowercase form when you register a hook:

`ondraw`, `onvalue`, `ondialog`, `onsendpacket`, `onvariant`, `onsendpacketraw`, `onsendpacketrawtype`, `ondrawimgui`, `ongamepacket`

The headings below keep the camelCase form for readability.

---

### onVariant()
`onVariant(var, pkt)`
- **Registered name**: `onvariant`
- **Parameters**: 
  - `var:VariantList` - Variant list data
  - `pkt:TankPacket` - Tank packet data
- **Description**: Called when variant list is received from server

---

### onGamePacket()
`onGamePacket(pkt)`
- **Registered name**: `ongamepacket`
- **Parameters**: 
  - `pkt:TankPacket` - Tank packet data
- **Description**: Called when game packet is received

---

### onSendPacketRaw()
`onSendPacketRaw(pkt)`
- **Registered name**: `onsendpacketraw`
- **Parameters**: 
  - `pkt:TankPacket` - Tank packet data
- **Description**: Called when raw packet is being sent

---

### onSendPacket()
`onSendPacket(type, pkt)`
- **Registered name**: `onsendpacket`
- **Parameters**: 
  - `type:number` - Packet type
  - `pkt:string` - Packet data
- **Description**: Called when packet is being sent

---

### onValue()
`onValue(type, name, value)`
- **Registered name**: `onvalue`
- **Parameters**: 
  - `type:number` - Value type
  - `name:string` - Value name
  - `value:string|number|boolean|table` - Value data
- **Description**: Called when value event occurs

---

### onDrawImGui()
`onDrawImGui(deltaTime)`
- **Registered name**: `ondrawimgui`
- **Parameters**: 
  - `deltaTime:number` - Time since last frame
- **Description**: Called every frame for ImGui rendering

---

### onDraw()
`onDraw(deltaTime)`
- **Registered name**: `ondraw`
- **Parameters**: 
  - `deltaTime:number` - Time since last frame
- **Description**: Called every frame for drawing operations

---

### onDialog()
`onDialog(title, alias, isAccepted)`
- **Registered name**: `ondialog`
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
| `addHook`            | `func:function`, `name:string`, `noret?:boolean` | -      | Add event hook. (noret is deprecated rn.) | `addHook(onDraw,"ondraw")`                               |
| `applyHook`          | -                                                | -      | Apply hooks.                              | `applyHook()`                                            |
| `removeHook`         | `name:string`                                    | -      | Remove event hook.                        | `removeHook("ondraw")`                                   |
| `AddHookCallback`    | `func:function`, `name:string`                   | -      | Low-level hook callback                   | `AddHookCallback("OnPlayerJoin", "join_logger", function(player) log("Player joined: " .. player.name) end)` |
| `CallHookCallback`   | `name:string`, `...`                             | -      | Call a registered hook callback           | `CallHookCallback("OnPlayerJoin", { name = "TestBot" })`                                                     |
| `RemoveHookCallback` | `name:string`                                    | -      | Remove a hook callback                    | `RemoveHookCallback("OnPlayerJoin", "join_logger")`                                                          |

---

## Usage Examples

```lua
-- Basic hook registration
addHook(onDraw,"ondraw")
applyHook()

-- Hook callback usage
AddHookCallback(function(var, pkt)
    log("Variant received: " .. var.v1)
end, "onVariant")

-- Remove hooks
removeHook("ondraw")
RemoveHookCallback("onVariant")
```
