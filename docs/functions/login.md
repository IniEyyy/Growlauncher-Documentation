# Login Functions

## Overview

Login functions control the native login state used by the launcher. They are rarely needed in scripts, and the exact argument meanings are not verified yet.

## Functions

---

### setLogin()
`setLogin(id, arg2, arg3, arg4, arg5)`
- **Description**: Native login helper. Requires exactly five arguments: one integer followed by four strings.
- **Parameters**:
    - `id: integer` - Numeric login identifier
    - `arg2: string` - Not verified yet
    - `arg3: string` - Not verified yet
    - `arg4: string` - Not verified yet
    - `arg5: string` - Not verified yet
- **Returns**:
    - None
- **Note**:
    - The parameter names above are placeholders. Call it only with values produced by the launcher, not with arbitrary input.

---

### setLoginEnabled()
`setLoginEnabled(enabled)`
- **Description**: Enable or disable the login state flag
- **Parameters**:
    - `enabled: boolean` - New flag state
- **Returns**:
    - None
- **Example**:
    ```lua
    setLoginEnabled(true)
    ```

---
