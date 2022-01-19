import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Favs from './components/Favs/Favs';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/Profile/ProfileDetails';
import History from './components/Profile/History';

function App() {
  return (
      <>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </>  
  );
}

export default App;
