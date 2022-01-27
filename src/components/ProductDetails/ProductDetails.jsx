import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import {productDetail} from '../../redux/actions'; 
import { Link } from "react-router-dom";
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import {addProductShoppingCart} from "../../redux/actions";
import Style from './ProductDetails.module.css'

export default function ProductDetail(){
    const dispatch = useDispatch()
    const { id } = useParams()
    function addShoppingCart(id){
        dispatch(addProductShoppingCart(id))
    }

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
                  <button className={Style.productbtns} onClick={() => addShoppingCart(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                  
            </div> 
            <Footer/>
        </>

    )
};

