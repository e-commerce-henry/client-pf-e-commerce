import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { getShoppingCart } from "../../redux/actions";


export default function ShoppingCart(){
    const shoppingCart = useSelector(state => state.cart)
    let userId =  useSelector(state => state.idUser)
    const productos = useSelector( state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShoppingCart(userId));
    }, [dispatch]);

    function searchAndComplementInfo(id){
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].id === id){
                return {
                    name: productos[i].name,
                    img: productos[i].img,
                    brand: productos[i].brand,
                    stock: productos[i].stock
                }
            }
            
        }
    }

    return(
        <>
            <div>
                <h1>{`Este es tu carrito "Nombre del user"`}</h1>
                <div>
                    {
                        shoppingCart[0]?
                        shoppingCart[0].cartItems.map(e => (
                            <CartItem
                                id = {e.id}
                                key = {e.id}
                                price = {e.price}
                                quantity = {e.quantity}
                                productId = {e.productId}
                                addInfo = {searchAndComplementInfo(e.productId)}
                            />
                        )):null
                    }
                </div>
            </div>
        </>
    )
};


