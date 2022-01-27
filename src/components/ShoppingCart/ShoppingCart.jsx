import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

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
                <h1>{`Este es tu carrito "Nombre del user"`}</h1>
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
