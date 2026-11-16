# Module Functions

## Overview

Module functions provide capabilities for creating UI modules, managing categories, shortcuts, and sending notifications in Growlauncher.

Icons are Material Icons names. The launcher resolves each icon string reflectively as `androidx.compose.material.icons.rounded.<Name>`, so `"Verified"`, `"SportsEsports"`, `"Settings"`, and `"Info"` are valid examples. An unknown name falls back to the warning icon.

## Functions

---

### sendDialog()
`sendDialog(dialog:Dialog)`
- **Description**: Send a GL dialog
- **Parameters**: 
    - `dialog: [Dialog](/structs/dialog#dialog)` - Dialog object
- **Returns**: 
    - None
- **Example**:
    ```lua
    sendDialog({title="Ey", message="HEY"})
    ```

---

### addCategory()
`addCategory(name:string, icon:string)`
- **Description**: Add UI category
- **Parameters**: 
    - `name: string` - Category name
    - `icon: string` - Material Icons Rounded name, for example `Verified` or `SportsEsports`
- **Returns**: 
    - None
- **Example**:
    ```lua
    addCategory("Tools", "Verified")
    ```

---

### addShortcut()
`addShortcut(name:string)`
- **Description**: Add shortcut
- **Parameters**: 
    - `name: string` - Shortcut name
- **Returns**: 
    - None
- **Example**:
    ```lua
    addShortcut("FindPath")
    ```

---

### removeShortcut()
`removeShortcut(name:string)`
- **Description**: Remove shortcut
- **Parameters**: 
    - `name: string` - Shortcut name
- **Returns**: 
    - None
- **Example**:
    ```lua
    removeShortcut("FindPath")
    ```

---

### requireModule()
`requireModule(name:string)`
- **Description**: Requires module
- **Parameters**: 
    - `name: string` - Module name
- **Returns**: 
    - None
- **Example**:
    ```lua
    requireModule("IniEy")
    ```

---

### addIntoModule()
`addIntoModule(json:string, category:string)`
- **Description**: Adds a JSON-defined module to a category
- **Parameters**: 
    - `json: string` - JSON module definition
    - `category: string` - Module category
- **Returns**: 
    - None
- **Note**:
    - Items use `text` as the label and `alias` as the value key. A toggle also accepts `default`, `description`, `icon`, and `autosave`. The `alias` is the name you pass to `editToggle` or `editValue` to flip it from Lua.
    - Icons follow the same Material Icons Rounded names as `addCategory`.
- **Example**:
    ```lua
    addIntoModule([[{
      "text": "ModFly",
      "alias": "ModFly",
      "type": "toggle",
      "icon": "Flight",
      "default": false
    }]], "IniEy")
    editToggle("ModFly", true)
    ```

---

### sendNotification()
`sendNotification(text:string)`
- **Description**: Send notification popup
- **Parameters**: 
    - `text: string` - Notification text
- **Returns**: 
    - None
- **Example**:
    ```lua
    sendNotification("Saved!")
    ```
