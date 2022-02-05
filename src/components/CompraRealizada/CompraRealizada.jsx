import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function CompraRealizada() {
  return (
    <>
      <div className="realizado">
        <h1>COMPRA REALIZADA</h1>
      </div>
      <div className="btn7">
        <Link to="/">
          <Button size='large' variant='contained'>
            HOME
          </Button>
        </Link>
      </div>
    </>
  );
}