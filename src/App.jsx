import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import OurMenu from './Components/Pages/OurMenu/OurMenu'
import Shop from './Components/Pages/Shop/Shop'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<OurMenu />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
