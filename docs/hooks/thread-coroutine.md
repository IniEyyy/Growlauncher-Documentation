# Threading & Coroutine

## Functions

---

### await()
```lua
await(function_cond:fun():boolean, timeout?:number)
```
- **Description**: Await condition
- **Parameters**: `function_cond:fun():boolean`, `timeout?:number`
- **Returns**: None
- **Example**: `await(function() return ready end,1000)`

---

### sleep()
```lua
sleep(delay:number)
```
- **Description**: Sleep (ms)
- **Parameters**: `delay:number`
- **Returns**: None
- **Example**: `sleep(1000)`

---

### CSleep()
```lua
CSleep(milliseconds:number)
```
- **Description**: Coroutine sleep
- **Parameters**: `milliseconds:number`
- **Returns**: None
- **Example**: `CSleep(500)`

---

### randomSleep()
```lua
randomSleep(min:number, max:number) -> number
```
- **Description**: Random sleep (ms)
- **Parameters**: `min:number`, `max:number`
- **Returns**: `number`
- **Example**: `randomSleep(500,1000)`

---

### randomCSleep()
```lua
randomCSleep(min:number, max:number) -> number
```
- **Description**: Random coroutine sleep
- **Parameters**: `min:number`, `max:number`
- **Returns**: `number`
- **Example**: `randomCSleep(200,400)`

---

### runThread()
```lua
runThread(func:function, ...any) -> any ...
```
- **Description**: Run function in new thread
- **Parameters**: `func:function`, `...any`
- **Returns**: `any ...`
- **Example**: `runThread(function() log("Thread") end)`

---

### runCoroutine()
```lua
runCoroutine(func:function, ...any) -> any ...
```
- **Description**: Run coroutine
- **Parameters**: `func:function`, `...any`
- **Returns**: `any ...`
- **Example**: `runCoroutine(function() log("Coroutine") end)`
