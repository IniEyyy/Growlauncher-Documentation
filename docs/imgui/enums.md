# Enums & Constants

ImGui enumerations and constants.

## Core Enums

### ImGuiWindowFlags
Window display and behavior flags.

### ImGuiInputTextFlags
Input text widget flags.

### ImGuiColorEditFlags
Color editor widget flags.

### ImGuiSliderFlags
Slider widget flags.

### ImGuiButtonFlags
Button widget flags.

### ImGuiSelectableFlags
Selectable widget flags.

### ImGuiTreeNodeFlags
Tree node widget flags.

### ImGuiTabBarFlags
Tab bar flags.

### ImGuiTabItemFlags
Tab item flags.

### ImGuiTableFlags
Table widget flags.

### ImGuiTableColumnFlags
Table column flags.

### ImGuiTableRowFlags
Table row flags.

### ImGuiTableBgTarget
Table background color target.

### ImGuiDockNodeFlags
Dock node flags.

### ImGuiPopupFlags
Popup behavior flags.

### ImGuiFocusedFlags
Focus checking flags.

### ImGuiHoveredFlags
Hover checking flags.

### ImGuiDragDropFlags
Drag and drop flags.

### ImGuiComboFlags
Combo box flags.

### ImGuiCond
Condition flags for widget positioning.

### ImGuiStyleVar
Style variable indices.

### ImGuiCol
Color indices for styling.

### ImGuiDataType
Data type enumeration.

### ImGuiKey
Keyboard key enumeration.

### ImGuiMouseCursor
Mouse cursor enumeration.

### ImGuiDir
Direction enumeration.

### ImGuiMouseButton
Mouse button enumeration.

### ImGuiMod
Keyboard modifier enumeration.

### ImGuiKeyChord
Key chord enumeration.

### ImGuiLayoutType
Layout type enumeration.

### ImGuiSortDirection
Sort direction enumeration.

### ImGuiViewportFlags
Viewport flags.

### ImGuiWindowClass
Window class structure.

## Constants

### Standard Values
- `ImGui.VERSION` - ImGui version string
- `ImGui.VERSION_NUM` - ImGui version number
- `ImGui.VERSION_BUILD` - ImGui build number

### Default Values
- `ImGui.DEFAULT_FONT_SIZE` - Default font size
- `ImGui.DEFAULT_ALPHA` - Default alpha value
- `ImGui.DEFAULT_WINDOW_PADDING` - Default window padding
- `ImGui.DEFAULT_FRAME_PADDING` - Default frame padding
- `ImGui.DEFAULT_ITEM_SPACING` - Default item spacing
- `ImGui.DEFAULT_ITEM_INNER_SPACING` - Default item inner spacing

### Limits
- `ImGui.MAX_TEXT_LENGTH` - Maximum text length
- `ImGui.MAX_COLOR_CHANNELS` - Maximum color channels
- `ImGui.MAX_IMAGE_CHANNELS` - Maximum image channels
- `ImGui.MAX_WINDOW_NAME_LENGTH` - Maximum window name length

### Special Values
- `ImGui.FLOAT_MAX` - Maximum float value
- `ImGui.FLOAT_MIN` - Minimum float value
- `ImGui.INTEGER_MAX` - Maximum integer value
- `ImGui.INTEGER_MIN` - Minimum integer value

## Usage Examples

```lua
-- Using flags
local flags = ImGui.WindowFlags.NoResize | ImGui.WindowFlags.NoMove
if ImGui.Begin("Window", true, flags) then
    ImGui.Text("Window content")
    ImGui.End()
end

-- Using colors
local color = ImGui.GetColorU32(ImGui.Col.WindowBg, 1.0)

-- Using keys
if ImGui.IsKeyPressed(ImGui.Key.Space) then
    log("Space key pressed")
end

-- Using mouse buttons
if ImGui.IsMouseClicked(ImGui.MouseButton.Left) then
    log("Left mouse button clicked")
end
```
