import React  from 'react';
import "./CartItems.css";
import { Link } from "react-router-dom";
/* import  removeCart  from '../../redux/actions'; */
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';



export default function CartItem({id, price, quantity, productId, addInfo}){
    const {name, img, brand} = addInfo
    const dispatch = useDispatch()

    function removeCart(productId){
    dispatch(removeCart(productId))
    }


  
    return(
        <div key={id}>
            <div className='div1' viewBox="0 0 16 16">
                <div className='name'>Name{name}
                
                </div>
                <div className='div2'><Link to={`/products/${id}`}><img src={img} alt='not found' width="260px" height="200px"/></Link>
                
                <div>
                <p className='text'>{brand}
                <br/>
                Price: $ {price}
                <br/>
                <button className='boo' onClick={() => removeCart(id)}>  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                </button></p></div>
                </div>
                {/* <div className='text'><Link to={`/products/${id}`}><img src={img} alt='not found' width="130px" height="100px"/></Link></div> */}
            </div>
        </div>
    )
}