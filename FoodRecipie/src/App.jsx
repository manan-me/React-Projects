import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './Pages/Home/home'
import Details from './Pages/Details/details'
import Favorities from './Pages/Favorities/favorities'
import GlobalState from './Context/context'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='details/:id' element={<Details/>}/>
       <Route path='favorities' element={<Favorities/>}/>

    </Route>
  )
)

function App() {

  return (
   <GlobalState>
    <RouterProvider router={router} />
   </GlobalState>
    
  
  )
}
 
export default App
