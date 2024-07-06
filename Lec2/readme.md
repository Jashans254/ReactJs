# Create React Projects

### Requirements 
-  An Editor where we write code ; VSCode , Vin . Sublime
- A browser where we run the code
- NodeJs : environment for Js to run on editor
  - install and check in terminal 
    - `node -v`
- React Documention : [react.dev](https://react.dev/) new site , docs refrences 

## Notes
- $Protip💡$:Docs is not Beginner Friendly . So , We use bundler like _vite_ and _Parcel_ ; their work is to give a bunch of JS files put together .
- $Protip💡$: React is a core library :
  - Website : react-dom
  - MobileApps : react-native 

## Let's Start

### Creating React Projects
- Most Basic
  - using `npm` ; 
    - $Protip💡$:it is abbreviation _node package manager_ ; it is an installer to help install libraries like `pip` command in python 
   - using `npx`
     - $Protip💡$: when we dont want to install on the sytem but directly use it ; it is abbreviation for _node package executor_ 

- Open a new folder in VsCode and write `npx create-react-app 01basicreact` in terminal
  - `create-react-app` means an utiliy/software ; with this we create a new project named  _`01basicreact`_
  - Problem here : time taken by this command is too much ; bulky utility 
  - So , recommanded _vite_ and _parcel_ or cutsom build process
- `cd 01basicreact` in terminal  and ls and see _package.json_

### Structure of files and libraries 
- First of all , open **_package.json_** file in editor and 
  - see the libraries
    - main : react-dom and react-narive
    - testing : jest etc
  - web-vitals : performance of app ; record or track 
  - scripts : to run the app
     - start : while  development 
     - test : run test cases 
     - build : generate or compile to html/css/js; app in production
     - eject : switch or introduce another framework when done with react
  - lint : red lines that tells you can write better , not an error
  - browserlist: on which version and type of browser like chrome , will our app support or work

### Run it 
- `npm run start` in terminal and it will be open in browser 
  - right click and click page source ; see why SEO purpose react lags behind 
- `npm run build` ; notice a build folder in which there are futher folders like static->js , css etc
  - in production ; this _build_ folder is served to users

### summary :
- `npx create-react-app 01basicreact`
- `cd 01basicreact` 
- `npm run start`

### Exploration and Cleaning :
- **src** folder  ; where most of the work will be done 
  - A lot of files ; we will delete unneccesary ; following ones:-
    - _setupTests.js_
    - _reportWebvitals_ : keep tracking of performance 
    - _logo.svg_ ; logo of React shown on intial page 
    - _App.test.js_ 
    - _App.css_
    - _index.css_ 
- clean _index.js_ ; it will look like 
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
  - clean _App.js_ ; it will look like 
```javascript
function App() {
  return (
  <h1>Hello World</h1>
  );
}

export default App;

```
- Now run by `npm run start` and see the rendering of "Hello World" 
## Use Faster Method ( using Vite )
- Make a new folder and open terminal and write
  - `npm create vite@latest`
  - Options :
    - Project name : 01vitereact
    - Select a framework: react
    - Select a variant : Javascript
  - Check the differnce between this and previous folder; you will see there is no _nodemodules_ folder created while using  vite
  - go look at _package.json_ 
  - dev dependencies only help in development ; they never go to production
  - How to run ; go to folder `cd 01vitereact` and `ls` in terminal and check if _package.json_ file is shown or not 
  - now do `npm install` or `npm i`
  - Run by `npm run dev`

### Exploration and Cleaning :
- **src** folder  ; where most of the work will be done 
  - A lot of files ; we will delete unneccesary ; following ones:-
    - _assets_ folder 
    - _index.css_
    - _App.css_
- clean _App.jsx_ ; it will look like after this after that
```javascript
function App() {
  

  return (
    <h1>Hello World</h1>
  )
}

export default App
```
  - clean _main.jsx_ ; it will look like this after that
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
