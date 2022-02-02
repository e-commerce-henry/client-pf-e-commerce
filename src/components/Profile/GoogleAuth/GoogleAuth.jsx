import React from 'react';
import GoogleLogin from 'react-google-login';


export default function GoogleAuth(){
    const respuestaCorrectaGoogle=(respuesta)=>{
        console.log(respuesta.profileObj)
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