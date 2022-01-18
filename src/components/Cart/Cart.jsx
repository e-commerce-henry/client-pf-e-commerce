import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Cart.module.css'

function Cart(){
    return(
        <>
            <Head />
            <div className={Style.container} >
                ACA VAN TODOS LOS DEL CARRITO
            </div>
            <Footer />
        </>
    )
};

export default Cart;