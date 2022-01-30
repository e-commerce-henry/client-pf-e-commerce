import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';
import Style from'./PersonalInfo.module.css';

export default function PersonalInfo(){
    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.userDetail);
    const idUsers = useSelector(state => state.idUser)
   

   
        useEffect(() => {
            dispatch(detalleUsers(idUsers));
        }, [dispatch, idUsers]);
        console.log(userDetail);

    return(
        <div className={Style.cont}>
           
            <h1 className={Style.saludo}>Bienvenid@ {userDetail.name}, nos dá gusto que nos visites!</h1>
             <hr/>Que quieres hacer hoy?
            <div className={Style.detalle}>
            <h4>Nombre: {userDetail.name}</h4>
            <h4>Apellido: {userDetail.surname}</h4>
            <h4>Correo: {userDetail.email}</h4> 
             {
               userDetail.clientAddresses && userDetail.clientAddresses.map((e) =>(
                    <h4 key={e.id}>
                        <h4>Dirección: {e.address}</h4>
                        <h4>Código Postal: {e.postalCode}</h4>
                        <h4>Ciudad: {e.city}</h4>
                        <h4>Provincia: {e.province}</h4>
                        <h4>Piso: {e.floor}</h4>

                    </h4>

                ))
            }
            </div>
        </div>
    )
}