import Style from './OrderDetails.module.css'
import Head from '../Head/Head.jsx'
import Footer from '../Footer/Footer';
import OrderItem from './OrderItem';
import { useSelector } from "react-redux";


function valCart(e){
    if(e.id){
        return(
            <OrderItem
            id = {e.id}
            name = {e.name}
            price= {e.price}
            img ={e.img}
            brand={e.brand}
            />
        )
    }
}

function OrderDetails(){
    const order = useSelector(state => state.cart)

    return(
        <>
            <Head />
            <div className={Style.order}>
            <div className={Style.titulo}>Estás a punto de realizar la siguiente compra</div>

                <div>
                    {
                        order.map(e => (
                            valCart(e)
                        ))
                    }
                </div>
                <div className={Style.grid}>
                    <div className={Style.total}>
                        SUMA TOTAL
                    </div>
                </div>
                <div> <button>BOTON BACK</button> </div>
                <div> <button>BOTON FINALIZAR COMPRA</button> </div>
                
            </div>
            <Footer />
        </>
    )
};

export default OrderDetails;