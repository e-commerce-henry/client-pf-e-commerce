import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {editUser} from "../../redux/actions";
import {Link} from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import './EditUser.css'




export function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = 'El nombre requerido';
    }
    //  else if (/^[A-Z]+$/i.test(users.name)) {//
    //   errors.name = 'El nombre es invalido';
    // }

    if(!values.surname){
      errors.surname = 'El apellido es requerido';
    }
    // else if (/^[A-Z]+$/i.test(users.surname)) {//
    //   errors.surname = 'El apellido es invalido';
    // }

    if(!values.email){
      errors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'El correo es invalido';
    }

    if (!values.pwd) {
      errors.pwd = 'La contraseña es requerida';
    } 

    if(!values.address){
      errors.address = 'La dirección es requerida';
    } 
    // else if (!/\S+@\S+\.\S+/.test(users.address)) {//
    //   errors.address = 'Address is invalid';
    // }

    if(!values.postalCode){
      errors.postalCode = 'El código postal es requerido';
    } else if (!/^\d{5}$/.test(values.postalCode)) {
      errors.postalCode = 'El código postal es invalido';
    }

    if(!values.city){
      errors.city = 'La ciudad es requerida';
    }
    //  else if (/^[A-Z]+$/i.test(users.city)) {//
    //   errors.city = 'La ciudad es requerida';
    // }

    if(!values.province){
      errors.province = 'La provincia es requerida';
    } 
    // else if (/^[A-Z]+$/i.test(users.province)) {//
    //   errors.province = 'La provincia es invalida';
    // }
    return errors;
  };


const EditUser = ({name, surname, email, pwd, address, postalCode, city, province, addressId, floor}) => {
     
    const dispatch = useDispatch();
    const idUsers = useSelector(state => state.idUser);
   
    const [values, setValues] = useState({
        name: name,
		surname: surname,
		email: email,
		pwd: pwd,
		address: address,
		postalCode: postalCode,
		city: city,
		province: province,
		addressId: idUsers,
		floor: floor,
        showPassword: false

    })
    const [errors, setErrors] = useState({});
    
    
   

    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...values,
            [e.target.name]: e.target.value
          }));
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('idUsers', idUsers);
        console.log('values', values);
        dispatch(editUser(idUsers, values));
        setValues ({
            name: "",
            surname: "",
            email: "",
            pwd: "",
            address: "",
            postalCode: "",
            city: "",
            province: "",
            floor: ""
          })
          setErrors(validate({...values, [e.target.name]: e.target.value}))
    }


  return (
        <div>
          <Head />
            <form className="form" onSubmit={handleSubmit}>
                <div className="tituloedit">
                    <h2>Editar usuario</h2>
                </div>
                <div className="secc">
                    <div className="label"><label>Nombre: </label> </div>
                    <input className={errors.name && 'danger'} type="text" name="name" onChange={handleInputChange} value={values.name} />
                    {errors.name && (<p className="danger">{errors.name}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Apellido: </label> </div>
                    <input className={errors.surname && 'danger'} type="text" name="surname" onChange={handleInputChange} value={values.surname} />
                    {errors.surname && (<p className="danger">{errors.surname}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Correo Electrónico: </label> </div>
                    <input className={errors.email && 'danger'} type="email" name="email" onChange={handleInputChange} value={values.email} />
                    {errors.email && (<p className="danger">{errors.email}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Contraseña: </label> </div>
                    <Input className={errors.pwd && 'danger'} type={values.showPassword ? "text" : "password"} name="pwd" onChange={handleInputChange} value={values.pwd}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton></InputAdornment>
                        } />
                    {errors.pwd && (<p className="danger">{errors.pwd}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Dirección: </label></div>
                    <input className={errors.address && 'danger'} type="text" name="address" onChange={handleInputChange} value={values.address} />
                    {errors.address && (<p className="danger">{errors.address}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Código Postal: </label> </div>
                    <input className={errors.cp && 'danger'} type="number" name="postalCode" onChange={handleInputChange} value={values.postalCode} />
                    {errors.cp && (<p className="danger">{errors.cp}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Ciudad: </label></div>
                    <input className={errors.city && 'danger'} type="text" name="city" onChange={handleInputChange} value={values.city} />
                    {errors.city && (<p className="danger">{errors.city}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Provincia: </label> </div>
                    <input className={errors.province && 'danger'} type="text" name="province" onChange={handleInputChange} value={values.province} />
                    {errors.province && (<p className="danger">{errors.province}</p>)}
                </div>

                <div className="secc">
                    <div className="label"><label>Piso: </label> </div>
                    <input className={errors.floor && 'danger'} type="Number" name="floor" onChange={handleInputChange} value={values.floor} />
                    {errors.floor && (<p className="danger">{errors.floor}</p>)}
                </div>
               

                <div className="btns">
                    <Link to="/profile-details"><button className="butt" type="submit">Cancelar</button></Link>
                    <button className="butt" type="submit">Actualizar</button>
                    {/* <Link to="/profile-details"><button className="butt" type="submit">Iniciar Sesión</button></Link> */}


                </div>
            </form>
            <Footer />
        </div>
    );
};

export default EditUser;

