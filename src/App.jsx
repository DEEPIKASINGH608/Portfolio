import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
