import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Head from "../../../Head/Head";
import Footer from "../../../Footer/Footer";
import {useNavigate} from 'react-router-dom'
import HistoryDetailCard from "./HistoryDetailCard";
import Style from "./HistoryDetailCard.module.css"


export default function HistoryDetailCards(){
    const productos = useSelector(state=> state.products)
    const detalle = useSelector((state) => state.historyDetail);
    const navigate = useNavigate();

    function completeDetails(id){
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].id === id){
                return{
                    name: productos[i].name,
                    img: productos[i].img,
                    brand: productos[i].brand
                }
            }
            
        }
    }

    function regresar(){
        navigate('/history')
    }

    return(
        <>
            <Head />
                
                <div className={Style.uppp}>
                    <div className={Style.iii}>
                        <div className={Style.ii1}>Producto</div>
                        <div className={Style.ii2}>Marca</div>
                        <div className={Style.ii3}>Cantidad</div>
                        <div className={Style.ii4}>Precio</div>
                        <div className={Style.ii5}>Subtotal</div>
                    </div>
                    <div>
                        {
                            detalle.map(e => {
                                return(
                                    <HistoryDetailCard
                                        key={e.productId}
                                        id = {e.orderId}
                                        quantity = {e.quantity}
                                        price = {e.price}
                                        idProduct = {e.productId}
                                        detail = {completeDetails(e.productId)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={Style.btnult}>
                        <button className={Style.backk} onClick={()=> regresar()}>Regresar</button>
                    </div>
                </div>
                
            <Footer />
        </>
    )
}