# 🚀 Getting Started

## Requirements

- Growlauncher installed (buy it [here](https://discord.gg/powerkuyofficial))
- Basic Lua knowledge (Lua 5.4)

## Script Path

Make sure to place your Lua scripts in the correct directory based on your Growlauncher version:

### GL < v6.1.25
```
storage/emulated/0/Android/data/launcher.powerkuy.growlauncher/ScriptLua/
```

### GL v6.1.25+
```
storage/emulated/0/Android/data/launcher.powerkuy.growlauncher/files/ScriptLua/
```

### GL v7.0.0
```
storage/emulated/0/Android/data/launcher.powerkuy.growlauncher/media/ScriptLua/
```
*To support the new Android system*

### GL v7.0.1+
```
storage/emulated/0/Android/media/launcher.powerkuy.growlauncher/ScriptLua/
```
*To support the new Android system and ensure easier file management*

## Module Icon Source

For custom modules, you can use icons from:
- `https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled`

## First Script Example

Create a simple Lua script to test your setup:

```lua
-- Basic hello world script
LogToConsole("Hello from Growlauncher!")

-- Display a notification
sendNotification("Welcome to Growlauncher scripting!", "info")

-- Get current world name
local worldName = GetWorldName()
LogToConsole("Current world: " .. worldName)
```

## Next Steps

- Learn about [Structs](/structs/)
- Explore [Functions](/functions/)
