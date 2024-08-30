# Custom hooks in react | currency Project 

- Make a vite React app : 06currencyConverter
- configure tailwind
- clean up _src/App.jsx_ 
- Make a new folder hooks in src to make custom hook 
  - make a new file useCurrencyInfo.js
    - $Protip💡$:make sure the extension is js not jsx
    - $Protip💡$: nomenclature 
  - we will use predefined hook : 
  - use url `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-07-15/v1/currencies/usd.json` 
    - can change the date
    - can change usd to inr 
  - Alternative `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
```js
import {useEffect , useState} from 'react'

function useCurrencyInfo( currency){

    const [data , setData]  = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-07-15/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(data => setData(res[currency]))
        console.log(data)
    } ,[currency])
    return data
}

export default useCurrencyInfo
```
- code snippets
  - we are fetching an API ; and if succesful ; 
  - taking out the data as a json format ; because sometimes it is of string format
  - then updating the **data** variable with res[currency] because of data key value pair
  - here ; "date": "2024-07-15",
  "usd": {
    "$myro": 9.61387977,
    "$wen": 8948.32361909,
  - we want to fetch details of currency here key will be usd
  - as currency changes ; it is dependency in the useEffect
  - we return the data and export the hook
    
- Make a new folder components and inside it a new file ; InputBox.js
   - We make a reusable conponent ; first rcfe shortcut 
   - Code snippets
   - we take input all the parameters needed in function arg list 
   - and use them in the return block
   - we use a new hook that generates a unique id 
   - to bind label and input field ; here
   - `const amountInputId = useId() `
   - to render multiple options we use map() 

- Standard Practice
  - Make a new file index.js in the components folder
  - so that in App.jsx we can import like 
  - `import {InputBox } from './components'`


- Go to App.jsx
