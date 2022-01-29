import React  from 'react';
import "./CartItems.css";
import { Link } from "react-router-dom";
import { editShoppingCart , getShoppingCart} from '../../redux/actions';
/* import  removeCart  from '../../redux/actions'; */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useState } from 'react';



export default function CartItem({id, price, quantity, productId, addInfo}){
    const {name, img, brand, stock} = addInfo
    const dispatch = useDispatch()
    const userId = useSelector(state => state.idUser)

    // const sumar = () => setquantity (quantity + 1);

     function sumar(){
        if(quantity < stock){
            quantity = quantity + 1        
             console.log(quantity)
             dispatch(editShoppingCart({productId, userId, quantity}))
        }
        dispatch(getShoppingCart(userId))
    }
    function restar(){
        if(quantity > 1){
            quantity = quantity -1        
            console.log(quantity)
            dispatch(editShoppingCart({productId, userId, quantity}))
       }
       dispatch(getShoppingCart(userId))
   }


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
                Precio: $ {price} xUn
                Precio: $ {price * quantity} x {quantity} Un
                <br/>
                <button className='boo' onClick={() => removeCart(productId)}>  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                </button></p>
                <div className='contador'>
                    <h4> Cantidad de Stock: {stock}</h4>
                    <h4> Agregar cantidad: 
                        <button onClick={sumar}>+</button>
                            <h4>{quantity}</h4>
                        <button onClick={restar}>-</button>
                      
                    </h4>
                </div>
 
                </div>
                </div>
                {/* <div className='text'><Link to={`/products/${id}`}><img src={img} alt='not found' width="130px" height="100px"/></Link></div> */}
            </div>
        </div>
    )
}