import React from 'react';
import {useNavigate} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import swal from 'sweetalert'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { detalleUsers, addProductShoppingCart, editCart } from '../../../redux/actions';

export default function GoogleAuth(){
    const dispatch = useDispatch()

    
    
    const navigate = useNavigate();
    
    const handleSuccess = async (googleResponse)=>{
        const res = (await axios.post('http://localhost:3001/auth/googleAuth', {token:googleResponse.tokenId})).data;
        await dispatch(detalleUsers(res.id));
        await dispatch({ type: "ADD_INICIO_USER", payload: res.id})
        let carrito = localStorage.getItem('carrito')
        carrito = JSON.parse(carrito)
        let {id} = res
        let userId = id
        if(carrito && carrito.length){
            console.log('aqui1');
            for (let i = 0; i < carrito.length; i++) {
                console.log('aqui2');
                let {img, name, price, productId, quantity} = carrito[i]
                await dispatch(addProductShoppingCart({img, name, price, productId, userId}))
                await dispatch(editCart({productId, userId, quantity}))
            }
            localStorage.removeItem('carrito')
        }


        navigate(`/`);
        swal({
            title: `Hola ${res.name}`,
            text: "Qué gusto verte!" ,
            icon: "success"
        })
    }

    const handleFailure = (response) =>{
        swal({
            title: 'Error al acceder',
            text: `${response}`,
            icon: 'error'
        })
    }
    
    return(
        <>
        <GoogleLogin
            clientId='717748977655-p9dkof4v46h3bragngk2510fjovqbkrd.apps.googleusercontent.com'
            buttonText="Acceder"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            //cookiePolicy={'single_host_origin'}
        />
        </>
    )
}