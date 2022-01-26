import React, { useState} from "react";
import { useDispatch } from "react-redux";
import {addInicioUser} from "../../redux/actions";
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import Style from './Profile.module.css';
import {Link} from 'react-router-dom';
import './InicioSeccion.css';
import {useNavigate} from 'react-router-dom';


export function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Username is invalid';
    }
    if (!input.pwd) {
      errors.pwd = 'Password is required';
    } else if (!/(?=.*[0-9])/.test(input.pwd)) {
      errors.pwd = 'Password is invalid';
    }
    return errors;
  };
  


const InicioSeccion = () => {

    const navigate = useNavigate();
    function HandleClick(e){
        navigate(`/${e.target.value}`);
    };


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
        <div>
            <Head />
            <div className={Style.container}>
                <button className={Style.btnprofile} type='button' value='inicio-seccion' onClick={(e) =>HandleClick(e)}>Iniciar Sección</button>
                <button className={Style.btnprofile} type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Mis datos personales</button>
                <button className={Style.btnprofileselected} type='button' value='history' onClick={(e) =>HandleClick(e)}>Historial de compras</button>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input className={errors.email && 'danger'} type="email" name="email" onChange={handleInputChange} value={input.email} />
                    {errors.email && (<p className="danger">{errors.email}</p>)}
                </div>

                <div>
                    <label>Password:</label>
                    <input className={errors.pwd && 'danger'} type="pwd" name="pwd" onChange={handleInputChange} value={input.pwd} />
                    {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
                </div>
                <div>
                    <button className="crear" type="submit">Iniciar Sección</button>
                    <Link to="/addUsers"><button className="crear" type="submit">Registrarse</button></Link>
                </div>
            </form>
      <div className={Style.profilefooter}></div><Footer />
  </div>
  );
};

export default InicioSeccion;
