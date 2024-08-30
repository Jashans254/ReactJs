# React router crash course 

third party lib [React Router Dom](https://reactrouter.com/en/main) 

- Make a new vite react app : 07reactRouter
- configure tailwind and cleanup _App.jsx_
- Make a new folder components in src folder ; more folder inside
  - header->Header.jsx
  - footer->

---
- will work on Header.jsx file
- install `npm i react-router-dom`
- Things in this lib
  - Link : inplace of `<a>` tag ; because anchor tag refresh the whole page when you use it 
    - in react we follow the concept of injecting new value of nodes in DOM
  - Navlink : provides additional things :-
    - isActive is a default provided parameter
    - it tell if the page is on the same link ; the Navlink wants to go 
    - simply using conditions to check if page on the same link then manipulate css propery
    - ${isActive?"text-orange-700" :"text-gray-700"}
```js
 <NavLink
className={( {isActive}) =>
`block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700" :"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
 }
  Home
</NavLink>
```

- Let's move on Footer.jsx and copy paste 
- Now to Home.jsx  ; similarly copy paste

- you can render all three in app.js but this wont work here
```js
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}
```

- Approach ; in main.jsx
- ` <RouterProvider router = {router}/>` ; routerProvider needs a prop router
- Make a new file _Layout.jsx_ in the src folder 
  - Header and footer will be displayed at every page ; but changes can occur at outlet
```js
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
```
- Make a new file About.jsx in new About folder in components folder
- In main.jsx 
  - define the path of url 
  - what to render in element
  - nested urls in children
```js
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      { 
        path: "",
        element: <Home/>
      } ,
      { 
        path: "/about",
        element: <About/>
      }
    ]
  }
])
```
- debugging in home and footer `import { Link } from 'react-router-dom'`

- add one more li in header html : About
- add to in Navlink
```html
<li>
                                <NavLink
                                to={"/about"}
                                    className={( {isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700" :"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>```

- add about page 
- now , add contact component too 

- They are the same
```js
const router1 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)
```
Easier way ; according to prefernce of coder
```js
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      { 
        path: "",
        element: <Home/>
      } ,
      { 
        path: "/about",
        element: <About/>
      } ,
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
])
```



- :id ; same layout for any range of id 
`<Route path="user/:id" element={<User />} />`

- in User.jsx ; this id should be same ; userid
```js
import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
  const {id} = useParams();
  return (
    <div>User : {id} </div>
  )
}
```


- Make a new Component Github.jsx in Github folder of component folder
- Code ; fetching data 
```js
import React, { useEffect, useState } from 'react'
const Github = () => {
    const data = useLoaderData()
    const [data , setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img   src="{data.avatar_url}" alt="Git picture" width={300} />
    </div>
  )
}
export {Github}
```
-  Optimal way  ; faster
  - Here when we just hovering over the link ; the data is fetched
  - instead of previous method where data is fetched after clicking the data 
- Code in Github.jsx 
```js
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img   src="{data.avatar_url}" alt="Git picture" width={300} />
    </div>
  )
}
export const githubInfoLoader =  async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    return data
}
export {Github}
```

- In main.jsx ; githubInfoLoader is automatically called
```js
import {Github , githubInfoLoader} from './components/Github/Github.jsx'
 <Route 
        loader={githubInfoLoader}
      path="github"
       element={<Github />} 
       />
```