import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Head from "../Head/Head";
import { useEffect } from "react";

export default function CompraFallida() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/');
    }, 5000);
  },[])
  
  return (
    <>
      <Head/>
      <div >
        <h2>Lo sentimos mucho!</h2>
        <h3>Algo ha salido mal con tu compra - Intentalo nuevamente</h3>
      </div>
      <div >
        
        Seras redirigido a la tienda en unos instantes...
      </div>
    </>
  );
}