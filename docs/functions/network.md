# Network Functions

## Overview

Network functions provide packet sending and communication capabilities in Growtopia.

## Functions

---

### sendPacket()
```lua
sendPacket(type, packet, to_client_first?)
```
- **Description**: Send packet to server
- **Parameters**: `type:number`, `packet:string`, `to_client_first?:boolean`
- **Returns**: None
- **Example**: `sendPacket(2,"action|input\ntext|Hi")`

---

### sendVariant()
```lua
sendVariant(variantlist, packet_data?, netid?, value?)
```
- **Description**: Send variant list
- **Parameters**: [`variantlist:VariantList`](/structs/variants#variantlist), [`packet_data?:TankPacket`](/structs/tiles#tankpacket), `netid?:number`, `value?:number`
- **Returns**: None
- **Example**: `sendVariant({v1 = "OnConsoleMessage", v2 = "Console here"})`

---

### sendPacketRaw()
```lua
sendPacketRaw(flag, packet)
```
- **Description**: Send raw TankPacket
- **Parameters**: `flag:boolean`, [`packet:TankPacket`](/structs/tiles#tankpacket)
- **Returns**: None
- **Example**: `p=getLocal(); sendPacketRaw(false, {type=3, value=18, x=p.posX, y=p.posY, px=p.posX//32, py = p.posY//32})`
