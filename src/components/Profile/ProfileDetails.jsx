import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Style from './ProfileDetails.module.css'
import Head from '../Head/Head';
import InicioSeccion from "./InicioSeccion";
import { detalleUsers } from "../../redux/actions";
import PersonalInfo from "./PersonalInfo";

export default function ProfileDetails(){
   
    const userAuth = useSelector(state => state.userAuth);
    const navigate = useNavigate();

    function HandleClick(e){
        navigate(`/${e.target.value}`);
    };
    


    return(
        <div >
            <Head />
            <div className={Style.container}>
                {
                    userAuth?
                    <button className={Style.btnprofile} type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Mis datos personales</button>
                    :null
                }
                {
                    userAuth?
                    <button className={Style.btnprofile} type='button' value='history' onClick={(e) =>HandleClick(e)}>Historial de compras</button>: null
                }  
            </div>
            
            <div className={Style.details}>
                {
                    userAuth? <PersonalInfo/>:
                    <InicioSeccion/>
                }
            </div>
        </div>
    )
}
