import React from "react"
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import Style from './HistoryCard.module.css';

export default function HistoryCard({idOrder, status, total, address, shipping, fecha, userId, detail}){
    const dispatch = useDispatch()
    const productos = useSelector(state=> state.products)
    const shoppingCart = useSelector((state) => state.history);
    const navigate = useNavigate();


    function detalleOrden(){
        let detalle = []
        for (let i = 0; i < shoppingCart.length; i++) {
            if(shoppingCart[i].id === idOrder){
                detalle = shoppingCart[i].orderDetails
            } 
        }
        dispatch({type: "ADD_ACTUAL_ORDER_DETAIL", payload: detalle})
        navigate(`/history/${idOrder}`)
    }
    
    return(
        <>
            <div className={Style.container}>
                <div className={Style.header}>
                    <div className={Style.v1}>00{idOrder}</div>
                    <div className={Style.v2}>{fecha.slice(0, 10)}</div>
                    <div className={Style.v3}>{status.toUpperCase()}</div>
                    <div className={Style.v4}>{shipping.toUpperCase()}</div>
                    <div className={Style.v5}>$ {Number(Math.ceil(total)).toLocaleString()}</div>
                </div>

                
                <div className={Style.footer}>
                    <button onClick={e => detalleOrden()} className= {Style.bo8o}>Ver detalles de la compra</button>
                </div>
            </div>
        </>
    )
}