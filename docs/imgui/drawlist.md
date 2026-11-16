# Draw Lists

Growlauncher exposes two ready to use draw lists: `ImGui.BG` for the background layer and `ImGui.FG` for the foreground layer. Both are Lua tables whose methods forward the layer index as the first native argument, so call them with a colon.

```lua
function ondraw()
    local layer = ImGui.FG
    -- call layer methods here
end
```

## Methods

| Method                      | Description                          |
| :-                          | :-                                   |
| `AddLine`                   | Draw a line                          |
| `AddRect`                   | Draw a rectangle outline             |
| `AddRectFilled`             | Draw a filled rectangle              |
| `AddRectFilledMultiColor`   | Draw a filled rectangle with gradients |
| `AddCircle`                 | Draw a circle outline                |
| `AddCircleFilled`           | Draw a filled circle                 |
| `AddNgon`                   | Draw a regular polygon outline       |
| `AddNgonFilled`             | Draw a filled regular polygon        |
| `AddText`                   | Draw text                            |

## Notes

- The Lua wrapper ignores return values, so the methods return nothing.
- Argument order follows the ImGui draw list API. Parameter names and types for this build are not verified yet.
- `ImGui.GetBackgroundDrawList()` and `ImGui.GetForegroundDrawList()` are described on the Misc page, but they are not part of the binding table in Growlauncher 7.0.38. Use `ImGui.BG` and `ImGui.FG` instead.
- `NewDrawList(index)` and `ImVec2`/`ImVec4` are defined by the embedded Lua helper that creates both lists.
