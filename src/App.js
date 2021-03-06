import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "./redux/actions";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
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
import CompraRealizada from "./components/CompraRealizada/CompraRealizada";
import EditUser from "./components/EditUsers/EditUser";
import Favoritos from "./components/Favs/Favoritos";
import HistoryDetailCards from "./components/Profile/History/HistoryDetail/HistoryDetailCards";
import CompraFallida from "./components/CompraFallida/CompraFallida";
import Contactanos from "./components/Contactanos/Contactanos";
import ForgotPwd from "./components/Profile/ResetPassword/forgotPassword";
import ResetPassword from "./components/Profile/ResetPassword/resetPassword";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const loggedInUser = sessionStorage.getItem("userAuth");
		console.log(loggedInUser);
		if (loggedInUser) {
			dispatch(authUser(loggedInUser));
		}
	}, []);

	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/favs" element={<Favoritos />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/profile-details" element={<ProfileDetails />} />
				<Route path="/inicio-seccion" element={<InicioSeccion />} />
				<Route path="/history" element={<History />} />
				<Route path="/history/:id" element={<HistoryDetailCards />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/sobreNosotros" element={<SobreNosotros />} />
				<Route path="/contactanos" element={<Contactanos />} />

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
				<Route path="/editUser" element={<EditUser />} />
				<Route path="/realizado" element={<CompraRealizada />} />
				<Route path="/rechazada" element={<CompraFallida />} />
				<Route path="/forgot-pwd" element={<ForgotPwd />} />
				<Route path="/reset-password/:id/:token" element={<ResetPassword />} />
			</Routes>
		</>
	);
}

export default App;
