import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function valCart(e){
    if(e.id){
        return(
            <CartItem
            id = {e.id}
            name = {e.name}
            price= {e.price}
            img ={e.img}
            brand={e.brand}
            />
        )
    }
}

export default function ShoppingCart(){
    const shoppingCart = useSelector(state => state.cart)

    return(
        <>
            <div>
                <Link to='/probando'> <h1>{`Este es tu carrito "Nombre del user"`}</h1></Link>
                <div>
                    {
                        
                        shoppingCart.map(e => (
                            valCart(e)
                        ))
                    }
                </div>
            </div>
        </>
    )
};