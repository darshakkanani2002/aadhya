import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Back_to_top from './Component/Back_to_top'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Component/Pages/Home/Home'
import AppDevelopment from './Component/Pages/Services/Pages/AppDevelopment/AppDevelopment'
import GameDevelopment from './Component/Pages/Services/Pages/GameDevelopment/GameDevelopment'
import Contact from './Component/Pages/Contact/Pages/Contact'

function App() {

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/app' element={<AppDevelopment />}></Route>
          <Route path='/game' element={<GameDevelopment></GameDevelopment>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
        <Back_to_top></Back_to_top>
      </Router>


    </div>
  )
}

export default App
