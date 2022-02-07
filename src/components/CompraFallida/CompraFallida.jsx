import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Head from "../Head/Head";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import '../CompraRealizada/CompraRealizada.css'


export default function CompraFallida() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/');
    }, 5000);
  },[])
  
  return (
    <div className="fadeinbck31">
      <Head/>
      <div className="todoesto">
        <h2 className="sorry">Lo sentimos mucho!</h2>
        <div className="fail">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </div>
        <h3 className="procesando">Algo ha salido mal con tu compra - Intentalo nuevamente</h3>
      </div>
      <div className="redirigido">
        Serás redirigido a la tienda en unos instantes...
      </div>
    </div>
  );
}