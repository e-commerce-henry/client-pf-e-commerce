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
                    <div className={Style.tot}>
                        $
                    </div>
                </div>
                <div className={Style.botones}>
                    <div> <button className={Style.btnback}>BACK</button> </div>
                    <div> <button className={Style.btnfinalizar}>FINALIZAR COMPRA</button> </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default OrderDetails;