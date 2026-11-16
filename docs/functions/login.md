# Login Functions

## Overview

Login functions control the native LoginHandler object used by the launcher. They are rarely needed in scripts.

## Functions

---

### setLogin()
`setLogin(platformID, mac, rid, wk, ltoken)`
- **Description**: Forward five login values to the native LoginHandler.
- **Parameters**:
    - `platformID: integer` - Numeric platform identifier
    - `mac: string` - Device MAC value
    - `rid: string` - Login rid value
    - `wk: string` - Login wk value
    - `ltoken: string` - Login ltoken value
- **Returns**:
    - None
- **Note**:
    - The parameter names come from the signature string embedded in the native library (`setLogin ([platformID], [mac], [rid], [wk], [ltoken])`). The launcher passes these values during its own login flow.

---

### setLoginEnabled()
`setLoginEnabled(enabled)`
- **Description**: Enable or disable the native LoginHandler.
- **Parameters**:
    - `enabled: boolean` - New enabled state
- **Returns**:
    - None
- **Example**:
    ```lua
    setLoginEnabled(true)
    ```

---
