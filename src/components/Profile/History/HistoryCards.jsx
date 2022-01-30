import React from "react"
import { useDispatch, useSelector } from "react-redux";
import HistoryCard from "./HistoryCard";

export default function HistoryCards(){
    const ordenes = useSelector(state=> state.history)
    const user = useSelector(state=> state.userDetail)

    return(
        <>
        <h1>Historial de compras de {user.name}</h1>
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
            <p>Este lugar se ve muy vacio :C</p>
        }
        </>
    )
}