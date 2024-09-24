import React from 'react';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About'
import BuyFrom from './Pages/BuyFrom'
import ErrorPage from './Pages/Error-Page'
import ContactUs from './Pages/ContactUs';

const App = () => {

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/error' errorElement={<ErrorPage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/amazone' element={<BuyFrom />}></Route>
            <Route path='/contact' element={<ContactUs />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
