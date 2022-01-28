import React from 'react';
import Style from './OrderItem.module.css'

export default function OrderItem({id,name, price, img, brand}){
    return(
        <>
            <div className={Style.card}>
                <div className={Style.name}><p className={Style.tit}>{name}</p> <p className={Style.sub}>({brand})</p></div>
                <div className={Style.price}>${Number(Math.ceil(price)).toLocaleString()}</div>
                
            </div>
        </>
    )
}