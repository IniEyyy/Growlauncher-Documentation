# Threading & Coroutine

## Overview

Threading and coroutine functions provide concurrency capabilities for running operations in parallel or with delays in Growlauncher.

## Functions

---

### await()
`await(function_cond:fun():boolean, timeout?:number)`
- **Description**: Await condition
- **Parameters**: 
    - `function_cond: fun():boolean` - Condition function
    - `timeout?: number` - Timeout in milliseconds
- **Returns**: 
    - None
- **Example**:
    ```lua
    await(function() return ready end, 1000)
    ```

---

### sleep()
`sleep(delay:number)`
- **Description**: Sleep in milliseconds
- **Parameters**: 
    - `delay: number` - Delay in ms
- **Returns**: 
    - None
- **Example**:
    ```lua
    sleep(1000)
    ```

---

### CSleep()
`CSleep(milliseconds:number)`
- **Description**: Coroutine sleep
- **Parameters**: 
    - `milliseconds: number` - Sleep duration
- **Returns**: 
    - None
- **Example**:
    ```lua
    CSleep(500)
    ```

---

### randomSleep()
`randomSleep(min:number, max:number) -> number`
- **Description**: Random sleep in milliseconds
- **Parameters**: 
    - `min: number` - Minimum delay
    - `max: number` - Maximum delay
- **Returns**: 
    - `number` - Actual sleep time
- **Example**:
    ```lua
    randomSleep(500, 1000)
    ```

---

### randomCSleep()
`randomCSleep(min:number, max:number) -> number`
- **Description**: Random coroutine sleep
- **Parameters**: 
    - `min: number` - Minimum delay
    - `max: number` - Maximum delay
- **Returns**: 
    - `number` - Actual sleep time
- **Example**:
    ```lua
    randomCSleep(200, 400)
    ```

---

### runThread()
`runThread(func:function, ...any) -> any ...`
- **Description**: Run function in new thread
- **Parameters**: 
    - `func: function` - Function to run
    - `...any` - Arguments to pass
- **Returns**: 
    - `any ...` - Return values
- **Example**:
    ```lua
    runThread(function() log("Thread") end)
    ```

---

### runCoroutine()
`runCoroutine(func:function, ...any) -> any ...`
- **Description**: Run coroutine
- **Parameters**: 
    - `func: function` - Function to run
    - `...any` - Arguments to pass
- **Returns**: 
    - `any ...` - Return values
- **Example**:
    ```lua
    runCoroutine(function() log("Coroutine") end)
    ```
