# Understanding the react flow and structure 

- compare create-react and vite  ; once understood the flow you will be able to use any library 
- Goal is to understand how React gets injected to HTML (Foundation)
- point and time of injection

## Let's start
- basically foundational rule says; we have to inject javascript using `<script>` tag  , no exception 

## 01basicreact app

### Structure 

- _nodemodules_ folder have the dependencies needed
- _.gitignore_ ; tells which files to ignore like _nodemodules_ folder because that can be installed easily using `npm i`
- _package-lock.json_ : fix/locks the version of dependencies _package.json_
- _README.md_ : introductory file
- _public_ folder have files that are not much of importance 
  - _manifest.json_ : meta tags are looked from here , when web app works on the mobile device
  - only file important is **_index.html_** 
    - Also called "SIngle Page Application" or SPA because all the work is done here . 
      - Foundation is same : images , elements tags , sliders all are brought by DOM 
      - with DOM manipulation , we move from one page to other
    - This is the main page , which is loaded

### Working on files

- Go to **_index.html_** file and clean all the comments 
and close the head tag too 
```html
<!DOCTYPE html>
<html lang="en">
  <head>...
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

- Breaking down , part by part 
  - `<noscript>You need to enable JavaScript to run this app.</noscript>` : says that if JS is not enabled in the browser  ; enable it 
  - ```<div id="root"></div>``` : it is the only thing 

- Go to **_src/iindex.js_** file 
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
- breaking line by line 
  - line 1 & 2 depicts the library needed to manipulate the DOM of web 
    - react is a core 
    - react-dom is an implemention for web
  - line 4 ; DOM : a tree structure 
    - react creates a virtual DOM ; browser have its own main DOM . and comparision is there and changes the elements needed
    - method `createRoot` which takes an id , its just basic JS 
    - ```<div id="root"></div>``` : get back to _index.html_ ; id can have any name ; no rules 
    - our whole application will load at this div
    - refernce to all this is stored in a variable `root` 
  - line 5 ; Html main browser does what ? it renders the html
    - here is the same implemention 
    - we render here `<App/>`
    - There was tag like that in html ; YES!! it is a custom tag ; This is the power of react : JSX ; we can render html tags through javascript
    - `<React.StrictMode>`: it is just a property of react ; app can render without it too
    - it is for optimization and safe mode for development ; have advantages but it is  not complusory 
  - From does this App come from 
    - Yes! line 3 
    - visit _App.js_ file 
    - App() is a function there which return html 
    - Intersting !! React says , take a function ; return html and that html is rendered 
    - We got Programming capabilities in hmtl . Wow
  - Did we load JS, NO then How ?
     - Go to _package.josn_ and check `"react-scripts": "5.0.1",` ; this helps in loading Js in html ; need Prof
     - run the project and check the page source you will see this:- `  <script defer src="/static/js/bundle.js"></script>`
     - inspect in browser too  and see the scripts added 


## 01vitereact
