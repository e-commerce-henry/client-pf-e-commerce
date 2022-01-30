import React  from 'react';
import Style from "./CartItems.module.css";
import { Link } from "react-router-dom";
import { editShoppingCart , getShoppingCart} from '../../redux/actions';
/* import  removeCart  from '../../redux/actions'; */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useState } from 'react';



export default function CartItem({id, price, quantity, productId, addInfo}){
    const {name, img, brand, stock} = addInfo
    const dispatch = useDispatch()
    const userId = useSelector(state => state.idUser)
    useEffect(() => {
        dispatch(getShoppingCart(userId));
    }, [dispatch]);
    

    async function sumar(){
        if(quantity < stock){
            quantity = quantity + 1
            await dispatch(editShoppingCart({productId, userId, quantity}))
            await dispatch(getShoppingCart(userId))
        }
        
    }

    async function restar(){
        if(quantity > 1){
            quantity = quantity -1
            await dispatch(editShoppingCart({productId, userId, quantity}))
            await dispatch(getShoppingCart(userId))
       }
       
   }


    function removeCart(productId){
    dispatch(removeCart(productId))
    }

   
    return(
        <div key={id}>
        
    <div className= {Style.div1} viewBox="0 0 16 16">
                <div className={Style.img}><img src={img} alt='not found'  width="160px" height="100px"/>
                </div>
                <div className={Style.name}>Name{name}</div>
                
                <div className={Style.stock}>
                <th> Stock: {stock - quantity}</th>
                </div> 
                <div className={Style.contador}>
                    <th> Agregar cantidad: <br/>
                    <div className={Style.masmenos}>
                 
                        <button className={Style.masmenos} onClick={restar}>-</button>
                            <th>{quantity}</th>
                        <button  className={Style.masmenos} onClick={sumar}>+</button>
                      </div>
                    </th>
                </div>
                <div className={Style.precio}>
                <br/>
                Precio por Unidad:<b> $ {price}</b> <br/>
                SubTotal por {quantity} Unidad(es): $ {price * quantity}
                <br/></div>
                 <button className={Style.boo} onClick={() => removeCart(productId)}>  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                </button> 
              
                
                {/* <div className='text'><Link to={`/products/${id}`}><img src={img} alt='not found' width="130px" height="100px"/></Link></div> */}
            </div>
        </div>
    )
}