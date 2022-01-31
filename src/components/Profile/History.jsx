import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from './History.module.css'
import {useNavigate} from 'react-router-dom'
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import { getOrderHistory } from "../../redux/actions";
import HistoryCards from "./History/HistoryCards";


export default function History(){
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.userAuth)
    const navigate = useNavigate();
    const idUser = useSelector(state => state.idUser)

    useEffect(() =>{
        dispatch(getOrderHistory(idUser))
    },[dispatch])

    function HandleClick(e){
        navigate(`/${e.target.value}`);
    };

    return(
        <div >
            <Head />
            <div className={Style.container}>
                {userAuth?<button className={Style.btnprofile} type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Mis datos personales</button>:null}
                {userAuth?<button className={Style.btnprofile} type='button' value='history' onClick={(e) =>HandleClick(e)}>Historial de compras</button>:<button className={Style.btnprofile} type='button' value='inicio-seccion' onClick={(e) =>HandleClick(e)}>Iniciar Sección</button>}  
            </div>
            <div>
                <HistoryCards/>
            </div>  
            <Footer />
        </div>
    )
}
