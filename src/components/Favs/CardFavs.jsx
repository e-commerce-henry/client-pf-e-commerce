import React from 'react';
import Style from './CardFavs.module.css';
import { Link } from "react-router-dom";

function CardFavs({ id, name, price, img}){
    return(
        <div>
            
                <div className={Style.container} >
                    <div className={Style.productname}>{name}</div> 
                    <div className={Style.boximg}><Link to={`/products/${id}`} style={{ textDecoration: 'none' }}><img className={Style.productimg} src={img} alt='not found' /></Link></div>

                    <div className={Style.productprice}>$
                    {Number(Math.ceil(price)).toLocaleString()}</div>

                    <div className={Style.producticons}>
                        <button className={Style.productbtns}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>

                        <button className={Style.productbtns}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                        </button>
                    </div>         
                </div>
            
        </div>
        )
    };
    
    export default CardFavs;