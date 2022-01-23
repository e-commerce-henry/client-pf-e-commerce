import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Favs from './components/Favs/Favs';
import Cart from './components/Cart/Cart';
import ProfileDetails from './components/Profile/ProfileDetails';
import History from './components/Profile/History';
import FAQ from './components/FAQ/FAQ';
import ProductDetail from './components/ProductDetails/ProductDetails';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import TerminoYcondiciones from './components/TerminosYCondiciones/TerminosYCondiciones';
import PoliticaDePrivacidad from './components/PoliticaDePrivacidad/PoliticaDePrivacidad';



        


function App() {
  return (
      <>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/history" element={<History />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path= "/products/:id" element = {<ProductDetail/>} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path= "/terminoYcondiciones" element={<TerminoYcondiciones />} />
          <Route path= "/politicaDePrivacidad" element={<PoliticaDePrivacidad />} />
        </Routes>
      </>  
  );
}

export default App;
