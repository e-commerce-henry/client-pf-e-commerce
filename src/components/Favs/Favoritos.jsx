import React from 'react';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Favoritos.module.css'
import { useSelector } from 'react-redux';
import Warning from '../Warning/Warning';
import Favs from './Favs';





function Favoritos(){
    const auth = useSelector(state => state.userAuth)
    return(
        <>
            <Head />
            {/* <div className={Style.titulo}>MI CARRITO</div> */}
            <div className={Style.container} >
                {
                    auth?<Favs />: <Warning /> 
                }
                
            </div>
            <Footer />
        </>
    )
};

export default Favoritos;