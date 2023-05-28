import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import People from './pages/people.component';
import NavBar from './components/navbar.component';
import VaccineDetails from './pages/vaccineDetails.component';
import Vaccines from './pages/vaccines.component';
import PatientDetails from './pages/patientDetails.component';


function App() {
  return (  
    <div>

      <Router>
        <NavBar />
        <Routes> 
          <Route path="/people" element={<People />} />
          <Route path="/vaccines" element={<Vaccines />} />
          <Route path="/patient" element={<PatientDetails />} />
          <Route path="/vaccine" element={<VaccineDetails />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
