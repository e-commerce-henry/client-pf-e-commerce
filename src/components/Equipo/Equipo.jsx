import React from 'react';
import './Equipo.css';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
// import lidices from './img/5ae5d236-6515-4569-ba17-9961c8cf53f2.jpeg';

const Equipo = () => {
  return ( 
    <div>
      <Head />
      {/* <div>
        <h2 className="titleE">EQUIPO MARCA DEL E-COMMERCE</h2>
        <div className="containerL">
          <div className="cardL">
            <img className="imgL" src={lidices} alt={lidices} />
            <h4 className="titleL"><b>Lidices Reyes</b></h4>
            <p>Architect Engineer</p>
          </div>
        </div>
      </div> */}
      <div className='nosfooter'><Footer /></div>
    </div>
  )
}

export default Equipo;
