# Threading & Coroutine

## Functions

---

### await()
`await(function_cond:fun():boolean, timeout?:number)`
- **Description**: Await condition
- **Parameters**: 
    - `function_cond:fun():boolean`
    - `timeout?:number`
- **Returns**: 
    None
- **Example**: 
    ```lua
    await(function() return ready end,1000)
    ```

---

### sleep()
`sleep(delay:number)`
- **Description**: Sleep (ms)
- **Parameters**: 
    - `delay:number`
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
    - `milliseconds:number`
- **Returns**: 
    - None
- **Example**: 
    ```lua
    CSleep(500)
    ```

---

### randomSleep()
`randomSleep(min:number, max:number) -> number`
- **Description**: Random sleep (ms)
- **Parameters**: 
    - `min:number`
    - `max:number`
- **Returns**: 
    - `number`
- **Example**: 
    ```lua
    randomSleep(500,1000)
    ```

---

### randomCSleep()
`randomCSleep(min:number, max:number) -> number`
- **Description**: Random coroutine sleep
- **Parameters**: 
    - `min:number`
    - `max:number`
- **Returns**: 
    - `number`
- **Example**: 
    ```lua
    randomCSleep(200,400)
    ```

---

### runThread()
`runThread(func:function, ...any) -> any ...`
- **Description**: Run function in new thread
- **Parameters**: 
    - `func:function`
    - `...any`
- **Returns**: 
    - `any ...`
- **Example**: 
    ```lua
    runThread(function()
        log("Hello from thread!")
    end)
    ```

---

### runCoroutine()
`runCoroutine(func:function, ...any) -> any ...`
- **Description**: Run coroutine
- **Parameters**: 
    - `func:function`
    - `...any`
- **Returns**: 
    - `any ...`
- **Example**: 
    ```lua
    runCoroutine(function()
        log("Hello from coroutine!")
    end)
    ```
