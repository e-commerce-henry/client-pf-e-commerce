import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';
import Style from'./PersonalInfo.module.css';
import Info from './Info';
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
                <hr/>
                <hr/></div>
                
            

            <Info/>
            < EditUser />
            <div>
                 {
                    userAuth?
                    <button className={Style.crear} type='button' value='history' onClick={(e) =>HandleClick(e)}>Ver tu historial de Compras</button>: null
                }
                 </div>
            
                 <div>
                <Link to ={"/"}>
                    <button className={Style.crear}>Visitar la Tienda</button></Link>
                
                 </div>
            
        </div>
    )
}