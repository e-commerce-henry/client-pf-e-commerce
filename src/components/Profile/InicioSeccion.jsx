import React, { useState} from "react";
import {addInicioUser} from "../../redux/actions";
import { useDispatch} from "react-redux";
import './Profile.module.css';
import {Link} from 'react-router-dom';
import './InicioSeccion.css';
import GoogleAuth from './GoogleAuth/GoogleAuth'

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'





export function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Error, campo obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Email inválido';
    }
    if (!input.pwd) {
      errors.pwd = 'Error, campo obligatorio';
    } 
    return errors;
  };
  


const InicioSeccion = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    pwd: '',
    showPassword: false,
  });

  const [errors, setErrors] = useState({});

  const handleClickShowPassword = () => {
    setInput({ ...input, showPassword: !input.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate({...input, [e.target.name]: e.target.value}))
    navigate(`/`);
    swal({
        title: `Hola de nuevo`,
        text: "Qué gusto verte!" ,
        icon: "success"
    })
    dispatch(addInicioUser(input));
    setInput ({
        email: '',
        pwd: ''
     
    })
    
}

    return (

        <div className="fadeinbck6">
          <h1 className="tituloo">Iniciar sesión</h1>
            <form  onSubmit={handleSubmit}>
                <div className="stylo">
                

                   

                   <label>Correo Electrónico: </label>
                    <input id='mail' className= {errors.email && 'danger'} type="email" name="email"  onChange={handleInputChange} value={input.email} />{errors.email && (<p className="danger">{errors.email}</p>)}

               
                </div>

                <div className="stylo">
                    <label>Password: </label>
                    
                    <Input className = {errors.pwd && 'danger'} 
                    type={input.showPassword ? "text" : "password"} 
                    name="pwd" 
                    onChange={handleInputChange} 
                    value={input.pwd}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {input.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton> 
                      </InputAdornment>
                    } />
                    {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
                </div>
                
                <div>
                    <button className="bu" type="submit">Iniciar sesión</button>  
                </div>
            </form>
            <hr/>
                    <div>
                    <GoogleAuth/>
                    </div>
                    <p className="o">o también puedes <Link to="/addUsers" type="submit">registrarse aquí</Link></p>
            
        </div> 
       
      
  );
};

export default InicioSeccion;
