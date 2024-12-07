import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Store from './Component/Store'

function App() {
 

  return (
    <>
       <Navbar/>
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/store' element={<Store/>} />
       </Routes>
       <Footer/>
    </>
  )
}

export default App
