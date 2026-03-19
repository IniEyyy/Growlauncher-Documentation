# Module Functions

## Overview

Module functions provide capabilities for creating UI modules, managing categories, shortcuts, and sending notifications in Growlauncher.

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
    - `icon: string` - Category icon
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
- **Description**: Adds JSON-defined module
- **Parameters**: 
    - `json: string` - JSON module definition
    - `category: string` - Module category
- **Returns**: 
    - None
- **Example**:
    ```lua
    addIntoModule("{}", "IniEy")
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
