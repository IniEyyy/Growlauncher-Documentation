# Enums Overview

Enums provide predefined constants for various Growtopia and Growlauncher values.

## Available Enums

### [Menu Types](/enums/menu-types)
UI component types for Growlauncher's module system.

### [Packet Types](/enums/packet-types)
Network packet identifiers used in Growtopia's protocol.

## Usage Examples

```lua
-- Menu types in UI components
local toggle = { type = MenuType.Toggle, value = false }
local slider = { type = MenuType.Slider, min = 0, max = 100 }

-- Packet types in network operations
if packet.type == PacketType.PACKET_TILE_CHANGE_REQUEST then
    handleTileChange(packet)
end
```
