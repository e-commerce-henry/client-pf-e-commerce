import React from 'react';
import {useNavigate} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import swal from 'sweetalert'

export default function GoogleAuth(){
    const navigate = useNavigate();
    const respuestaCorrectaGoogle=(respuesta)=>{
        console.log(respuesta.profileObj)
        navigate(`/`);
        swal({
            title: "Todo ok",
            text: `Bienvenido ${respuesta.profileObj.givenName}, este componente aun no te registra/loguea en realidad`,
            icon: "success"
        })
    }
    return(
        <>
        <GoogleLogin
            clientId="717748977655-p9dkof4v46h3bragngk2510fjovqbkrd.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={respuestaCorrectaGoogle}
/*             onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'} */
        />
        </>
    )
}