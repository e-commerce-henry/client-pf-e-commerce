import React from 'react';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Cart.module.css'
import ShoppingCart from '../ShoppingCart/ShoppingCart';



function Cart(){
   
    return(
        <>
            <Head />
            <div className={Style.container} >
                <ShoppingCart />
            </div>
            <Footer />
        </>
    )
};

export default Cart;