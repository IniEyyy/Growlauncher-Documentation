# Examples

Practical examples and sample scripts for Growlauncher API usage.

## Overview

This section provides real-world examples of how to use various Growlauncher features, from basic scripts to complex UI applications.

## Categories

### [ImGui Examples](#imgui-examples)
Interactive user interfaces and custom overlays.

### [UI Module Examples](#ui-module-examples)
Module system and configuration interfaces.

### [Preferences Examples](#preferences-examples)
Settings management and data persistence.

### [Network Examples](#network-examples)
Packet handling and network communication.

### [Utility Examples](#utility-examples)
Helper functions and common operations.

---

## ImGui Examples

### Calculator Application

A complete calculator with ImGui interface and preferences persistence.

```lua
-- ---@type Preferences
local pref = require("preferences")
local saved = pref:new("calculator_prefs.json")

local CALC = {
    title = "Calculator",
    opened = saved:get("opened", false),
    expr = "",
    result = "",
    err = nil
}

local function safe_eval(s)
    if s == "" then
        return ""
    end
    if s:find("[^%d%+%-%*/%%%^%(%). eE]") then
        return nil, "Invalid char"
    end

    local chunk_src = "return (" .. s .. ")"
    local f, err
    if _VERSION == "Lua 5.1" then
        f, err = loadstring(chunk_src)
        if not f then
            return nil, err
        end
        local env = {
            math = math
        }
        setfenv(f, env)
    else
        f, err = load(chunk_src, "calc", "t", {
            math = math
        })
        if not f then
            return nil, err
        end
    end

    local ok, val = pcall(f)
    if not ok then
        return nil, val
    end
    return val
end

local function push(ch)
    CALC.expr = CALC.expr .. ch
end

local function compute()
    local v, err = safe_eval(CALC.expr)
    if v == nil then
        CALC.err = tostring(err)
        CALC.result = ""
    else
        CALC.err = nil
        CALC.result = tostring(v)
    end
end

function OnDrawImGui(delta)
    if CALC.opened then
        ImGui.SetNextWindowSize(ImVec2(320, 420), ImGui.Cond.Once)
        ImGui.Begin(CALC.title)

        ImGui.Text("Expr:")
        ImGui.TextWrapped(CALC.expr == "" and " " or CALC.expr)

        ImGui.Separator()
        ImGui.Text("Result:")
        if CALC.err then
            ImGui.TextColored(1.0, 0.3, 0.3, 1.0)
            ImGui.TextWrapped(CALC.err)
        else
            ImGui.TextWrapped(CALC.result == "" and " " or CALC.result)
        end
        ImGui.Separator()
        
        local btnX = math.floor(ImGui.GetContentRegionAvail().x * 0.25)
        
        if ImGui.Button("C", ImVec2(btnX - 5, 0)) then
            CALC.expr = ""
            CALC.result = ""
            CALC.err = nil
        end
        ImGui.SameLine()
        if ImGui.Button("=", ImVec2(btnX - 5, 0)) then
            compute()
        end

        ImGui.End()
    end
end

applyHook()
```

**Features demonstrated:**
- ImGui window creation and management
- Button layouts and responsive sizing
- Text rendering and color coding
- Preferences integration
- Mathematical expression evaluation

---

## UI Module Examples

### Complete UI Module

Comprehensive UI module showcasing all available components.

```lua
local ui = UserInterface.new("FullUIExample", "Verified")

-- Basic components
ui:addLabel("Hello World")
ui:addLabelApp("GrowLauncher UI", "Verified")
ui:addToggle("Enable Feature", true, "feat_toggle", true)
ui:addToggleButton("Power Button", false, "power_btn")
ui:addButton("Click Me", "btn_click")

-- Expandable section with child components
local expand = ui:addExpandableToggle("Advanced Settings", false, "adv_toggle", true, true)
    ui:addChildToggle(expand.list_child,"Enable Child", true, "child_toggle")
    ui:addChildSlider(expand.list_child,"Child Slider", 0, 100, 50, 1, false, "child_slider")
    ui:addChildTooltip(expand.list_child,"Tooltip Title", "Support text here", "Verified", true)
    ui:addChildItemPicker(expand.list_child,"Pick Item", "Dirt", "2", "child_item")
    ui:addChildInputInt(expand.list_child,"Child Int", "1", "Label", "Enter number", "Verified", "child_int")
    ui:addChildInputString(expand.list_child,"Child String", "abc", "Label", "Type text", "Home", "child_str")
    ui:addChildButton(expand.list_child,"Child Button", "child_btn")

-- Main components
ui:addSlider("Main Slider", 0, 100, 50, 1, false, "main_slider")
ui:addInputInt("Enter Number", "10", "Label", "Type..", "Verified", "int_alias")
ui:addInputString("Enter Text", "abc", "Label", "Type..", "Verified", "str_alias")
ui:addTooltip("Info Tooltip", "Support text", "Verified", true)
ui:addItemPicker("Choose Item", "Dirt", "2", "picker")
ui:addDivider()
ui:addDisplayList("List Example", "Default", "list_alias")
ui:addTileSelect("Tile Select", "Default", "tile_alias", 5)

-- Dialog with child components
local dialog = ui:addDialog("Dialog Title", "Sub text", {})
    ui:addChildToggle(dialog.menu,"Enable Child", true, "child_toggle")
    ui:addChildSlider(dialog.menu,"Child Slider", 0, 100, 50, 1, false, "child_slider")
    ui:addChildTooltip(dialog.menu,"Tooltip Title", "Support text here", "Verified", true)
    ui:addChildItemPicker(dialog.menu,"Pick Item", "Dirt", "2", "child_item")
    ui:addChildInputInt(dialog.menu,"Child Int", "1", "Label", "Enter number", "Verified", "child_int")
    ui:addChildInputString(dialog.menu,"Child String", "abc", "Label", "Type text", "Home", "child_str")
    ui:addChildButton(dialog.menu,"Child Button", "child_btn")

local json = ui:generateJSON()

-- Register the module
require("IniEy")
addIntoModule(json,"IniEy")
```

**Features demonstrated:**
- All UI component types
- Parent-child relationships
- Component configuration and aliases
- JSON generation and module registration
- Dialog creation and management

---

## Preferences Examples

### Settings Management

Basic preferences usage for persistent configuration.

```lua
local Preferences = require("Preferences")

-- 1. Initialize (Loads existing data or creates a new instance)
local userPrefs = Preferences:new("user_settings.json")

-- 2. Get a value (with a default fallback if not found)
local volume = userPrefs:get("music_volume", 100)
print("Current Volume:", volume)

-- 3. Set new values
userPrefs:set("music_volume", 80)
userPrefs:set("username", "PlayerOne")

-- 4. Save to disk (Must be called manually to persist changes)
userPrefs:save()
```

**Features demonstrated:**
- Preferences initialization
- Default value handling
- Setting and getting values
- Manual save operation

---

## Network Examples

### Variant Packet Sending

Send variant packets to server for notifications and actions.

```lua
LogToConsole("Hello im from Fetch script!")
var = {}
var.v1 = "OnAddNotification"
var.v2 = "interface/large/adventure.rttex"

var.v3 = "Omgg it works!, Fetch is working!"
var.v4 = "audio/gong.wav"
sendVariant(var)
```

**Features demonstrated:**
- Variant packet creation
- Notification system usage
- Audio integration

### Basic Packet Handling

Hook into network events for packet monitoring.

```lua
function onVariant(var, pkt)
    log("Variant received: " .. var.v1)
    
    -- Handle specific variant types
    if var.v1 == "OnConsoleMessage" then
        log("Console: " .. var.v2)
    end
end

function onGamePacket(pkt)
    log("Game packet type: " .. pkt.type)
end

addHook(onVariant, "onVariant")
addHook(onGamePacket, "onGamePacket")
applyHook()
```

**Features demonstrated:**
- Hook registration
- Variant packet handling
- Game packet monitoring
- Event-driven programming

---

## Utility Examples

### Basic Automation

Simple automation script for common tasks.

```lua
-- Auto-collect nearby items
function autoCollect()
    local player = getLocal()
    local tiles = getTiles()
    
    for x = player.posX//32 - 5, player.posX//32 + 5 do
        for y = player.posY//32 - 5, player.posY//32 + 5 do
            local tile = getTile(x, y)
            if tile.fg > 0 and tile.fg < 1000 then -- Collectible items
                growtopia.dropItem(tile.fg)
            end
        end
    end
end

-- Auto-reply to messages
function onChatMessage(name, message)
    if message:find("hello") then
        growtopia.sendChat("Hello " .. name .. "!")
    end
end

-- Register hooks
addHook(onDraw, "autoCollect")
applyHook()
```

**Features demonstrated:**
- Player position tracking
- Tile scanning and manipulation
- Chat message handling
- Automated actions

---

## Best Practices

### Code Organization

```lua
-- Use modules for better organization
local MyModule = {}

-- Configuration
MyModule.config = {
    enabled = true,
    interval = 1000,
    range = 5
}

-- Main functions
function MyModule.init()
    log("Module initialized")
end

function MyModule.update(deltaTime)
    if not MyModule.config.enabled then return end
    
    -- Update logic here
end

function MyModule.cleanup()
    log("Module cleaned up")
end

-- Hook registration
function onDraw(deltaTime)
    MyModule.update(deltaTime)
end

addHook(onDraw, "MyModule")
applyHook()
```

### Error Handling

```lua
local function safeFunction()
    local success, result = pcall(function()
        -- Potentially failing code
        local data = getSomeData()
        return processData(data)
    end)
    
    if not success then
        log("Error: " .. result)
        return nil
    end
    
    return result
end
```

### Performance Optimization

```lua
-- Cache expensive operations
local cachedData = {}
local lastUpdate = 0

function getCachedData()
    local currentTime = getTime()
    
    if currentTime - lastUpdate > 5000 then -- Update every 5 seconds
        cachedData = expensiveOperation()
        lastUpdate = currentTime
    end
    
    return cachedData
end
```

---

## Next Steps

- Explore the [Functions](/functions/) documentation for more API calls
- Check [Namespaces](/namespaces/) for organized functionality
- Learn about [Structs](/structs/) for data structures
- Discover [ImGui](/imgui/) for advanced UI creation
- Understand [Hooks](/hooks/) for event handling
