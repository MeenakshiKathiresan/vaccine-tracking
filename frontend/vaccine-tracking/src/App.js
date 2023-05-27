import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './pages/users.component';
import NavBar from './components/navbar.component';


function App() {
  return (  
    <div>

      <Router>
        <NavBar />
        <Routes> 
          <Route path="/" element={<UserPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
