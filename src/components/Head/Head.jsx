import React from 'react';
import Style from './Head.module.css'
import { Link } from 'react-router-dom';
import CerrarSeccion from '../Profile/CerrarSeccion/CerrarSeccion';


function Head(){



    return(
        <>
            <div className={Style.container} >
                <div className={Style.marca}>MARCA DEL E-COMMERCE</div>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <button className={Style.btnhead}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                    </button>
                </Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <button className={Style.btnhead}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg> 
                    </button>
                </Link>
                <Link to='/favs' style={{ textDecoration: 'none' }}>
                    <button className={Style.btnhead}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                    </button>
                </Link>
                <Link to='/profile-details' style={{ textDecoration: 'none' }}>
                <button className={Style.btnhead}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg> 
                    </button>                  
                </Link>
                <CerrarSeccion />
               
            </div>
        </>
    )
};

export default Head;