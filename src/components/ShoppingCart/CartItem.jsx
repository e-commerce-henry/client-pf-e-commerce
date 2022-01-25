import React from 'react';
import { Link } from "react-router-dom";

export default function CartItem({id,name, price, img, brand}){
    return(
        <>
            <div>
                <div>Name{name}</div>
                <div>Price{price}</div>
                <div><Link to={`/products/${id}`}><img src={img} alt='not found' /></Link></div>
                <div>{brand}</div>
            </div>
        </>
    )
}