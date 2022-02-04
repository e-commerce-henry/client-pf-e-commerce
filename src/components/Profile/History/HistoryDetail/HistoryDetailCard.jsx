import React from "react";

export default function HistoryDetailCard({id, quantity, price, idProduct, detail}){
    const {name, img, brand} = detail
    return(
        <>
            <div>
                <div>{name}</div>
                <div><img src={img} alt="" /></div>
                <div>marca {brand}</div>
                <div>cantidad {quantity}</div>
                <div>Precio unitario $ {price}</div>
                <div>Sub total por {quantity} unidades $ {quantity * price}</div>

            </div>
        </>
    )
}