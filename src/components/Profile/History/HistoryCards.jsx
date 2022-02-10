import React from "react"
import { useSelector } from "react-redux";
import HistoryCard from "./HistoryCard";
import Vacío2 from '../../Vacío/Vacío2'
import Style from './HistoryCards.module.css'

export default function HistoryCards(){
    const ordenes = useSelector(state=> state.history)
    const user = useSelector(state=> state.userDetail)

    return(
        <div className={Style.fadeinbck10}>
        <div className={Style.hist}>Historial de compras de {user.name}</div>
        <div className={Style.headhist}>
            <div className={Style.d1}> Orden </div>
            <div className={Style.d2}> Fecha </div>
            <div className={Style.d3}> Pago </div>
            <div className={Style.d4}> Estado del envío </div>
            <div className={Style.d5}> Total de la compra </div>
        </div>
        {
            ordenes.length? 
            ordenes.map(e => {
                return(
                    <HistoryCard
                    key={e.id}
                        idOrder = {e.id}
                        status = {e.status}
                        total = {e.total}
                        detail = {e.orderDetail}
                        address = {e.shippingAddress}
                        userId = {e.userId}
                        fecha = {e.createdAt}
                        shipping = {e.shippingStatus}
                    />
                )
            })
            :
            <Vacío2 />
        }
        </div>
    )
}