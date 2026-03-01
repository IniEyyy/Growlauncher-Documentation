# Functions Overview

Complete reference for all Growlauncher API functions.

## Categories

### [Console](/functions/console)
Basic logging and console output functions.

### [Networking](/functions/network)
Packet sending and network communication.

### [Player Info](/functions/player-info)
Player data and inventory information.

### [Item Info](/functions/item-info)
Item database and information functions.

### [World & Game State](/functions/world-state)
World data, tiles, and world information.

### [Math & Utility](/functions/math-utility)
Mathematical functions and utility operations.

## Quick Reference

```lua
-- Common function usage examples
log("Hello World")                    -- Console
local player = getLocal()             -- Player Info  
local tile = getTile(100, 50)         -- World
sendPacket(2,"action|input\ntext|Hi") -- Networking
```
