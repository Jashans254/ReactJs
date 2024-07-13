# Why you need hooks and project 

Usage can be defined like Indain cricket would practice a pull shot if the match was going to held at other countries , but they would practice against bouncers against Austrailia as they have bouncy pitches
- End point is ; the use of hooks depend on the situation ; maybe they are not needed 

## Let's start

- Create a react vite app 
  - `npm create vite@latest`
  - 02counter name of project and select react and JS
  -  `cd 02counter` and `npm i` to install required packages
  - `npm run dev`
- Go to _App.jsx_ and clean it like previous chapter
  - write the code
```js
import { useState } from 'react'
import './App.css'
function App() {
  let counter = 15;
  const addValue = () =>{
    counter++;
    console.log(counter)
  }
  return (
    <>
       <h1>Counter App</h1>
       <h2>Counter value:{counter}</h2>
       <button onClick={addValue}>Addvalue {counter}</button>
       <br />
       <button>Remove value {counter}</button>
    </>
  )
}

export default App

``` 
- Go to inspect and try clicking the **Addvalue** button 
  - in inspect ->console ; see the value of counter is incremented
  - but in the UI ; it is not 
     - Problem: UI updation 
     - React says ; By clcking on One button ; 5-6 things are getting updated , you will not decide but React will 
       - it will react on variable updation
- [doclink](https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js) : Have a overview of Hooks , not the inner working

- New code
```js
import { useState  } from 'react'
import './App.css'

function App() {

 let [counter , setCounter] = useState(15) // responsible for state management , dom proagation

  const addValue = () =>{
    if(counter<20)
      {
      setCounter(counter+1);
      }
    //or
    //counter = counter +1
    //setCounter(counter);
  }
  const removeValue = () =>{
    if(counter>0)
    {
    setCounter(counter-1);
    }
  }
  return (
    <>
       <h1 >Counter App</h1>
       <h2>Counter value:{counter}</h2>
       <button onClick={addValue}><strong> Addvalue {counter}</strong></button>
       <br />
       <br />
       <button onClick ={removeValue}><strong> Remove value {counter}</strong></button>
       <p>footer : {counter}</p>
    </>
  )
}
export default App
```

- Code snippets 
  - `import { useState  } from 'react' ` import like this
  - $Protip💡$: React is imported by babel automatically
  - `let [counter , setCounter] = useState(15) `
     - usestate() is a hook
     - instead of `let counter = 15` ; we use above
     - counter is the variable refernce 
     - 15 is the default value
     - setCounter is a function reference , which takes counter variable as a parameter after updation
```js
 const removeValue = () =>{
    if(counter>0)
    {
    setCounter(counter-1);
    }
  }
```
- so when we update the value of counter , pass through setCounter function it will automatically update all the counter variable 's value 
