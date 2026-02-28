# Image Functions

Image display functions for ImGui.

## Functions

---

### Image()
```lua
Image(user_texture_id:any, size:ImVec2, uv0:ImVec2|nil, uv1:ImVec2|nil, tint_col:ImVec4|nil, border_col:ImVec4|nil)
```
- **Description**: Display image
- **Parameters**: 
  - `user_texture_id:any` - Texture ID
  - `size:ImVec2` - Image size
  - `uv0:ImVec2|nil` - UV coordinates 0 (optional)
  - `uv1:ImVec2|nil` - UV coordinates 1 (optional)
  - `tint_col:ImVec4|nil` - Tint color (optional)
  - `border_col:ImVec4|nil` - Border color (optional)
- **Returns**: None

---

### ImageButton()
```lua
ImageButton(user_texture_id:any, size:ImVec2, uv0:ImVec2|nil, uv1:ImVec2|nil, frame_padding:integer|nil, bg_col:ImVec4|nil, tint_col:ImVec4|nil) -> boolean
```
- **Description**: Image button
- **Parameters**: 
  - `user_texture_id:any` - Texture ID
  - `size:ImVec2` - Button size
  - `uv0:ImVec2|nil` - UV coordinates 0 (optional)
  - `uv1:ImVec2|nil` - UV coordinates 1 (optional)
  - `frame_padding:integer|nil` - Frame padding (optional)
  - `bg_col:ImVec4|nil` - Background color (optional)
  - `tint_col:ImVec4|nil` - Tint color (optional)
- **Returns**: `boolean` - Button clicked

---

### ImageButton()
```lua
ImageButton(str_id:string, user_texture_id:any, size:ImVec2, uv0:ImVec2|nil, uv1:ImVec2|nil, frame_padding:integer|nil, bg_col:ImVec4|nil, tint_col:ImVec4|nil) -> boolean
```
- **Description**: Image button with string ID
- **Parameters**: 
  - `str_id:string` - Button string ID
  - `user_texture_id:any` - Texture ID
  - `size:ImVec2` - Button size
  - `uv0:ImVec2|nil` - UV coordinates 0 (optional)
  - `uv1:ImVec2|nil` - UV coordinates 1 (optional)
  - `frame_padding:integer|nil` - Frame padding (optional)
  - `bg_col:ImVec4|nil` - Background color (optional)
  - `tint_col:ImVec4|nil` - Tint color (optional)
- **Returns**: `boolean` - Button clicked
