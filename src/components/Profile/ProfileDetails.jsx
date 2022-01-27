import { useDispatch, useSelector } from "react-redux";
import Style from './ProfileDetails.module.css'
import {useNavigate} from 'react-router-dom'
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import InicioSeccion from "./InicioSeccion";

export default function ProfileDetails(){
    const userAuth = useSelector(state => state.userAuth)
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
                    userAuth? <p>Estos son tus datos personales</p>:
                    <InicioSeccion/>
                }
                
{/*                 <ul>
                    <li>Nombre: (nombre del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Usuario: (usuario del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Email: (email del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Dirección: (dirección del cliente) <button className={Style.modificar}>Modificar</button></li>
                </ul> */}
            </div>
            <div className={Style.detailsfooter}><Footer /></div>
        </div>
    )
}
