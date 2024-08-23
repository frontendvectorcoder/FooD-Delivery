import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import OurMenu from './Components/Pages/OurMenu/OurMenu'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<OurMenu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
