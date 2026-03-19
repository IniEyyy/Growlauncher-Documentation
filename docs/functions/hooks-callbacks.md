# Hooks & Callbacks

## Overview

Hook functions allow you to intercept and respond to game events, packets, and UI events in Growlauncher.

## Hook Events

Available hook events that can be intercepted:

- `onVariant(var, pkt)` - Variant list received
  - `var: [VariantList](/structs/variants#variantlist)` - Variant data
  - `pkt: [TankPacket](/structs/tiles#tankpacket)` - Packet data

- `onGamePacket(pkt)` - Game packet received
  - `pkt: [TankPacket](/structs/tiles#tankpacket)` - Packet data

- `onSendPacketRaw(pkt)` - Raw packet being sent
  - `pkt: [TankPacket](/structs/tiles#tankpacket)` - Packet data

- `onSendPacket(type,pkt)` - Packet being sent
  - `type: number` - Packet type
  - `pkt: string` - Packet data

- `onValue(type,name,value)` - Value changed
  - `type: number` - Value type
  - `name: string` - Value name
  - `value: string|number|boolean|table` - Value data

- `onDrawImGui(deltaTime)` - ImGui drawing event
  - `deltaTime: number` - Time since last frame

- `onDraw(deltaTime)` - Drawing event
  - `deltaTime: number` - Time since last frame

- `onDialog(title,alias,isAccepted)` - Dialog response
  - `title: string` - Dialog title
  - `alias: string` - Dialog alias
  - `isAccepted: boolean` - Whether dialog was accepted

## Functions

---

### addHook()
`addHook(func:function, name:string, noret?:boolean)`
- **Description**: Add event hook
- **Parameters**: 
    - `func: function` - Hook function
    - `name: string` - Hook name
    - `noret?: boolean` - No return (deprecated)
- **Returns**: 
    - None
- **Example**:
    ```lua
    addHook(onDraw, "onDraw")
    ```

---

### applyHook()
`applyHook()`
- **Description**: Apply hooks
- **Returns**: 
    - None
- **Example**:
    ```lua
    applyHook()
    ```

---

### removeHook()
`removeHook(name:string)`
- **Description**: Remove event hook
- **Parameters**: 
    - `name: string` - Hook name
- **Returns**: 
    - None
- **Example**:
    ```lua
    removeHook("onDraw")
    ```

---

### AddHookCallback()
`AddHookCallback(func:function, name:string)`
- **Description**: Low-level hook callback
- **Parameters**: 
    - `func: function` - Callback function
    - `name: string` - Callback name
- **Returns**: 
    - None
- **Example**:
    ```lua
    AddHookCallback("OnPlayerJoin", "join_logger", function(player) 
        log("Player joined: " .. player.name) 
    end)
    ```

---

### CallHookCallback()
`CallHookCallback(name:string, ...)`
- **Description**: Call a registered hook callback
- **Parameters**: 
    - `name: string` - Callback name
    - `...` - Arguments to pass
- **Returns**: 
    - None
- **Example**:
    ```lua
    CallHookCallback("OnPlayerJoin", { name = "TestBot" })
    ```

---

### RemoveHookCallback()
`RemoveHookCallback(name:string)`
- **Description**: Remove a hook callback
- **Parameters**: 
    - `name: string` - Callback name
- **Returns**: 
    - None
- **Example**:
    ```lua
    RemoveHookCallback("OnPlayerJoin", "join_logger")
    ```
