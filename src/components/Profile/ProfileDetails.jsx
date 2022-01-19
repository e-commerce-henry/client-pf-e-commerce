import Style from './ProfileDetails.module.css'
import Profile from './Profile';

export default function ProfileDetails(){

    return(
        <div >
            <Profile />
            <div className={Style.details}>
                <ul>
                    <li>Nombre: (nombre del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Usuario: (usuario del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Email: (email del cliente) <button className={Style.modificar}>Modificar</button></li>
                    <li>Dirección: (dirección del cliente) <button className={Style.modificar}>Modificar</button></li>
                </ul>
            </div>   
        </div>
    )
}
