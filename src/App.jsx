
import React from 'react'
import './App.css'
import Homeone from './Components/Homeone'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';


function App() {

  return (
    <Router>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Homeone/>}/>

     </Routes>
     <Footer/>
    </Router>
  )
}

export default App
