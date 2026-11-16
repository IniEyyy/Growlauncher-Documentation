# Functions Overview

Complete reference for all Growlauncher API functions.

## What is callable

Growlauncher 7.0.38 exposes three native surfaces:

| Surface | Access | Verified count |
| :- | :- | :- |
| Lua globals | Bare names such as `getLocal()`, `addHook()`, `editToggle()` | 73 registrations, 46 implementations |
| ImGui | Fields of the `ImGui` table, such as `ImGui.Begin()` | 249 functions |
| Draw lists | Methods on `ImGui.BG` and `ImGui.FG` | 9 methods |

Hooks are event globals in lowercase (`ondraw`, `onvalue`, ...). Names shown in this documentation with a **Binding** or **Status** note are editor hints or Lua-layer helpers: they are not part of the native binding table and cannot be assumed to work in this build.

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

### [Login](/functions/login)
Native login state helpers.

### [Function Aliases](/functions/aliases)
Every registered name and the native implementation it shares.

## Quick Reference

```lua
-- Common function usage examples
log("Hello World")                    -- Console
local player = getLocal()             -- Player Info  
local tile = getTile(100, 50)         -- World
sendPacket(2,"action|input\ntext|Hi") -- Networking
```
