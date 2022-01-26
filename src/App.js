import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Favs from "./components/Favs/Favs";
import Cart from "./components/Cart/Cart";
import ProfileDetails from "./components/Profile/ProfileDetails";
import History from "./components/Profile/History";
import FAQ from "./components/FAQ/FAQ";
import ProductDetail from "./components/ProductDetails/ProductDetails";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import TerminosYcondiciones from "./components/TerminosYCondiciones/TerminosYCondiciones";
import PoliticaDePrivacidad from "./components/PoliticaDePrivacidad/PoliticaDePrivacidad";
import Equipo from "./components/Equipo/Equipo";
import AddUsers from "./components/AddUsers/AddUsers";
import InicioSeccion from "./components/Profile/InicioSeccion";
import OrderDetails from "./components/Orders/OrderDetails";
import CompraExitosa from "./components/Orders/CompraExitosa";

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/favs" element={<Favs />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/profile-details" element={<ProfileDetails />} />
				<Route path="/inicio-seccion" element={<InicioSeccion />} />
				<Route path="/history" element={<History />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/sobreNosotros" element={<SobreNosotros />} />
				<Route
					path="/terminosYcondiciones"
					element={<TerminosYcondiciones />}
				/>
				<Route
					path="/politicaDePrivacidad"
					element={<PoliticaDePrivacidad />}
				/>
				<Route path="/equipo" element={<Equipo />} />
				<Route path="/addUsers" element={<AddUsers />} />
				<Route path="/probando" element={<OrderDetails />} /> 
				<Route path="/probando2" element={<CompraExitosa />} /> 

			</Routes>
		</>
	);
}

export default App;
