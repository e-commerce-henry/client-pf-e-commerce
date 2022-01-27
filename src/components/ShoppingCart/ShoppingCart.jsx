import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { getShoppingCart } from "../../redux/actions";

/*             {
                "id": 1,
                "quantity": 1,
                "price": 500,
                "cartId": 2,
                "productId": 50
            } */

function ShoppingCart(){
    const shoppingCart = useSelector(state => state.cart)
    const userId =  useSelector(state => DataTransferItem.idUser)
    const productos = useSelector( state => state.products)
    const dispatch = useDispatch();

/*     products.map(e => {
        if(e.id = id){
            name = e.name
        }
    }) */

    useEffect(() => {
        dispatch(getShoppingCart(userId));
    }, [dispatch]);

    return(
        <>
            <div>
                <h1>{`Este es tu carrito "Nombre del user"`}</h1>
                <div>
                    {
                        shoppingCart?
                        shoppingCart.cartItems.map(e => (
                            <CartItem
                                price= "500"
                            />
                        )):null
                    }
                </div>
            </div>
        </>
    )
};

export default {ShoppingCart}
