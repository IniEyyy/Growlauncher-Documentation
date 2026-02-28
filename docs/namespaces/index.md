# Namespaces Overview

Namespaces provide organized access to related API functions in Growlauncher.

## Available Namespaces

### [ItemInfoManager](/namespaces/item-info-manager)
Access to the item database and item information management.

### [Tile](/namespaces/tile)
Tile manipulation and world coordinate functions.

### [Growtopia](/namespaces/growtopia)
Core Growtopia game interaction functions.

### [Growlauncher](/namespaces/growlauncher)
Version and system information functions.

### [Preferences](/namespaces/preferences)
Settings and configuration management.

### [UserInterface](/namespaces/user-interface)
JSON builder functions for custom UI components.

### [UIManager](/namespaces/ui-manager)
UI management and generation functions.

## Usage Examples

```lua
-- Item info management
local itemManager = getItemInfoManager()
local itemInfo = itemManager.getItemInfoByID(2)

-- Tile operations
local tile = tile.getTile(10, 10)
tile.setFg(tile, 7188)

-- Growtopia functions
growtopia.warpTo("START")
growtopia.sendChat("Hello!")

-- Version info
log(growlauncher.getVersion())

-- Preferences
local pref = require("preferences")
pref:new("config")
pref:set("enabled", true)
```
