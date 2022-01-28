import React, { useState} from "react";
import {addInicioUser} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import Style from './Profile.module.css';
import './Profile.module.css';
import {Link} from 'react-router-dom';
import './InicioSeccion.css';



export function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Username is invalid';
    }
    if (!input.pwd) {
      errors.pwd = 'Password is required';
    } 
    return errors;
  };
  


const InicioSeccion = () => {



  const dispatch = useDispatch();

  
  const [input, setInput] = useState({
    email: '',
    pwd: '',
  });
  const [errors, setErrors] = useState({});

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
    alert("Usuario Creado");
    dispatch(addInicioUser(input));
    setInput ({
        email: '',
        pwd: ''
     
    })
}

    return (

        
      
        <div className="boxIs">
          <h1>Iniciar sesion</h1>
            <form  onSubmit={handleSubmit}>
                <div className="stylo">
                    <label>Username:</label>
                    <input className= {errors.email && 'danger'} type="email" name="email" onChange={handleInputChange} value={input.email} />
                    {errors.email && (<p className="danger">{errors.email}</p>)}
                </div>

                <div className="stylo">
                    <label>Password:</label>
                    
                    <input className = {errors.pwd && 'danger'} type="pwd" name="pwd" onChange={handleInputChange} value={input.pwd} />
                    {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
                </div>
                <div>
                    <button className="crear" type="submit">Iniciar Sección</button>
                    <p>O tambien puedes </p>
                    <button className="crear"> <Link to="/addUsers" type="submit">registrate aqui</Link>
                    </button>
                    
                </div>
            </form>
            <hr/>
            
        </div> 
       
      
  );
};

export default InicioSeccion;
