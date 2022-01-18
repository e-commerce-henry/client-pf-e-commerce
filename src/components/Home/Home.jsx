import Footer from "../Footer/Footer"
import Head from "../Head/Head"
import NavBar from "../Navbar/NavBar"
import Cards from "../Cards/Cards"
import Menu from "../menuCat/menu"
import SaleBanner from "../SaleBanner/SaleBanner"

export default function Home(){
    return(
        <>
        <Head />
        <NavBar />
        <SaleBanner />
        <Menu />
        <Cards />
        <Footer />
        </>
    )
};

