import React from "react"; 
import { useState } from "react";
import  "./Contacto.module.css";


export function validate(user){
    let error = {};
    if(!user.name){
        error.name = 'Su nombre es requerido'; 
    }
    
    if(!user.email){
        error.email = 'El correo es requerido';
      } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        error.email = 'El correo es invalido';
      }
}

export default function Contactanos(){
    const [user , setUser] = useState({
        name: "",
        email: "",
    });
    const [error, setError] = useState({});

    function hadleInput (e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        setError(validate({
            ...user,
            [e.target.value]: e.target.value
        })); 
    }

    function handleSubmit(e){
        e.preventDefault();
        setError(validate(error))
        if(Object.keys(error).length !== 0){

        }
      
    }


    return (
        <div className="fadeinbck8">
        <div className= "box">
         <div className="contein">
            <div className="title">
                <form onSubmit={handleSubmit}>
                    <div>
                    <h>Nombre y Apellido</h>
                    <input
                // className="botForm"
                // onChange={(e) => handleChange(e)}
                name="name"
                type="text"
                placeholder="Agregue el nombre..."
                onChange={hadleInput}
              ></input>
              <hr/>
              </div>
              <div>
              <h>Agregue su email</h>
                    <input
                // className="botForm"
                // onChange={(e) => handleChange(e)}
                name="email"
                type="text"
                placeholder="Agregue un email..."
              ></input>
              <hr/> 
              </div> 
              <div>  
                <h>Asunto</h>
                    <input
                className="botForm"
                // onChange={(e) => handleChange(e)}
                name="email"
                type="text"
                placeholder="Agregue un email..."
                
              ></input>
              <hr/>
              </div>
              <div>
                <h>Escriba su mensaje y nos pondremos en contacto con Ud.</h>
                    <input
                className="botForm"
                // onChange={(e) => handleChange(e)}
                name="email"
                type="text"
                placeholder="Agregue un email..." 
              ></input>
              <hr/></div>
              <button>Enviar</button>
                </form>
                </div>
            
         </div>

            
        </div>
        </div>

    )}
