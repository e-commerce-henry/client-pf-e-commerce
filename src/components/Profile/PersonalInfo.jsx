import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';
import './PersonalInfo.css';

export default function PersonalInfo(){
    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.userDetail);
    const idUsers = useSelector(state => state.idUser)
   

   
        useEffect(() => {
            dispatch(detalleUsers(idUsers));
        }, [dispatch, idUsers]);
        console.log(userDetail);

    return(
        <div>
           
            <h1 className="titulo">Bienvenid@</h1>
            <div className="Detalle">
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