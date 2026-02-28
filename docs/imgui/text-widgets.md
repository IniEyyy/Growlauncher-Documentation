# Text Widgets

Text display widgets for ImGui.

## Functions

---

### Text()
```lua
Text(text:string)
```
- **Description**: Displays text
- **Parameters**: `text:string` - Text to display
- **Returns**: None

---

### Text()
```lua
Text(fmt:string, ...:any)
```
- **Description**: Displays formatted text
- **Parameters**: 
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: None

---

### TextUnformatted()
```lua
TextUnformatted(text:string)
```
- **Description**: Displays unformatted text
- **Parameters**: `text:string` - Text to display
- **Returns**: None

---

### TextColored()
```lua
TextColored(col:ImVec4, text:string)
```
- **Description**: Displays colored text
- **Parameters**: 
  - `col:ImVec4` - Text color
  - `text:string` - Text to display
- **Returns**: None

---

### TextColored()
```lua
TextColored(col:ImVec4, fmt:string, ...:any)
```
- **Description**: Displays formatted colored text
- **Parameters**: 
  - `col:ImVec4` - Text color
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: None

---

### TextDisabled()
```lua
TextDisabled(text:string)
```
- **Description**: Displays disabled text
- **Parameters**: `text:string` - Text to display
- **Returns**: None

---

### TextDisabled()
```lua
TextDisabled(fmt:string, ...:any)
```
- **Description**: Displays formatted disabled text
- **Parameters**: 
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: None

---

### TextWrapped()
```lua
TextWrapped(text:string)
```
- **Description**: Displays wrapped text
- **Parameters**: `text:string` - Text to display
- **Returns**: None

---

### TextWrapped()
```lua
TextWrapped(fmt:string, ...:any)
```
- **Description**: Displays formatted wrapped text
- **Parameters**: 
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: None

---

### LabelText()
```lua
LabelText(label:string, text:string)
```
- **Description**: Displays label with text
- **Parameters**: 
  - `label:string` - Label text
  - `text:string` - Display text
- **Returns**: None

---

### LabelText()
```lua
LabelText(label:string, fmt:string, ...:any)
```
- **Description**: Displays label with formatted text
- **Parameters**: 
  - `label:string` - Label text
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: None

---

### BulletText()
```lua
BulletText(text:string)
```
- **Description**: Displays bulleted text
- **Parameters**: `text:string` - Text to display
- **Returns**: None

---

### BulletText()
```lua
BulletText(fmt:string, ...:any)
```
- **Description**: Displays formatted bulleted text
- **Parameters**: 
  - `fmt:string` - Format string
  - `...:any` - Format arguments
- **Returns**: None

---

### Bullet()
```lua
Bullet()
```
- **Description**: Displays a bullet
- **Returns**: None
