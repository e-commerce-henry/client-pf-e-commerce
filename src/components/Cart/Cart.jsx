import React from 'react';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Cart.module.css'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import Warning from '../Warning/Warning';





function Cart(){
    const auth = useSelector(state => state.userAuth)
    return(
        <>
            <Head />
            {/* <div className={Style.titulo}>MI CARRITO</div> */}
            <div className={Style.container} >
                {
                    auth?<ShoppingCart />: <Warning /> 
                }
                
            </div>
            <Footer />
        </>
    )
};

export default Cart;