import React from 'react';
import './SobreNosotros.css';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';

const SobreNosotros = () => {
  return (
  <div>
    <Head />
    <div><h3 className="title1">SOMOS E-COMMERCE</h3></div>
    <div className="styleDiv"><p className="styleP">Somos una empresa de comercio electrónico online. 
    Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo. 
    Nos enfocábamos principalmente en la venta de equipos de computo. Hemos ido incorporando distintos productos para su comercialización lo que nos llevó ampliar nuestra red online de ventas. 
    Apoyados en alianzas estratégicas con las principales marcas tecnológicas nos fuimos volviendo referentes del mercado, ampliando nuestra oferta a mas de 100 productos de última generación, los cuales mantenemos y renovamos día a día con el objetivo de trasladar a nuestros clientes la excelencia, calidad,innovación y vanguardia que nos exigimos en cada paso que damos.
    Somos lo que querés, cuando querés, donde querés. Somos <b>E-COMMERCE.</b></p></div>
    <h3 className="title2">Nuestra Visión</h3>
    <div className="styleDiv"><p className="styleP1">Ser la empresa líder y de referencia, a nivel nacional, en la comercialización y distribución de equipos tecnológicos.</p></div>
    <h3 className="title3">Nuestra Misión</h3>
    <div className="styleDiv"><p className="styleP2">Ofrecer productos tecnológicos que acompañen y satisfagan las necesidades de nuestros clientes, acompañando los mismos con la mejor atención, asesoramiento y servicio post venta. Brindando además, la posibilidad de que cualquier persona en todo el mundo pueda adquirir nuestros productos desde la comodidad de su hogar.</p></div>
    <Footer />
  </div>
  )
};

export default SobreNosotros;
