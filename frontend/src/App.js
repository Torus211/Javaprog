
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <Router>
      <div>
        <h1>Библиотека</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
