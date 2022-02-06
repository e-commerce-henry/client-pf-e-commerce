import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Head from "../Head/Head";
import { useEffect } from "react";

export default function CompraRealizada() {
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
        <h2>FELICITACIONES!</h2>
        <h3>Ya estamos procesando tu pedido</h3>
      </div>
      <div >
        {/* <Link to="/">
          <Button size='large' variant='contained'>
            HOME
          </Button>
        </Link> */}
        Seras redirigido a la tienda en unos instantes...
      </div>
    </>
  );
}