import React from "react"
import { useDispatch, useSelector } from "react-redux";
import Style from './HistoryCard.module.css'

export default function HistoryCard({idOrder, status, total, address, shipping, fecha, userId, detail}){
    
    return(
        <>
            <div className={Style.container}>
                <div className={Style.header}>
                    <div>Orden: 00{idOrder}</div>
                    <div>{fecha.slice(0, 10)}</div>
                </div>
                <div className={Style.contenido}>
                    <div>Pago: {status}</div>
                    <div>Estado del envio: {shipping}</div>
                    <div>Total de la compra: $ {total}</div>
                </div>

                
                <div className={Style.footer}>
                    {/* <button>Ver detalles de la compra</button> */} {/* proximamente ver detalles */}
                </div>
            </div>
        </>
    )
}