import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import Head from "../Head/Head";

import Style from "./Contacto.module.css";

export function validate(user) {
  let error = {};
  // if(!user.name){
  //     error.name = 'Su nombre es requerido';
  // }

  if (!user.email) {
    error.email = "El correo es requerido";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    error.email = "El correo es invalido";
  }
  return error;
}

 export default function Contactanos(){
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

//--------------
  function hadleInput(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validate(error));
    if (Object.keys(error).length !== 0) {
      alert("Debe llenar todos los campos");
    } else {
      dispatch(addContact(user));
      setUser({
        name: "",
        email: "",
        subject: "",
        content: "",
      });
      alert("Su Mensaje se envio correctamente");
      setError(
        validate({
          ...user,
          [e.target.name]: e.target.value,
        })
      );
    }
  }

  return (
    <div className="fadeinbck8">
      <Head />
      <div className="box">
        <div className={Style.titulocontacto}>Ingrese sus datos y nos contactaremos con usted</div>
        <form  onSubmit={(e) => handleSubmit(e)}>
        <div className={Style.formcontacto}>
          <div className={Style.cadadiv1}>
            <label className={Style.labell} htmlFor="name">Nombre y Apellido: </label>
            <input
              className={Style.inputt}
              onChange={(e) => hadleInput(e)}
              value={user.name}
              name="name"
              type="text"
              placeholder="Agregue su nombre"
            ></input>
          </div>

          <div className={Style.cadadiv2}>
            <label className={Style.labell} htmlFor="email">Email: </label>
            <input
              className={Style.inputt}
              name="email"
              type="text"
              onChange={(e) => hadleInput(e)}
              value={user.email}
              placeholder="Agregue un email"
            ></input>
          </div>
          
          <div className={Style.cadadiv3}>
            <label className={Style.labell} htmlFor="subject">Asunto: </label>
            <input
              className={Style.inputt}
              name="subject"
              type="text"
              onChange={(e) => hadleInput(e)}
              value={user.subject}
              placeholder="Asunto"
            ></input>
          </div>

          <div className={Style.cadadiv4}>
            <label className={Style.labell} htmlFor="content">Déjanos tu mensaje: </label>
            <textarea
              className={Style.mensaje}
              name="content"
              type="text"
              onChange={(e) => hadleInput(e)}
              value={user.content}
              placeholder="Escriba aquí su mensaje"
            ></textarea>
          </div>
            <button className={Style.cadadiv5} type="submit" onClick={handleSubmit}>
              Enviar
            </button>
            </div>
          </form>
        
      </div>
    </div>
  );
};

