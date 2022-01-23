
import React from "react";
import Faq from "react-faq-component";
import {Link} from 'react-router-dom';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import './FAQ.css';

const data = {
 
  rows: [
    {
      title: "¿Cuál es el métodos de pago?",
      content: "Puedes pagar con la pasarela de pago, Mercado pago."
    },
    {
      title: "¿Cuánto tiempo tarda la entrega de un producto?",
      content: "Si adquiere un producto en la tienda online con envío a domicilio, tendrá la opción de programar la fecha y horario de entrega dentro de los 7 días posteriores al día siguiente de la compra, el producto viene con impuesto incluido."
    },
    {
      title: "¿Puedo hacer compra desde una provincia o desde el extranjero?",
      content: "Sí, puedes hacer tus compras en E-COMMERCE desde cualquier lugar del mundo."
    },
    {
      title: "¿Cómo comprar en E-COMMERCE?",
      content: "Para comprar en E-COMMERCE debes iniciar seción en nuestra tienda online, añadir las ofertas en el carrito de compras, programar la fecha y el modo de entrega de tu producto, seleccionar el método de pago y revisar todos los datos antes de finalizar la compra."
    },
    {
      title: "¿Puedo comprar sin tener una cuenta de usuario?",
      content: "No, para realizar tus compras debes iniciar sesión en la tienda online con un usuario y contraseña. En caso no cuentes con uno, puedes registrarte para crear una cuenta con un usuario y contraseña nueva."
    },
    {
      title: "¿Qué puedo hacer si mi pedido llega con fallas?",
      content: "Recibir un rembolso si el producto llega al almacen de E-COMMERCE. Recuerda que debes presentar el producto en las mismas condiciones que fue entregado (etiquetas, empaques, accesorios, manuales, etc.) y sin señales de uso, además de la boleta o factura del pedido."
    }  
  ]
}

const FAQ = () => {
  return (
    <div>
      <Head />
      <div ><h2 className="title">Preguntas Frecuentes</h2></div>
      <div className="faq">
        <Faq className="styleFAQ" data={data} styles={{
        bgColor: "white", 
        rowTitleColor: "#00ADB5",
        rowTitleTextSize: '15px',
        rowContentColor: "#303841",
        rowContentTextSize: '12px',
        rowContentPaddingTop: '12px',
        rowContentPaddingBottom: '5px',
        rowContentPaddingLeft: '20px',
        rowContentPaddingRight: '150px',
        arrowColor: "black",
        }} />
        </div>
      <br />
      <Link to='/'><button className="volver">Volver</button></Link>
      <div className="faqfooter"><Footer /></div>
</div>
    );
};

export default FAQ;

