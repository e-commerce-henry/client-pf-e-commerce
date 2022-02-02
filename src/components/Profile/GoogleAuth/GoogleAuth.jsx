import React from 'react';
import {useNavigate} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import swal from 'sweetalert'
import axios from 'axios';

export default function GoogleAuth(){

    
    const navigate = useNavigate();
    
    const handleSuccess = async (googleResponse)=>{
        
        const res = (await axios.post('http://localhost:3001/auth/googleAuth', {token:googleResponse.tokenId})).data;
        
        console.log(res);

        // navigate(`/`);
        // swal({
        //     title: "Todo ok",
        //     text: `Bienvenido ${respuesta.profileObj.givenName}, este componente aun no te registra/loguea en realidad`,
        //     icon: "success"
        // })
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
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            // cookiePolicy={'single_host_origin'}
        />
        </>
    )
}