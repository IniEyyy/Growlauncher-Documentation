# ImGui

## Overview

ImGui provides immediate mode GUI functions for creating custom interfaces, overlays, and interactive elements within Growlauncher scripts.

In Growlauncher 7.0.38 the binding table registers 249 functions, the same set listed in `ImGui_Function_List.lua`. Declarations in `annotations/imgui.lua` that are absent from that list are editor hints only and are not callable in this build.

## Categories

- [Demo & Debug Utilities](/imgui/demo) - Debug and demo functions
- [Window Management](/imgui/window) - Window creation and control
- [Child Windows](/imgui/child-windows) - Child window management
- [Window Utilities](/imgui/window-utilities) - Window helper functions
- [Content Region](/imgui/content-region) - Content region management
- [Scrolling](/imgui/scrolling) - Scroll control
- [Style Stacks](/imgui/style-stacks) - Style stack operations
- [Cursor & Layout](/imgui/cursor-layout) - Layout and cursor control
- [Text Widgets](/imgui/text-widgets) - Text display widgets
- [Main Widgets](/imgui/main-widgets) - Primary interactive widgets
- [Color Editor/Picker](/imgui/color-editor) - Color selection widgets
- [Trees](/imgui/trees) - Tree view widgets
- [Selectables](/imgui/selectables) - Selection widgets
- [Data Plotting](/imgui/data-plotting) - Data visualization widgets
- [Menus](/imgui/menus) - Menu creation
- [Popups & Modals](/imgui/popups-modals) - Popup and modal windows
- [Columns](/imgui/columns) - Column layout
- [Tab Bars & Tabs](/imgui/tabs) - Tab interface
- [Drag & Drop](/imgui/drag-drop) - Drag and drop
- [Focus & Activation](/imgui/focus-activation) - Focus management
- [Item Utilities](/imgui/item-utilities) - Item helper functions
- [Miscellaneous Utilities](/imgui/misc) - Miscellaneous functions
- [Input Handling](/imgui/input) - Input event handling
- [Input Text Widgets](/imgui/input-text) - Text input widgets
- [Image Functions](/imgui/image) - Image display
- [Tables](/imgui/tables) - Table creation
- [Draw Lists](/imgui/drawlist) - Background and foreground draw lists
- [Constants](/imgui/constants) - Constant tables on the ImGui global

## Quick Start

```lua
-- Basic ImGui window
function onDrawImGui(deltaTime)
    if ImGui.Begin("My Window", true) then
        ImGui.Text("Hello, ImGui!")
        if ImGui.Button("Click Me") then
            print("Button clicked!")
        end
        ImGui.End()
    end
end

addHook(onDrawImGui, "ondrawimgui")
applyHook()
```

## Notes

- All ImGui functions should be called within the `onDrawImGui` callback
- Windows must be properly closed with `ImGui.End()`
- Use `ImGui.Begin()` to start new windows
- Refer to individual category pages for detailed function documentation
