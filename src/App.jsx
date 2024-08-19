import React from 'react'
import { BrowserRouter as Router, Routers, Route } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'

function App() {

  return (
    <>
      <Router>
        <Routers>
          <Route path='/' element={<Home />} />
        </Routers>
      </Router>
    </>
  )
}

export default App
