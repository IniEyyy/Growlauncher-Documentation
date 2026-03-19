# Functions Overview

Complete reference for all Growlauncher API functions.

## Categories

### [Console & Logging](/functions/console)
Basic logging and debugging functions for script development and monitoring.

### [Networking & Packets](/functions/network)
Packet sending and network communication.

### [Player Info](/functions/player-info)
Player data and inventory information.

### [Item Info](/functions/item-info)
Item database and information functions.

### [World & Game State](/functions/world-state)
World data, tiles, and world information.

### [Math & Utility](/functions/math-utility)
Mathematical functions and utility operations.

### [Hooks & Callbacks](/functions/hooks-callbacks)
Event interception and response functions.

### [Threading & Coroutine](/functions/threading)
Concurrency and delay operations.

### [Value Functions](/functions/value-functions)
Internal value system management.

### [Module Functions](/functions/module-functions)
UI modules and notification system.

## Quick Reference

```lua
-- Common function usage examples
log("Hello World")                    -- Console
local player = getLocal()             -- Player Info  
local tile = getTile(100, 50)         -- World
sendPacket(2,"action|input\ntext|Hi") -- Networking
```
