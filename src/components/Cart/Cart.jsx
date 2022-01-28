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
            <div className={Style.container} >
                {
                    auth?<ShoppingCart />: <p>Redirigir a logIn...</p>
                }
                
            </div>
            <Footer />
        </>
    )
};

export default Cart;