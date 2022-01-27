import React, { useState} from "react";
import { useDispatch } from "react-redux";
import {addUsers } from "../../redux/actions";
import "./AddUsers.css";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";
import {useNavigate} from 'react-router-dom';
import '../Profile/Profile.module.css';


export function validate(users) {
    let errors = {};
    if (!users.name) {
      errors.name = 'Username is required';
    }
    //  else if (!/\S+/.test(users.name)) {//
    //   errors.name = 'Name is invalid';
    // }

    if(!users.surname){
      errors.surname = 'Surname is required';
    } else if (!/\S+/.test(users.surname)) {//
      errors.surname = 'Surname is invalid';
    }

    if(!users.email){
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(users.email)) {
      errors.email = 'Email is invalid';
    }

    if (!users.pwd) {
      errors.pwd = 'Password is required';
    } else if (!/(?=.*[0-9])/.test(users.pwd)) {
      errors.pwd = 'Password is invalid';
    }

    if(!users.address){
      errors.address = 'Address is required';
    } 
    // else if (!/\S+@\S+\.\S+/.test(users.address)) {//
    //   errors.address = 'Address is invalid';
    // }

    if(!users.cp){
      errors.cp = 'Postal Code is required';
    } else if (!/^\d{5}$/.test(users.cp)) {
      errors.address = 'Address is invalid';
    }

    if(!users.city){
      errors.city = 'City is required';
    }
    //  else if (!/\S+@\S+\.\S+/.test(users.city)) {//
    //   errors.city = 'City is invalid';
    // }

    if(!users.province){
      errors.province = 'Province is required';
    } 
    // else if (!/\S+@\S+\.\S+/.test(users.province)) {//
    //   errors.province = 'Province is invalid';
    // }
    return errors;
  };

const AddUsers = () => {

  const navigate = useNavigate();
    function HandleClick(e){
        navigate(`/${e.target.value}`);
    };


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
        floor: ""
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

      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate({...users, [e.target.name]: e.target.value}))
        alert("Usuario Creado");
        dispatch(addUsers(users));
        setUsers ({
          name: "",
          surname: "",
          email: "",
          pwd: "",
          address: "",
          cp: 0,
          city: "",
          province: "",
          floor: ""
    
        })
    }





  return (
  <div className='formulario'>
    <Head />
    <div className="botonesP">
                <button className="b1" type='button' value='inicio-seccion' onClick={(e) =>HandleClick(e)}>Iniciar Sección</button>
                <button  className="b1" type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Mis datos personales</button>
                <button  className="b1" type='button' value='history' onClick={(e) =>HandleClick(e)}>Historial de compras</button>
            </div>
    
      <form className="form" onSubmit={handleSubmit}>
    <div>
      <h1>Regístrese</h1>
    </div>
    <div className="secc">
      <label>Nombre:</label>
      <input className={errors.name && 'danger'} type="text" name="name" onChange={handleInputChange} value={users.name} />
      {errors.name && (<p className="danger">{errors.name}</p>)}
    </div>

    <div className="secc">
      <label>Apellido:</label>
      <input className={errors.surname && 'danger'} type="text" name="surname" onChange={handleInputChange} value={users.surname} />
      {errors.surname && (<p className="danger">{errors.surname}</p>)}
    </div>

        <div className="secc">
          <label>Correo:</label>
          <input className={errors.email && 'danger'} type="email" name="email" onChange={handleInputChange} value={users.email} />
          {errors.email && (<p className="danger">{errors.email}</p>)}
        </div>

        <div className="secc">
          <label>Contraseña:</label>
          <input className={errors.pwd && 'danger'} type="password" name="pwd" onChange={handleInputChange} value={users.pwd} />
          {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
        </div>

        <div className="secc">
          <label>Dirección:</label>
          <input className={errors.address && 'danger'} type="text" name="address" onChange={handleInputChange} value={users.address} />
          {errors.address && (<p className="danger">{errors.address}</p>)}
        </div>

        <div className="secc">
          <label>Código Postal:</label>
          <input className={errors.cp && 'danger'} type="Number" name="cp" onChange={handleInputChange} value={users.cp} />
          {errors.cp && (<p className="danger">{errors.cp}</p>)}
        </div>

        <div className="secc">
          <label>Ciudad:</label>
          <input className={errors.city && 'danger'} type="text" name="city" onChange={handleInputChange} value={users.city}/>
          {errors.city && (<p className="danger">{errors.city}</p>)}
        </div>

        <div className="secc">
          <label>Provincia:</label>
          <input className={errors.province && 'danger'} type="text" name="province" onChange={handleInputChange} value={users.province}/>
          {errors.province && (<p className="danger">{errors.province}</p>)}
        </div>

        <div className="secc">
          <label>Piso:</label>
          <input className={errors.floor && 'danger'} type="Number" name="floor" onChange={handleInputChange} value={users.floor} />
          {errors.floor && (<p className="danger">{errors.floor}</p>)}
        </div>
        
        <div>
          <button className="crear" type="submit">Aceptar</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddUsers;
