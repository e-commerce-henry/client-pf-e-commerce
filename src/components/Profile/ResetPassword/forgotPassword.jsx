import React, { useState} from "react";
import { useDispatch} from "react-redux";
import './forgotPassword.css';
import Head from '../../Head/Head';
import Footer from "../../Footer/Footer";
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
import { resetPwdRequest } from "../../../redux/actions";



function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Campo obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Email inválido';
    }
    return errors;
  };


const ForgotPwd = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [input, setInput] = useState({
      email: '',
    });
  
    const [errors, setErrors] = useState({});
    
    const handleInputChange = function(e) {
      setInput({
        email: e.target.value
      });
      setErrors(validate({
        email: e.target.value
      }));
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(Object.keys(errors).length === 0){
        swal({
            title: `Solicitud enviada`,
            text: "Deberás seguir las instrucciones indicadas en el email que te enviamos!" ,
            icon: "success"
        })
        dispatch(resetPwdRequest(input));
        setInput ({
            email: '',   
        })
        navigate(`/`);
      }
      
    }




    return (
        <div>
        <Head />

        <div className="fadeinbck6">
            <h1 className="tituloo">Recuperar contraseña</h1>
            <form  onSubmit={handleSubmit}>

                <div className="stylo">
                    <label>Correo Electrónico: </label>
                    <br />
                    <input id='mail' className= {errors.email && 'danger'} type="email" name="email"  onChange={handleInputChange} value={input.email} />{errors.email && (<p className="danger">{errors.email}</p>)}
                </div>
                
                <div>
                    <button className="bu" type="submit">Enviar</button>  
                </div>
            </form>
        </div> 
        <Footer/>
        </div>
        
        
    );
}

export default ForgotPwd;