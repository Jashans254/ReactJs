# Tailwind and Props in reactjs
Last Foundational lec

## Let's start

### Tailwind

- Make a vite app
  - `npm create vite@latest` in  terminal 
     - `03tailwindprops` project name 
     - `cd 03tailwindprops` and `npm i`
     - run it `npm run dev`
- [Tailwind](https://tailwindcss.com/) site 
    - Anyone who knows ; how to change color , padding , margin ; it is easier for them to use this utility
    - Get Started -> Framework Guidelines -> vite [link](https://tailwindcss.com/docs/guides/vite)
    - `npm install -D tailwindcss postcss autoprefixer` 
      -  postcss autoprefixer ; these are other dependencies needed 
      - -D is dev dependency; only needed for development purposes
    - `npx tailwindcss init -p`  ; it will create a new file
        - _03tailwindprops\tailwind.config.js_
    - configure
```js
/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- in src/index.css ; at the top write 
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- if above doesnt work 
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

- Go to _App.jsx_ 
  - clear all first
  - return `<h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind Test </h1>` - in  App function 
     - className instead of class 
  - Explore the cards and all a liitle 
- devui ; pick any card component [link](https://www.devui.io/components/cards ) and paste  in   _App.jsx_


### Props 
It makes components reusable ; instead of returning plain html , we can return a function having all the html 
- Tradiontally , html , css and js are included in separate files according to technology 
- React says , divide no axcording to the function it perform 

- So , now make a new folder named components in src folder
  - _Card.jsx_ new file 
  - $Protip💡$: install vscode extension : `ES7+ React/Redux/React-Native`
  - do rfce in _Card.jsx_ ; shortcut for exporting a function 
    - inside the function ; paste the card code now
  - in _App.jsx_ ; call the `<Card/>` function ; it will look like 
    - you can call it as many time you need
```js
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Tailwind Test </h1>
     <Card/>
    </>
  )
}
export default App

```

- _Card.jsx_ will look like
```js
import React from 'react'

function Card() {
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white">Delba</h1>
      <p class="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        View Profile →
      </button>
    </div>
  </div>
  
  )
}

export default Card
```

- #### Props : real use now 
Now even if we call the function Card function ; it will display the same value ; there may be situation like displaying products like in e-commerce website 
- IN _Card.jsx_ modify
  - `function Card(props) { console.log("props" , props)` ; rest the same
  - inspect in browser->console
- Let's play a little
  - ` <Card username="Tomato are still green"/>` ; change in _App.jsx_ file
  - Keep an eye on inspect->console
  - `<Card username="Tomato are still green" channel= "Tomato is Red"/>;` again change 
  - `<Card username="Tomato are still green" myArr=[1, 2, 3]/>` 
    - syntax error 
  - `<Card username="Tomato are still green" myArr={[1, 2, 3]}/>` ; {} is must ; pass it as an variable

- Ok , now let's use props: properties
  - `<Card username="Tomato are still green" myArr={[1, 2, 3]}/>`  in _Card.jsx_
  - in _App.jsx_ `function Card(props) {
    console.log("props" , props.username)` and see in inspect->console
- in _App.jsx_
```js
eturn (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Tailwind Test </h1>
     <Card username="John" btnText='click me'/>
     <Card username="Tom" />
    </>
  )
```
- in _Card.jsx_
```js
import React from 'react'

function Card({username , btnText = "visit me"}) {
    
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{username}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
       {btnText} →
      </button>
    </div>
  </div>
  
  )
}
export default Card
```

- So compare
  - ` <Card username="John" btnText='click me'/> <Card username="Tom" />`
---
  - `function Card({username , btnText = "visit me"}) ` 
  -` <h1 className="text-lg font-semibold text-white">{username}</h1>`
- see the changes ; this is how using the same template ; but with different properties
