import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';
import Style from'./PersonalInfo.module.css';
import EditUser from '../EditUsers/EditUser';
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";


export default function PersonalInfo(){
    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.userDetail);
    const idUsers = useSelector(state => state.idUser)
    const userAuth = useSelector(state => state.userAuth)
    const navigate = useNavigate();
   

   
        useEffect(() => {
            dispatch(detalleUsers(idUsers));
        }, [dispatch, idUsers]);
        
        function HandleClick(e){
            navigate(`/${e.target.value}`);
        };

    return(
        <div className={Style.fadeinbck8}>
                <div className={Style.saludo}>Nos dá gusto verte de nuevo {userDetail.name}
                <h4 className={Style.preg}> Que quieres hacer hoy?</h4>
            </div>
                
                <div className={Style.detalle}>
                
                <div  className={Style.aaa}><div>Nombre: <b>{userDetail.name}</b></div><br />
                <div>Apellido: <b>{userDetail.surname}</b></div><br />
                <div>Correo: <b>{userDetail.email}</b></div>
                    {
                        userDetail.clientAddresses ? userDetail.clientAddresses.map((e) =>(
                            <div key={e.id}>
                                <div>Dirección: <b>{e.address}</b></div><br />
                                <div>Código Postal: <b>{e.postalCode}</b></div><br />
                                <div>Ciudad: <b>{e.city}</b></div><br />
                                <div>Provincia: <b>{e.province}</b></div><br />
                                <div>Piso: <b>{e.floor}</b></div>
                            </div>

                        )): 
                            <div  className={Style.bbb} >
                                <div >Dirección: <b>{userDetail.address}</b></div><br />
                                <div>Código Postal: <b>{userDetail.postalCode}</b></div><br />
                                <div>Ciudad: <b>{userDetail.city}</b></div><br />
                                <div>Provincia: <b>{userDetail.province}</b></div><br />
                                <div>Piso: <b>{userDetail.floor}</b></div>
                            </div>
                    
                    }
                    </div>
                </div>
          <div className={Style.crear}>
          < EditUser />
            <div>
                 {
                    userAuth?
                    <button className={Style.boton} type='button' value='history' onClick={(e) =>HandleClick(e)}>Ver tu historial de Compras</button>: null
                }
                 </div>
              </div>
        
            
        </div>
    )
}