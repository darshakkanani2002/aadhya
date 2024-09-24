import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Back_to_top from './Component/Back_to_top'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Component/Pages/Home/Home'
import AppDevelopment from './Component/Pages/Services/Pages/AppDevelopment'

function App() {

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/app' element={<AppDevelopment />}></Route>
        </Routes>
        <Footer></Footer>
        <Back_to_top></Back_to_top>
      </Router>


    </div>
  )
}

export default App
