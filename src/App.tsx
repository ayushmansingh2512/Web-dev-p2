import React from 'react'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Cards from './components/cards'

const App = () => {
  return (
    <div>
      <Background />
      <Navbar />
    <Cards/>
    </div>
  )
}

export default App