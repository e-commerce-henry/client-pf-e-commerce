import Style from './ProfileDetails.module.css'
import {useNavigate} from 'react-router-dom'
import Head from '../Head/Head';
import Footer from '../Footer/Footer';

export default function ProfileDetails(){

    const navigate = useNavigate();
    function HandleClick(e){
        navigate(`/${e.target.value}`);
    };

    return(
        <div >
            <Head />
            <div className={Style.container}>
                <button className={Style.btnprofile} type='button' value='inicio-seccion' onClick={(e) =>HandleClick(e)}>Iniciar Sección</button>
                <button className={Style.btnprofileselected} type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Mis datos personales</button>
                <button className={Style.btnprofile} type='button' value='history' onClick={(e) =>HandleClick(e)}>Historial de compras</button>
            </div>
            
            <div className={Style.details}>
                <ul>
                    <li>Nombre: (nombre del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Usuario: (usuario del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Email: (email del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Dirección: (dirección del cliente) <button className={Style.modificar}>Modificar</button></li>
                </ul>
            </div>
            <div className={Style.detailsfooter}><Footer /></div>
        </div>
    )
}
