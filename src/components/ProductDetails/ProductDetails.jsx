import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import {productDetail} from '../../redux/actions'; 
import Style from './ProductDetails.module.css'

export default function ProductDetail(){
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect (()=> {
        dispatch(productDetail(id));
    }, [dispatch, id])

    const detailsProduct = useSelector ((state) => state.details)

    return(
        <>
            <div className={Style.container}>
            <h3>{detailsProduct.name}</h3>
            <img src= {detailsProduct.img} alt ="img"/>
            <h4><b>Marca: </b>{detailsProduct.brand} </h4>
            <h4><b>Descripción: </b>{detailsProduct.description} </h4>
            <h4><b>Stock: </b>{detailsProduct.stock} </h4>
            <h4><b>Precio: </b>{detailsProduct.price} </h4>
            </div>
        </>
    )
};

