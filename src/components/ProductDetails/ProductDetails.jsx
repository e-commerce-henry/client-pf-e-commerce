import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import {productDetail} from '../../redux/actions'; 
import { Link } from "react-router-dom";
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import Style from './ProductDetails.module.css'

export default function ProductDetail(){
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect (()=> {
        dispatch(productDetail(id));
    }, [dispatch, id])

    const detailsProduct = useSelector ((state) => state.details)

    return(
        
        <><Head/>
        
            <div className= {Style.cont}>
            <h3>{detailsProduct.name}</h3>
            <img src= {detailsProduct.img} alt ="img" width= "200px" />
            <h4><b>Marca: </b>{detailsProduct.brand} </h4>
            <h4 ><b>Descripción: </b>
            <div className={Style.text}>{detailsProduct.description} </div></h4>
            <h4><b>Stock: </b>{detailsProduct.stock} </h4>
            <h4><b>Precio: </b>{detailsProduct.price} </h4>
            <hr/>
            <Link to={`/`}>
                  <button className={Style.butt}>Volver</button> </Link>
                  
            </div> 
            <Footer/>
        </>

    )
};

