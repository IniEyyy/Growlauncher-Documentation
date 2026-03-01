# Introduction

Growlauncher provides a scripting API that allows users to interact with the game environment.

## Overview

The API includes:

- **Built-in functions** - Core functionality for game interaction
- **Custom modules** - Extensible module system for custom features
- **Struct data types** - Data structures for game objects and information
- **Namespaces** - Organized API access for different functionality areas
- **ImGui integration** - Custom UI creation and management
- **Hooks & callbacks** - Event-driven programming capabilities

## Key Features

### Game Interaction
- Send and receive network packets
- Manipulate tiles and world objects
- Control player actions and movement
- Access inventory and item information

### User Interface
- Create custom ImGui interfaces
- Build module UI components
- Design interactive overlays
- Manage user preferences and settings

### Automation
- Hook into game events
- Create automated scripts
- Schedule tasks and coroutines
- Monitor game state changes

## Getting Started

1. **Read the [Getting Started Guide](/getting-started)** for basic setup
2. **Explore [Functions](/functions/)** for core API calls
3. **Check [Namespaces](/namespaces/)** for organized functionality
4. **Learn about [Structs](/structs/)** for data structures
5. **Discover [ImGui](/imgui/)** for UI creation
6. **Understand [Hooks](/hooks/)** for event handling
7. **Reference [Enums](/enums/)** for constants

## Example Usage

```lua
-- Basic script structure
function onDrawImGui(deltaTime)
    if ImGui.Begin("My Script", true) then
        ImGui.Text("Hello from Growlauncher!")
        
        if ImGui.Button("Send Chat") then
            growtopia.sendChat("Hello World!")
        end
        
        ImGui.End()
    end
end

addHook(onDrawImGui, "onDraw")
applyHook()
```

## Next Steps

- Visit the [Getting Started](/getting-started) guide for detailed setup instructions
- Browse the [Functions](/functions/) documentation for available API calls
- Check out [Sample Scripts](/sample-scripts/) for practical examples
