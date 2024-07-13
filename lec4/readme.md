# Create your own react library and JSX
- Making a mini version personalised react 
- What & working of JSX


## Let's Start 
- ### Make a new folder _customReact_ 
  - make a new file _index.html_
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customreact.js"></script>
</body>
</html>
```
- Make a new file _customreact_ in the same folder 
  - we grab the element **root** from html file and then pass its refernce **mainContainer** to a function **customRender** where the **reactelement** is passed as an argument too.
    -  reactelement can be anything like : `<p>hello</p>` element , all its attributes and content is passed 
  - The function uses the DOM property to create that element with the properties defined and lastly append it to the dom contiainer 
```javascript
/*function customRender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
    container.appendChild(domElement)
}*/
//loop based approach
function customRender(reactElement , container){
    const domElement = document.createElement(reactElement.type) 
     domElement.innerHTML = reactElement.children
     for ( const prop in reactElement.props){
        if(prop == 'children') continue 
        domElement.setAttribute(prop , reactElement.props[prop])
     }
     container.appendChild(domElement)
}
const reactElement = {
    type:'a' ,
    props:{
        href:'https://google.com',
        target:'_blank',
    } ,
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement , mainContainer) 
```

- ### Tour to vite React 
- Open _src/main.jsx_ file 
  - we will define a function inside that file now 
  - try running the app `npm run dev`
  - we can write MyApp() instead of <MyApp/> , but not a standard practice as it is still a function
```javascript
function MyApp(){
    return (
        <div>
             <h1>Custom App in Vite</h1>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp/>
  </React.StrictMode>,
)
```

- ### More on vite
   - Try adding the  custom object 
     - it will not work as expected because render function syntax arent declared to handle this custom object
```javascript
const reactElement = {
  type:'a' ,
  props:{
      href:'https://google.com',
      target:'_blank',
  } ,
  children: 'Click me to visit google'
}
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
```

- Try another way 
   - It will work fine
```javascript
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    anotherElement
)
```

- Try One more
  - based on React own method **React** and its render method 
```javascript
const reactElement = React.createElement('a' , {
  href:'https://google.com',
  target:'_blank',},
  'Click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <A>
)
```

- #### Injection of JS 
  - Return to _App.jsx_ , function _App()_
  - {username} is a evaulated expression ; final output only 
  - can't do { if(true)  username}
```js
function App() {
  const username = "Tomato are still green"
  return (
    <>
    <Chai/>
    <h1>yo</h1>
    <p>{username}</p>
    <p>Tomato is Red</p>
    </>
  )
}
``` 
- in _main.js_ 
```js
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
```
- So , How username is injected in structure  disccussed above 
   - It is injected as it is 
   - because , after that conversion to an object
     - so according to JS object syntax , it doesn;t allow any if , for loop etc 
- in _main.js_
```javascript
const anotherUser = "chai aur  react"
const reactElement = React.createElement('a' , {
  href:'https://google.com',
  target:'_blank',},
  'Click me to visit google' ,
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
```

- #### Direct call to jsx
  - in _main.js_ 
```js
import { jsx as _jsx } from "react/jsx-runtime"
```
- #### understanding open source react 
  - go to source code [link](https://github.com/facebook/react)
  - Take just an overlook
  - check scripts->babel [link](https://github.com/facebook/react/tree/main/scripts/babel) 
  - check jsx [link](https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js) 
    - see what is expected in _ReactElement()_ method
```js
function ReactElement(
  type,
  key,
  _ref,
  self,
  source,
  owner,
  props,
  debugStack,
  debugTask,
) {
```


