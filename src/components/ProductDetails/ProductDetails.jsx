import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { productDetail, addProductWishlist, addProductShoppingCart} from '../../redux/actions'; 
import { Link } from "react-router-dom";
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
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

    function addShoppingCart(id){
        alert(`Agregado a carrito "${detailsProduct.name}"`)
        dispatch(addProductShoppingCart(id))
    }

    function addFavs(id){
        alert(`Se ha agregado a favoritos: "${detailsProduct.name}"`)
        dispatch(addProductWishlist(id))
    }

    return(
        
        <><Head/>
        
            <div className= {Style.cont}>

                <div className={Style.grid}>
                    <div className={Style.child2}>
                        <div className={Style.producticons}>
                            <button className={Style.productbtns} onClick={() => addFavs(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                </svg>
                            </button>

                            <button className={Style.productbtns} onClick={() => addShoppingCart(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className={Style.titulo}>{detailsProduct.name}</div> <br />
                        <div className={Style.det}><b>Precio: </b>${Number(Math.ceil(detailsProduct.price)).toLocaleString()} </div> <br />
                        <div className={Style.det}><b>Marca: </b>{detailsProduct.brand}</div><br /> 
                        <div className={Style.det}><b>Stock: </b>{detailsProduct.stock} unidades </div><br />
                    </div>
                    <img className={Style.img} src= {detailsProduct.img} alt ="img"/>
                </div>                        
                    <div className={Style.descr}>
                        <b>Descripción: </b>
                        <div className={Style.text}>{detailsProduct.description} </div>
                    </div><br />
                
                <hr/>
                <Link to={`/`}>
                    <button className={Style.butt}>Volver</button>
                </Link>                    

            </div> 
            <div className={Style.footer}><Footer/></div>
        </>

    )
};

