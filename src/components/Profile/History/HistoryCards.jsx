import React from "react"
import { useDispatch, useSelector } from "react-redux";
import HistoryCard from "./HistoryCard";
import Vacío2 from '../../Vacío/Vacío2'
import Style from './HistoryCards.module.css'

export default function HistoryCards(){
    const ordenes = useSelector(state=> state.history)
    const user = useSelector(state=> state.userDetail)

    return(
        <div className={Style.fadeinbck10}>
        <div className={Style.hist}>Historial de compras de {user.name}</div>
        {
            ordenes.length? 
            ordenes.map(e => {
                return(
                    <HistoryCard
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