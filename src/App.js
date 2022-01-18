import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
      <>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route path="/" element={} />
          <Route path="/" element={} /> */}
        </Routes>
      </>  
  );
}

export default App;
