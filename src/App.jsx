import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import OurMenu from './Components/Pages/OurMenu/OurMenu'
import Shop from './Components/Pages/Shop/Shop'
import Blog from './Components/Pages/Blog/Blog'
import Contect from './Components/Pages/Contect/Contect'
import Dark from './Components/Pages/Dark/Dark'
import AddRemove from './Components/Pages/AddRemove/AddRemove'
import LazyComponent from './Components/Pages/Lazy/Lazy'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<OurMenu />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contect' element={<Contect />} />
          <Route path='/dark' element={<Dark />} />
          <Route path='/add' element={<AddRemove />} />
          <Route path='/lazy' element={<LazyComponent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
