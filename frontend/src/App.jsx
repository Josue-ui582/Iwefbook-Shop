import React from 'react';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About'
import BuyFrom from './Pages/BuyFrom'
import ErrorPage from './Pages/Error-Page'
import Developpement from './Pages/Developpement';
import ContactUs from './Pages/ContactUs';
import LivresAfricain from './Pages/LivresD\'auteurAfricain';
import Romans from './Pages/Romans';
import Faq from './Pages/FAQ';

const App = () => {

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/error' errorElement={<ErrorPage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/commander-de-livre-sur-amazon' element={<BuyFrom />}></Route>
            <Route path='/contact' element={<ContactUs />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/livres-du-developpement-personnel' element={<Developpement />}></Route>
            <Route path='/livres-d auteur-africain' element={<LivresAfricain />}></Route>
            <Route path='/romans-et-harlequins' element={<Romans />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
