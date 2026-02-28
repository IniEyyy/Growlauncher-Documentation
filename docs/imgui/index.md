# ImGui

ImGui (Dear ImGui) Lua bindings for creating user interfaces in Growlauncher.

## Overview

ImGui provides immediate mode GUI functions for creating custom interfaces, overlays, and interactive elements within Growlauncher scripts.

## Categories

- [Context Creation & Access](/imgui/context) - ImGui context management
- [Main Functions](/imgui/main) - Core ImGui functionality
- [Demo & Debug Utilities](/imgui/demo) - Debug and demo functions
- [Style Management](/imgui/style) - Style and appearance
- [Window Management](/imgui/window) - Window creation and control
- [Child Windows](/imgui/child-windows) - Child window management
- [Window Utilities](/imgui/window-utilities) - Window helper functions
- [Content Region](/imgui/content-region) - Content region management
- [Scrolling](/imgui/scrolling) - Scroll control
- [Style Stacks](/imgui/style-stacks) - Style stack operations
- [Cursor & Layout](/imgui/cursor-layout) - Layout and cursor control
- [ID Management](/imgui/id-management) - Widget ID management
- [Text Widgets](/imgui/text-widgets) - Text display widgets
- [Main Widgets](/imgui/main-widgets) - Primary interactive widgets
- [Color Editor/Picker](/imgui/color-editor) - Color selection widgets
- [Trees](/imgui/trees) - Tree view widgets
- [Selectables](/imgui/selectables) - Selection widgets
- [List Boxes](/imgui/list-boxes) - List display widgets
- [Data Plotting](/imgui/data-plotting) - Data visualization
- [Value Helpers](/imgui/value-helpers) - Value manipulation
- [Menus](/imgui/menus) - Menu creation
- [Tooltips](/imgui/tooltips) - Tooltip display
- [Popups & Modals](/imgui/popups-modals) - Popup and modal windows
- [Columns](/imgui/columns) - Column layout
- [Tab Bars & Tabs](/imgui/tabs) - Tab interface
- [Logging](/imgui/logging) - Logging functions
- [Drag & Drop](/imgui/drag-drop) - Drag and drop
- [Clipping](/imgui/clipping) - Rendering clipping
- [Focus & Activation](/imgui/focus-activation) - Focus management
- [Item Utilities](/imgui/item-utilities) - Item helper functions
- [Viewports](/imgui/viewports) - Viewport management
- [Miscellaneous Utilities](/imgui/misc) - Miscellaneous functions
- [Input Handling](/imgui/input) - Input event handling
- [Input Text Widgets](/imgui/input-text) - Text input widgets
- [Image Functions](/imgui/image) - Image display
- [Docking](/imgui/docking) - Window docking
- [Tables](/imgui/tables) - Table creation
- [State Management](/imgui/state) - State management
- [Memory Management](/imgui/memory) - Memory operations
- [Enums & Constants](/imgui/enums) - ImGui enumerations

## Quick Start

```lua
-- Basic ImGui window
function onDrawImGui(deltaTime)
    if ImGui.Begin("My Window", true) then
        ImGui.Text("Hello, ImGui!")
        if ImGui.Button("Click Me") then
            log("Button clicked!")
        end
        ImGui.End()
    end
end

addHook(onDrawImGui, "onDrawImGui")
applyHook()
```
