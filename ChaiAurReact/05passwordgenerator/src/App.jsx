import { useState  , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length , setLength] = useState(8) 
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  //useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str+='0123456789'
    if(charAllowed) str +='!@#$%^&*()_+'
    for(let i = 1 ; i < length ; i++){
      let char = str.charAt(Math.floor(Math.random() * str.length +1 ))
      pass += char
    }
    setPassword(pass)
  } ,[length , numberAllowed , charAllowed , setPassword])


  const copyPasswordToClipboard =  useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0 , 3)
    window.navigator.clipboard.writeText(passwordRef.current.value)
  },[password])
  useEffect(() => {
    passwordGenerator()
  },[length , numberAllowed , charAllowed ,passwordGenerator])
  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 ">
    <h2 className='text-white text-center my-3'>Password Generator</h2>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='Password'
           readOnly 
           ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >copy</button>


      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min = {8}
          max={100} 
          value={length}
          className='cursor-pointer'
          onChange={e => setLength(e.target.value)}
          />
          <label >Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
           defaultChecked={numberAllowed}
           id='numberInput'
          onChange={() => { 
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label >Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
           defaultChecked={charAllowed}
           id='characterInput'
          onChange={() => { 
            setCharAllowed((prev) => !prev);
          }}
          />
          <label >Character</label>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
