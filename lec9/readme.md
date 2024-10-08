# Building a react project | bgChanger


## Let's Start
- Make a vite app : project name - 04bgChanger ; React + JS
   - `npm create vite@latest`
   - `cd 04bgChanger`
   - `npm i`
- configure tailwind  as done in [prevlec](/lec7/readme.md)

- As we are going to play with the UI , so usestate will be used
- Go to src/App.jsx and clear the return part ; so that we can start our project

- Code snippets
  - `<button onClick={()=>setColor("red")} ` there are buttons ; clicking on them changes the background color 
     - onclick takes a function as a paramater
  - clicking button will change in `<div className="h-screen w-full duration-200" style={{backgroundColor:color}}>` 
  - simply use of setColor() function to change the color from default "olive" to same as button color

  

```js
import { useState } from "react"

function App() {

  const [ color , setColor] = useState("olive")
  return (
    <>
    <div className="h-screen w-full duration-200" style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
```