import React from 'react';
import Style from './CardFavs.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductShoppingCart, deleteProductWishlist } from '../../redux/actions';

function CardFavs({ id, name, price, img}){
    const dispatch = useDispatch()

    function addShoppingCart(id){
        alert(`Agregado a carrito "${name}"`)
        dispatch(addProductShoppingCart(id))
    }

    function deleteFavs(productId){
        dispatch(deleteProductWishlist(productId))
    }

    return(
        <div>
            
                <div className={Style.container} >
                    <div className={Style.productname}>{name}</div> 
                    <div className={Style.boximg}><Link to={`/products/${id}`} style={{ textDecoration: 'none' }}><img className={Style.productimg} src={img} alt='not found' /></Link></div>

                    <div className={Style.productprice}>$
                    {Number(Math.ceil(price)).toLocaleString()}</div>

                    <div className={Style.producticons}>
                        <button className={Style.productbtns} onClick={() => addShoppingCart(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>

                        <button className={Style.productbtns} onClick={() => deleteFavs(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </div>         
                </div>
            
        </div>
        )
    };
    
    export default CardFavs;