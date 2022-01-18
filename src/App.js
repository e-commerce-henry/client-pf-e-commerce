import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={ Home }/>
          {/* <Route path="/" element={} />
          <Route path="/" element={} /> */}
        </Routes>
      </div>  
  );
}

export default App;
