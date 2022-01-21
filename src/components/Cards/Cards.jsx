import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from './Card';
import Style from './Cards.module.css';

function valProduct(e){
    if(e.id){
        return(
            <Card 
            key = {e.id}
            id = {e.id}
            name = {e.name}
            price= {e.price}
            img ={e.img}
            brand={e.brand}
            />
        )
    }
}


function Cards(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() =>{
        dispatch(getProducts())
    },[])

    return(
        <>
        {
            products.map(e =>(
                valProduct(e)
            ))
        }
        </>
    )
};

export default Cards;