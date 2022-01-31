import React from 'react';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Cart.module.css'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';




function Cart(){
    const auth = useSelector(state => state.userAuth)
    return(
        <>
            <Head />
            <div className={Style.titulo}>MI CARRITO</div>
            <div className={Style.container} >
                {
                    auth?<ShoppingCart />: <p>Debes iniciar sesion</p>
                }
                
            </div>
            <div className={Style.favfooter}><Footer /></div>
        </>
    )
};

export default Cart;