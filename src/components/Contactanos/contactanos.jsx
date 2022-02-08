import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import Head from "../Head/Head";

import "./Contacto.module.css";

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
        <div className="contein">
          <div className="title">
            <form onSubmit={(e) => handleSubmit(e)}>
              <h2>Ingrese sus Datos y a la nos contactaremos con ud.</h2>
              <div className="form">
                <label htmlFor="name">Nombre y Apellido: </label>
                <input
                  className="botForm"
                  onChange={(e) => hadleInput(e)}
                  value={user.name}
                  name="name"
                  type="text"
                  placeholder="Agregue el nombre..."
                ></input>
              </div>

              <div>
              <label htmlFor="email">Email: </label>
                <input
                  name="email"
                  type="text"
                  onChange={(e) => hadleInput(e)}
                  value={user.email}
                  placeholder="Agregue un email..."
                ></input>
              
              </div>
              
              <div>
              <label htmlFor="subject">Asunto: </label>
                <input
                  name="subject"
                  type="text"
                  onChange={(e) => hadleInput(e)}
                  value={user.subject}
                  placeholder="Asunto"
                ></input>
              
              </div>

              <div>
              <label htmlFor="content">Déjanos tu msj: </label>
                <input
                  name="content"
                  type="text"
                  onChange={(e) => hadleInput(e)}
                  value={user.content}
                  placeholder="Escriba aqui su msj"
                ></input>
              
              </div>
              <button type="submit" onClick={handleSubmit}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

