import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';
import Style from'./PersonalInfo.module.css';
import {Link} from "react-router-dom";

export default function PersonalInfo(){
    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.userDetail);
    const idUsers = useSelector(state => state.idUser)
   

   
        useEffect(() => {
            dispatch(detalleUsers(idUsers));
        }, [dispatch, idUsers]);
        

    return(
        <div className={Style.cont}>
                <div className={Style.saludo}>Nos dá gusto verte de nuevo {userDetail.name}</div>
            
            <div className={Style.detalle}>
                
                <div className={Style.aaa}><div>Nombre: <b>{userDetail.name}</b></div><br />
                <div>Apellido: <b>{userDetail.surname}</b></div><br />
                <div>Correo: <b>{userDetail.email}</b></div></div>
                    {
                        userDetail.clientAddresses && userDetail.clientAddresses.map((e) =>(
                            <div className={Style.bbb} key={e.id}>
                                <div>Dirección: <b>{e.address}</b></div><br />
                                <div>Código Postal: <b>{e.postalCode}</b></div><br />
                                <div>Ciudad: <b>{e.city}</b></div><br />
                                <div>Provincia: <b>{e.province}</b></div><br />
                                <div>Piso: <b>{e.floor}</b></div>
                            </div>

                        ))
                    }
            </div>



            
            <Link to="/editUser"><button className={Style.crear}>Editar Usuario</button></Link>
        </div>
    )
}