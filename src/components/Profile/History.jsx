import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from './History.module.css'
import {useNavigate} from 'react-router-dom'
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import { getOrderHistory } from "../../redux/actions";
import HistoryCards from "./History/HistoryCards";
import { Link } from "react-router-dom";


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
  
            <div>
                <HistoryCards/>
              <br />
            <Link to = {"/profile-details"}>
            <button className={Style.bo7o}> Volver a mi perfil </button>
            </Link>
            </div>
            <Footer />
        </div>
    )
}
