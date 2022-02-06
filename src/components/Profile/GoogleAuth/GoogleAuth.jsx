import React from 'react';
import {useNavigate} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import swal from 'sweetalert'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { detalleUsers } from '../../../redux/actions';

export default function GoogleAuth(){
    const dispatch = useDispatch()
    
    
    const navigate = useNavigate();
    
    const handleSuccess = async (googleResponse)=>{
        
        const res = (await axios.post('http://localhost:3001/auth/googleAuth', {token:googleResponse.tokenId})).data;
        await dispatch(detalleUsers(res.id));
        await dispatch({ type: "ADD_INICIO_USER", payload: res.id})


        navigate(`/`);
        swal({
            title: `Hola ${res.name}`,
            text: "Qué gusto verte!" ,
            icon: "success"
        })
    }

    const handleFailure = (response) =>{
        swal({
            title: 'Login Error',
            text: `${response}`,
            icon: 'error'
        })
    }
    
    return(
        <>
        <GoogleLogin
            clientId='717748977655-p9dkof4v46h3bragngk2510fjovqbkrd.apps.googleusercontent.com'
            buttonText="Login"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            //cookiePolicy={'single_host_origin'}
        />
        </>
    )
}