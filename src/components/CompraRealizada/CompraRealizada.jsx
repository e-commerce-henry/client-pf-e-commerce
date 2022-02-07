import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Head from "../Head/Head";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import './CompraRealizada.css'

export default function CompraRealizada() {
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
        <h2 className="felicitaciones">FELICITACIONES!</h2>
        <div className="check">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
        </div>
          <h3 className="procesando">Ya estamos procesando tu pedido</h3>
      </div>
      <div className="redirigido">
        Serás redirigido a la tienda en unos instantes...
      </div>
    </div>
  );
}