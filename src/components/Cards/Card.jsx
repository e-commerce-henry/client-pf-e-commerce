import React from 'react';
import Style from './Card.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductShoppingCart, addProductWishlist } from '../../redux/actions';

function Card({ productId, name, price, img, brand}){
    const dispatch = useDispatch()
    const userId = useSelector(state => state.idUser)

    function addShoppingCart(productId){
        console.log(productId)
        dispatch(addProductShoppingCart({productId, price, userId}))
    }
    function addFavs(productId){
        alert(`Se ha agregado a favoritos: "${name}"`)
        dispatch(addProductWishlist(productId))
    }
    return(
        <div key={productId}>
            
                <div className={Style.container} >
                    <div className={Style.productname}>{name}</div> 
                    <div className={Style.boximg}><Link to={`/products/${productId}`} style={{ textDecoration: 'none' }}><img className={Style.productimg} src={img} alt='not found' /></Link></div>

                    <div className={Style.productprice}>$
                    {Number(Math.ceil(price)).toLocaleString()}</div>

                    <div className={Style.producticons}>
                        <button className={Style.productbtns} onClick={() => addFavs(productId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                            </svg>
                        </button>

                        <button className={Style.productbtns} onClick={() => addShoppingCart(productId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                    </div>         
                </div>
            
        </div>
        )
    };
    
    export default Card;