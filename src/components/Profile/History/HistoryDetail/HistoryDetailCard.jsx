import React from "react";
import Style from "./HistoryDetailCard.module.css"

export default function HistoryDetailCard({id, quantity, price, idProduct, detail}){
    const {name, img, brand} = detail
    return(
        <>
            <div className={Style.grgr}>
                <div className={Style.dd1}>{name}</div>
                <div className={Style.dd2}><img src={img} alt="not found" /></div>
                <div className={Style.dd3}>{brand}</div>
                <div className={Style.dd4}>{quantity}</div>
                <div className={Style.dd4h}>{quantity} <br /> uds.</div>
                <div className={Style.dd5}>$ {Number(Math.ceil(price)).toLocaleString()}</div>
                <div className={Style.dd5h}>Precio unitario <br /> $ {Number(Math.ceil(price)).toLocaleString()}</div>
                <div className={Style.dd6}>$ {Number(Math.ceil(quantity * price)).toLocaleString()}</div>
                <div className={Style.dd6h}>Subtotal <br />$ {Number(Math.ceil(quantity * price)).toLocaleString()}</div>

            </div>
        </>
    )
}