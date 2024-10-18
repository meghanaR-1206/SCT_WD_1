import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Beverage  from './pages/Beverage';
import Food  from './pages/Food';
import Wine from './pages/Wine';
import Gift from './pages/Gift';
import Chennai from './pages/Chennai';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beverage" element={<Beverage />} />
        <Route path="/food" element={<Food />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/chennai" element={<Chennai />} />
      </Routes>
    </Router>
  )
}

export default App
