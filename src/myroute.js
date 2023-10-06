import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Homme from './Homme'
import PropsSample from './Product'
import MyApi from './MyApi'


export default function Myroute() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homme/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Props' element={<PropsSample/>}></Route>
    <Route path='/MyApi' element={<MyApi/>}></Route>
   

    </Routes>
    </BrowserRouter>
  )
}
