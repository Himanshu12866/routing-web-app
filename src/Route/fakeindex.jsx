import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'

const Fakeindex = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/products/:category' element={<Products/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default Fakeindex