import React from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contacto from './Components/Contacto'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacto' element={<Contacto/>} />
    </Routes>
    </>
  )
}

export default App;