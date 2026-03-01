# Examples

Sample scripts from the `sample-scripts/` directory demonstrating various Growlauncher API features.

## Overview

This section contains actual working scripts that demonstrate practical usage of the Growlauncher API. Each script is taken directly from the sample-scripts directory.

## Available Sample Scripts

### [Calculator](#calculator-lua)
Complete calculator application with ImGui interface and preferences persistence.

### [Sample UI](#sample-uilua)
Comprehensive UI module showcasing all available components.

### [Preferences](#preferenceslua)
Basic preferences usage for persistent configuration.

### [World Saver](#world_saverlua)
World bookmark management system with ImGui interface.

### [Fetch](#fetchlua)
Network request example with dynamic script loading.

### [Example for Fetch](#example-for-fetchlua)
Simple notification script used for fetch demonstration.

---

## calculator.lua

A complete calculator with ImGui interface and mathematical expression evaluation.

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

local function backspace()
    local len = #CALC.expr
    if len > 0 then
        CALC.expr = CALC.expr:sub(1, len - 1)
    end
end

local function clear_all()
    CALC.expr = ""
    CALC.result = ""
    CALC.err = nil
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
        local function B(label, onClick)
            if ImGui.Button(label, ImVec2(btnX - 5, 0)) then
                onClick()
            end
        end
        
        local function Row(buttons)
            for i, b in ipairs(buttons) do
                B(b[1], b[2])
                if i < #buttons then
                    ImGui.SameLine()
                end
            end
        end

        Row({{"C", function()
            clear_all()
        end}, {"\xef\x95\x9a", function()
            backspace()
        end}, {"%", function()
            push("%")
        end}, {"^", function()
            push("^")
        end}})

        Row({{"7", function()
            push("7")
        end}, {"8", function()
            push("8")
        end}, {"9", function()
            push("9")
        end}, {"/", function()
            push("/")
        end}})

        Row({{"4", function()
            push("4")
        end}, {"5", function()
            push("5")
        end}, {"6", function()
            push("6")
        end}, {"*", function()
            push("*")
        end}})

        Row({{"1", function()
            push("1")
        end}, {"2", function()
            push("2")
        end}, {"3", function()
            push("3")
        end}, {"-", function()
            push("-")
        end}})

        Row({{"0", function()
            push("0")
        end}, {".", function()
            push(".")
        end}, {"(", function()
            push("(")
        end}, {")", function()
            push(")")
        end}})

        Row({{"pi", function()
            push(tostring(math.pi))
        end}, {"e", function()
            push(tostring(math.exp(1)))
        end}, {"=", function()
            compute()
        end}, {"+", function()
            push("+")
        end}})

        ImGui.End()
    end
end

local ui = UserInterface.new("Calculator", "Calculate")
ui:addLabelApp("Calculator", "Calculate")
ui:addTooltip("Information", "Calculator for basic arithmetic operations", "Info", false)
ui:addToggle("Enable", saved:get("opened", false), "enable_calculator", false)

function OnDraw(d)
  removeHook("ondraw")
  runCoroutine(function()
    sleep(6000)
    addCategory("ImGui", "Wysiwyg")
    addIntoModule(ui:generateJSON(), "ImGui")
  end)
end

function OnValue(type, name, value)
  if name == "enable_calculator" then
    CALC.opened = value
    saved:set("opened", CALC.opened)
    saved:save()
  end
end

applyHook()
```

---

## sample-ui.lua

Complete UI module showcasing all available components.

```lua
local ui = UserInterface.new("FullUIExample", "Verified")

ui:addLabel("Hello World")
ui:addLabelApp("GrowLauncher UI", "Verified")
ui:addToggle("Enable Feature", true, "feat_toggle", true)
ui:addToggleButton("Power Button", false, "power_btn")
ui:addButton("Click Me", "btn_click")

local expand = ui:addExpandableToggle("Advanced Settings", false, "adv_toggle", true, true)
    ui:addChildToggle(expand.list_child,"Enable Child", true, "child_toggle")
    ui:addChildSlider(expand.list_child,"Child Slider", 0, 100, 50, 1, false, "child_slider")
    ui:addChildTooltip(expand.list_child,"Tooltip Title", "Support text here", "Verified", true)
    ui:addChildItemPicker(expand.list_child,"Pick Item", "Dirt", "2", "child_item")
    ui:addChildInputInt(expand.list_child,"Child Int", "1", "Label", "Enter number", "Verified", "child_int")
    ui:addChildInputString(expand.list_child,"Child String", "abc", "Label", "Type text", "Home", "child_str")
    ui:addChildButton(expand.list_child,"Child Button", "child_btn")

ui:addSlider("Main Slider", 0, 100, 50, 1, false, "main_slider")
ui:addInputInt("Enter Number", "10", "Label", "Type..", "Verified", "int_alias")
ui:addInputString("Enter Text", "abc", "Label", "Type..", "Verified", "str_alias")
ui:addTooltip("Info Tooltip", "Support text", "Verified", true)
ui:addItemPicker("Choose Item", "Dirt", "2", "picker")
ui:addDivider()
ui:addDisplayList("List Example", "Default", "list_alias")
ui:addTileSelect("Tile Select", "Default", "tile_alias", 5)

local dialog = ui:addDialog("Dialog Title", "Sub text", {})
    ui:addChildToggle(dialog.menu,"Enable Child", true, "child_toggle")
    ui:addChildSlider(dialog.menu,"Child Slider", 0, 100, 50, 1, false, "child_slider")
    ui:addChildTooltip(dialog.menu,"Tooltip Title", "Support text here", "Verified", true)
    ui:addChildItemPicker(dialog.menu,"Pick Item", "Dirt", "2", "child_item")
    ui:addChildInputInt(dialog.menu,"Child Int", "1", "Label", "Enter number", "Verified", "child_int")
    ui:addChildInputString(dialog.menu,"Child String", "abc", "Label", "Type text", "Home", "child_str")
    ui:addChildButton(dialog.menu,"Child Button", "child_btn")

local json = ui:generateJSON()

require("IniEy")
addIntoModule(json,"IniEy")
```

---

## preferences.lua

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

---

## world_saver.lua

World bookmark management system with ImGui interface.

```lua
local pref = require("preferences")
local json = require("json")
local saved = pref:new("world_saver.json")

local worldSavers = saved:get("saved_world", {})
local enabled = saved:get("opened", false)
local buf_title = ""
local buf_door = ""

function RefreshGui()
    local list = {}
    for _, entry in ipairs(worldSavers) do
        table.insert(list, {entry.title, "Door: " .. entry.door})
    end
    editValue("world_saver_list", json:encode(list))
end

function GoToWorld(entry)
    sendPacket(3, "action|join_request\nname|".. entry.title .. "|".. entry.door .. "\ninvitedWorld|1\n")
end

function OnDrawImGui(delta)
    if enabled then
        ImGui.Begin("World Saver")

        -- Input Title
        ImGui.Text("Title:")
        local contentX = ImGui.GetContentRegionAvail().x
        ImGui.PushItemWidth(contentX)

        local changed, newVal = ImGui.InputText("##title", buf_title, 256)
        if changed then
            buf_title = newVal
        end
        if ImGui.Button("Current World") then
            buf_title = getCurrentWorldName() or ""
        end
        
        -- Input DoorID
        ImGui.Text("Door ID:")
        changed, newVal = ImGui.InputText("##door", buf_door, 256)
        if changed then
            buf_door = newVal
        end
        
        -- Create Button
        if ImGui.Button("Create", ImVec2(contentX, 0)) then
            if buf_title ~= "" and buf_door ~= "" then
                table.insert(worldSavers, {
                    title = buf_title,
                    door = buf_door
                })
                saved:set("saved_world", worldSavers)
                saved:save()
                buf_title = ""
                buf_door = ""
                RefreshGui()
            end
        end

        ImGui.Separator()

        -- Display saved worlds
        for i, entry in ipairs(worldSavers) do
            ImGui.Text(entry.title .. " - Door: " .. entry.door)
            ImGui.SameLine()
            if ImGui.Button("Go##" .. i, ImVec2(50, 0)) then
                GoToWorld(entry)
            end
            ImGui.SameLine()
            if ImGui.Button("Delete##" .. i, ImVec2(50, 0)) then
                table.remove(worldSavers, i)
                saved:set("saved_world", worldSavers)
                saved:save()
                RefreshGui()
                break
            end
        end

        ImGui.End()
    end
end

local ui = UserInterface.new("World Saver", "World")
ui:addLabelApp("World Saver", "Save and quickly access your favorite worlds")
ui:addTooltip("Information", "Save worlds with door IDs for quick access", "Info", false)
ui:addToggle("Enable", saved:get("opened", false), "enable_world_saver", false)

function OnValue(type, name, value)
  if name == "enable_world_saver" then
    enabled = value
    saved:set("opened", enabled)
    saved:save()
  end
end

applyHook()
```

---

## fetch.lua

Network request example with dynamic script loading.

```lua
local res, err = fetch(
    "https://raw.githubusercontent.com/PowerKuy/Growlauncher-Documentation/refs/heads/main/sample-scripts/example-for-fetch.lua")

if not res then
    LogToConsole(err)
    return
end

local chunk, loadErr = load(res)
if not chunk then
    LogToConsole(loadErr)
    return
end

chunk()
```

---

## example-for-fetch.lua

Simple notification script used for fetch demonstration.

```lua
LogToConsole("Hello im from Fetch script!")
var = {}
var.v1 = "OnAddNotification"
var.v2 = "interface/large/adventure.rttex"

var.v3 = "Omgg it works!, Fetch is working!"
var.v4 = "audio/gong.wav"
sendVariant(var)
```

---

## Next Steps

- Explore the [Functions](/functions/) documentation for more API calls
- Check [Namespaces](/namespaces/) for organized functionality
- Learn about [Structs](/structs/) for data structures
- Discover [ImGui](/imgui/) for advanced UI creation
- Understand [Hooks](/hooks/) for event handling
