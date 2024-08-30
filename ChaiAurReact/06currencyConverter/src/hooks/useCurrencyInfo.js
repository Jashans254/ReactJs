import {useEffect , useState} from 'react'

function useCurrencyInfo( currency){

    const [data , setData]  = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-07-15/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(data => setData(data[currency]))
        console.log(data)
    } ,[currency])
    return data
}

export default useCurrencyInfo