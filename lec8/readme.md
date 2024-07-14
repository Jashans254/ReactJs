# A react interview question on counter

- use [prev](/lec5/readme.md) 
  - what would be the output if we modify the addValue funciton
```js
 const addValue = () =>{
    if(counter<20)
      {
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      }
  }
```
- it should increment the value by 4 when clicking addvalue button
  - but no it doesnt. Why?
    - because usestate takes the things as a batch
    - it sees similiar jobs ; and make a batch 
    - so it  will eventually see that all these are updating the same variable
    - so it only calls the function one time
- what could be possible solution
  - hidden feature of setCounter() function
    - we can include funciton call inside the function
    - `setCounter( (prevCounter) => prevCounter + 1);` ; like this
    - the prevCounter refernces to the previous state of the counter variable from the array ` [counter , setCounter] `

- so , finally the function shall look like 
```js
 const addValue = () =>{
    if(counter<20)
      {
      setCounter( (prevCounter) => prevCounter + 1);
      setCounter( (prevCounter) => prevCounter + 1);
      setCounter( (prevCounter) => prevCounter + 1);
      setCounter( (prevCounter) => prevCounter + 1);
      }
  }
```