import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Style from './ProfileDetails.module.css'
import Head from '../Head/Head';
import InicioSeccion from "./InicioSeccion";
import Footer from "../Footer/Footer";

import PersonalInfo from "./PersonalInfo";

export default function ProfileDetails(){
   
    const userAuth = useSelector(state => state.userAuth);
    // const navigate = useNavigate();

    // function HandleClick(e){
    //     navigate(`/${e.target.value}`);
    // };
    


    return(
        <div >
            <Head />
            {/* <div className={Style.headprofile}> */}
                {/* {
                    userAuth?
                    <button className={Style.btnprofile} type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Ver tus datos personales</button>
                    :null
                } */}
                {/* {
                    userAuth?
                    <button className={Style.button} type='button' value='history' onClick={(e) =>HandleClick(e)}>Ver tu historial de Compras</button>: null
                }  */}

            {/* </div>   */}
            <div className={Style.details}>
                {
                    userAuth? <PersonalInfo/>:
                    <InicioSeccion/>
                }
            </div>
            <Footer/>
        </div>
    )
}
