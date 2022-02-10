import React from 'react';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Cart.module.css'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import InicioSeccion from '../Profile/InicioSeccion';
import Warning from '../Warning/Warning';



function Cart(){
    const auth = useSelector(state => state.userAuth)
    return(
        <>
            <Head />
                <div className={Style.titulofav}>Carrito</div>

                <div className={Style.fadeinbck1} >
                    <ShoppingCart />
                </div>
            <Footer />
        </>
    )
};

export default Cart;