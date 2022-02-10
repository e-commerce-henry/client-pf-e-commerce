import React, { useState} from "react";
import { useDispatch} from "react-redux";
import './resetPassword.css';

import Head from '../../Head/Head';
import Footer from "../../Footer/Footer";
import swal from 'sweetalert'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import {useNavigate, useParams} from 'react-router-dom'
import { resetPwdForm } from "../../../redux/actions";





export function validate(input) {
    let errors = {};
    if (!input.pwd) {
      errors.pwd = 'Campo obligatorio';
    }
    if (!input.pwd2) {
      errors.pwd2 = 'Campo obligatorio';
    }
    if(input.pwd !== input.pwd2){
        errors.pwd = 'Ambos campos deben coincidir'
        errors.pwd2 = 'Ambos campos deben coincidir'
    } 
    return errors;
};
  


const ResetPassword = () => {
    const {id, token} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    pwd: '',
    pwd2: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false)


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.keys(errors).length === 0){
        const response = await dispatch(resetPwdForm(input, id, token));
        setInput ({
            pwd: '',
            pwd2: ''
        })
        response.status === 200 
            ? swal({
                title: `Todo Listo!`,
                text: "Tu Password ha sido reseteada con éxito!" ,
                icon: "success"
                })
            : swal({
                title: `Oh No!`,
                text: "Algo ha salido mal. Intentalo nuevamente!" ,
                icon: "error"
                })
        navigate(`/`);
    }
    }

    return (
      <div>
        <Head />

        <div className="fadeinbck6">
          <h1 className="tituloo">Resetear Contraseña</h1>
            <form  onSubmit={handleSubmit}>

                <div className="stylo">
                    <label>Nueva Password: </label>
                    <br />
                    <Input className = {errors.pwd && 'danger'} 
                    type={showPassword ? "text" : "password"} 
                    name="pwd" 
                    onChange={handleInputChange} 
                    value={input.pwd}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton> 
                      </InputAdornment>
                    } />
                    {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
                </div>

                <div className="stylo">
                    <label>Confirme Password: </label>
                    <br />
                    <Input className = {errors.pwd2 && 'danger'} 
                    type={showPassword ? "text" : "password"} 
                    name="pwd2" 
                    onChange={handleInputChange} 
                    value={input.pwd2}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton> 
                      </InputAdornment>
                    } />
                    {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
                </div>
                
                <div>
                    <button className="bu" type="submit">Enviar</button>  
                </div>
            </form>
        </div> 
        <Footer/>
        </div>
       
      
  );
};

export default ResetPassword;
