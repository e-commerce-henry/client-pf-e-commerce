import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';

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
            <div className="">
            <h1>Bienvenid@</h1>
            <p>Nombre: {userDetail.name}</p>
            <p>Apellido: {userDetail.surname}</p>
            <p>Correo: {userDetail.email}</p>
            {
               userDetail.clientAddresses && userDetail.clientAddresses.map((e) =>(
                    <p key={e.id}>
                        <p>Dirección: {e.address}</p>
                        <p>Código Postal: {e.postalCode}</p>
                        <p>Ciudad: {e.city}</p>
                        <p>Provincia: {e.province}</p>
                        <p>Piso: {e.floor}</p>

                    </p>

                ))
            }
            </div>
        </div>
    )
}