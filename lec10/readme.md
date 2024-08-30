# useEffect, useRef and useCallback with 1 project
- Project Password Generator
   - customise
     - length with slider
     - include /Exclude 
       - Numbers
       - Characters
    - copy password
   - Goal : optimised way 

## Let's Start 

- Create a vite app : 05passwordgenerator
- configure tailwind
- Clean up _App.jsx_ ; all work is done there
---
- First identify the variables that are changing , their default value and datatype 
```js
const [length , setLength] = useState(8) 
const [numberAllowed , setNumberAllowed] = useState(false)
const [charAllowed , setCharAllowed] = useState(false)
const [password , setPassword] = useState('')
```


- [link](https://react.dev/reference/react/useCallback) give it a read

