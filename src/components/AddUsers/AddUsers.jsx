import React, { useState} from "react";
import { useDispatch} from "react-redux";
import {addUsers } from "../../redux/actions";
import "./AddUsers.css";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";
import '../Profile/Profile.module.css';
import { Link, useNavigate} from "react-router-dom";



import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";



export function validate(users) {

    let errors = {};
    if (!users.name) {
      errors.name = 'El nombre requerido';
    }
    //  else if (/^[A-Z]+$/i.test(users.name)) {//
    //   errors.name = 'El nombre es invalido';
    // }

    if(!users.surname){
      errors.surname = 'El apellido es requerido';
    }
    // else if (/^[A-Z]+$/i.test(users.surname)) {//
    //   errors.surname = 'El apellido es invalido';
    // }

    if(!users.email){
      errors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(users.email)) {
      errors.email = 'El correo es invalido';
    }

    if (!users.pwd) {
      errors.pwd = 'La contraseña es requerida';
    } 

    if(!users.address){
      errors.address = 'La dirección es requerida';
    } 
    // else if (!/\S+@\S+\.\S+/.test(users.address)) {//
    //   errors.address = 'Address is invalid';
    // }

    if(!users.cp){
      errors.cp = 'El código postal es requerido';
    // } else if (!/^\d{5}$/.test(users.cp)) {
      // errors.cp = 'El código postal es invalido';
    }

    if(!users.city){
      errors.city = 'La ciudad es requerida';
    }
    //  else if (/^[A-Z]+$/i.test(users.city)) {//
    //   errors.city = 'La ciudad es requerida';
    // }

    if(!users.province){
      errors.province = 'La provincia es requerida';
    } 
    // else if (/^[A-Z]+$/i.test(users.province)) {//
    //   errors.province = 'La provincia es invalida';
    // }
    return errors;
  };

const AddUsers = () => {
  
  const navigate = useNavigate();
  

   const dispatch = useDispatch();

    const [users, setUsers] = useState({
        name: "",
        surname: "",
        email: "",
        pwd: "",
        address: "",
        cp: "",
        city: "",
        province: "",
        floor: "",
        showPassword: false,
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = function(e) {
        setUsers({
          ...users,
          [e.target.name]: e.target.value
        });
        setErrors(validate({
          ...users,
          [e.target.name]: e.target.value
        }));
      }

   
    const handleClickShowPassword = () => {
      setUsers({ ...users, showPassword: !users.showPassword });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(errors))
        if(Object.keys(errors).length !== 0){
        }else {
          dispatch(addUsers(users));
          setUsers ({
            name: "",
            surname: "",
            email: "",
            pwd: "",
            address: "",
            cp: "",
            city: "",
            province: "",
            floor: ""
          })
          setErrors(validate({...users, [e.target.name]: e.target.value}))
        } 
        navigate("/profile-details");
    }
  return (
  <div className='formulario'>
    <Head />  
      <form className="fadeinbck7" onSubmit={handleSubmit}>
    <div className="titulo">
      <h1>Regístrese</h1>
    </div>
    <div className="secc">
      <div className="label"><label>Nombre:</label> </div>
      <input className={errors.name && 'danger'} type="text" name="name" onChange={handleInputChange} value={users.name} />
      {errors.name && (<p className="danger">{errors.name}</p>)}
    </div>

    <div className="secc">
      <div className="label"><label>Apellido:</label> </div>
      <input className={errors.surname && 'danger'} type="text" name="surname" onChange={handleInputChange} value={users.surname} />
      {errors.surname && (<p className="danger">{errors.surname}</p>)}
    </div>

        <div className="secc">
          <div className="label"><label>Correo Electrónico: </label> </div>
          <input className={errors.email && 'danger'} type="email" name="email" onChange={handleInputChange} value={users.email} />
          {errors.email && (<p className="danger">{errors.email}</p>)}
        </div>

        <div className="secc">
          <div className="label"><label>Contraseña:</label> </div>
          <Input className={errors.pwd && 'danger'} type={users.showPassword ? "text" : "password"} name="pwd" onChange={handleInputChange} value={users.pwd} 
          endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
              {users.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton></InputAdornment>
        }/>
          {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
        </div>

        <div className="secc">
          <div className="label"><label>Provincia:</label> </div>
          <input className={errors.province && 'danger'} type="text" name="province" onChange={handleInputChange} value={users.province}/>
          {errors.province && (<p className="danger">{errors.province}</p>)}
        </div>

        <div className="secc">
          <div className="label"><label>Ciudad:</label></div>
          <input className={errors.city && 'danger'} type="text" name="city" onChange={handleInputChange} value={users.city}/>
          {errors.city && (<p className="danger">{errors.city}</p>)}
        </div>

        <div className="secc">
          <div className="label"><label>Código Postal:</label> </div>
          <input className={errors.cp && 'danger'} type="number" name="cp" onChange={handleInputChange} value={users.cp} />
          {errors.cp && (<p className="danger">{errors.cp}</p>)}
        </div>

        <div className="secc">
          <div className="label"><label>Dirección:</label></div>
          <input className={errors.address && 'danger'} type="text" name="address" onChange={handleInputChange} value={users.address} />
          {errors.address && (<p className="danger">{errors.address}</p>)}
        </div>

        <div className="secc">
          <div className="label"><label>Piso:</label> </div>
          <input className={errors.floor && 'danger'} type="Number" name="floor" onChange={handleInputChange} value={users.floor} />
          {errors.floor && (<p className="danger">{errors.floor}</p>)}
        </div>
        
        <div className="btns">
          <button className="butt" type="submit">Registrarse</button> 
          <Link to="/profile-details"><button className="butt" type="submit">Iniciar sesión</button></Link>
          
          
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddUsers;
