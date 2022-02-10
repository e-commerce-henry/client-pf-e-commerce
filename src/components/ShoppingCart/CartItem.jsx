import React  from 'react';
import Style from "./CartItems.module.css";
import { editShoppingCart , getShoppingCart, removeCart, getInviteCart } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import swal from 'sweetalert'



export default function CartItem({id, price, quantity, productId, addInfo}){
    const {name, img, brand, stock} = addInfo
    const dispatch = useDispatch()
    const userId = useSelector(state => state.idUser)
    const auth = useSelector(state => state.userAuth )
    let infoCarritoInvitado = useSelector((state) => state.inviteCart);
    
     
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


    async function deleteCart(productId){
        await dispatch(removeCart({productId, userId}))
        swal({
            title: "Se ha eliminado este producto del carrito:",
            text: `${name}`,
            icon: "warning",
            button: "Ok"})
        await dispatch(getShoppingCart(userId))
    }

    function deleteCartInvite(){
        let carrito = localStorage.getItem('carrito')
        carrito = JSON.parse(carrito)
        for (let i = 0; i < carrito.length; i++) {
            if(carrito[i].productId == productId){
                carrito.splice(i, 1)
                if(carrito.length > 0){
                    carrito = JSON.stringify(carrito)
                    localStorage.setItem('carrito', carrito) 
                }else{
                    localStorage.removeItem('carrito')
                }
                dispatch(getInviteCart())
            }
            
        }
    }
    
    function setCarritoInvitado(value){
        switch (value) {
            case 0:
                for (let i = 0; i < infoCarritoInvitado.length; i++) {
                    if(infoCarritoInvitado[i].productId == productId){
                        if(infoCarritoInvitado[i].quantity  >  1){
                            infoCarritoInvitado[i].quantity = infoCarritoInvitado[i].quantity -1
                            infoCarritoInvitado = JSON.stringify(infoCarritoInvitado)
                            localStorage.setItem('carrito', infoCarritoInvitado)
                            dispatch(getInviteCart())
                        }
                    } 
                }
                
                break;
            case  1:
                for (let i = 0; i < infoCarritoInvitado.length; i++) {
                    
                    if(infoCarritoInvitado[i].productId == productId){
                        if(infoCarritoInvitado[i].quantity  <  stock){
                            infoCarritoInvitado[i].quantity = infoCarritoInvitado[i].quantity +1
                            infoCarritoInvitado = JSON.stringify(infoCarritoInvitado)
                            localStorage.setItem('carrito', infoCarritoInvitado)
                            dispatch(getInviteCart())
                        }
                    } 
                }
                break;
        
            default:
                break;
        }
    }
    

   
    return(
        <div key={id}>
        
            <div className= {Style.gridcart}>
                <div className={Style.divh}>
                <div className={Style.div2}>
                    <img className={Style.imgcart} src={img} alt='not found'/>
                </div>
                <div className={Style.div1}>{name}</div>
                </div>
                <div className={Style.div4}>
                    
                    <div className={Style.stock}>
                        Stock: {stock - quantity}
                    </div>
                    {
                        auth?
                        <div className={Style.contador}>
                            <button className={Style.masmenos} onClick={restar}>-</button>
                            
                            {quantity}
                            <button  className={Style.masmenos} onClick={sumar}>+</button> 
                        </div>
                        :
                        <div className={Style.contador}>
                            <button className={Style.masmenos} onClick={() => setCarritoInvitado(0)}>-</button>
                            {quantity}
                            <button  className={Style.masmenos} onClick={() => setCarritoInvitado(1)}>+</button> 
                        </div>
                    }

                    
                    {
                        auth? 
                            <div className={Style.rem}>
                            <button className={Style.rembtn} onClick={() => deleteCart(productId)}>  
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                            </div>
                        :
                        <div className={Style.rem}>
                        <button className={Style.rembtn} onClick={() => deleteCartInvite(productId)}>  
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                        </div>


                    }

                    
                </div>
                <div className={Style.div3}>
                    $ {Number(Math.ceil(price)).toLocaleString()}
                </div>
                <div className={Style.div6}>
                    $ {Number(Math.ceil(price * quantity)).toLocaleString()}
                </div>
               
                 

            </div>
        </div>
    )
}