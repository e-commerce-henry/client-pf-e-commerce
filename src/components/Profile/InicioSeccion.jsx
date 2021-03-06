import React, { useState} from "react";
import {addInicioUser, addProductShoppingCart, editCart} from "../../redux/actions";
import { useDispatch} from "react-redux";
import './Profile.module.css';
import {Link} from 'react-router-dom';
import './InicioSeccion.css';
import GoogleAuth from './GoogleAuth/GoogleAuth';

import Head from '../Head/Head';
import Footer from "../Footer/Footer";

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';





export function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Campo obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Email inválido';
    }
    if (!input.pwd) {
      errors.pwd = 'Campo obligatorio';
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
      <div>
        <Head />

        <div className="fadeinbck6">
          <h1 className="tituloo">Iniciar sesión</h1>
            <form  onSubmit={handleSubmit}>

                <div className="stylo">
                    <label>Correo Electrónico: </label>
                    <br />
                    <input id='mail' className= {errors.email && 'danger'} type="email" name="email"  onChange={handleInputChange} value={input.email} />{errors.email && (<p className="danger">{errors.email}</p>)}
                </div>

                <div className="stylo">
                    <label>Password: </label>
                    <br />
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
            <p className="o"><Link to="/forgot-pwd" type="submit">Olvide mi contraseña</Link></p>
            <hr/>
            <div>
              <GoogleAuth/>
            </div>
            <p className="o">o también puedes <Link to="/addUsers" type="submit">registrarte aquí</Link></p>
            <br />
        </div> 
        <Footer/>
        </div>
       
      
  );
};

export default InicioSeccion;
