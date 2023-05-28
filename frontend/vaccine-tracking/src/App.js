import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import People from './pages/people.component';
import NavBar from './components/navbar.component';
import Vaccines from './pages/vaccines.component';


function App() {
  return (  
    <div>

      <Router>
        <NavBar />
        <Routes> 
          <Route path="/" element={<People />} />
          <Route path="/vaccine" element={<Vaccines />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
