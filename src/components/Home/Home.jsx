import Footer from "../Footer/Footer"
import Head from "../Head/Head"
import NavBar from "../Navbar/NavBar"
import Cards from "../Cards/Cards"
import Carrusel from "../Carrusel/Carrusel"
import Menu from "../menuCat/menu"

export default function Home(){
    return(
        <>
        <Head />
        <NavBar />
        <Carrusel />
        <Menu />
        <Cards />
        <Footer />
        </>
    )
};

