import { useEffect, useState  } from 'react'
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
