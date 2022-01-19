import Style from './History.module.css'
import {useNavigate} from 'react-router-dom'
import Head from '../Head/Head';
import Footer from '../Footer/Footer';


export default function History(){

    const navigate = useNavigate();
    function HandleClick(e){
        navigate(`/${e.target.value}`);
    };

    return(
        <div >
            <Head />
            
            <div className={Style.container}>
                <button className={Style.btnprofile} type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Mis datos personales</button>
                <button className={Style.btnprofileselected} type='button' value='history' onClick={(e) =>HandleClick(e)}>Historial de compras</button>
            </div>
            
            <div className={Style.details}>
               <h3>Acá se verá todo el historial de compras</h3>
               <ul>
                <li> <h4>Card - Compras</h4>Como usuario quiero poder ver un record de mis compras en el tiempo para darles seguimiento, comprar de nuevo o solo recordar que compre.</li>
                <li> <h4>Filtro - Search bar/ Fecha</h4>Como usuario quiero poder filtrar mi record de compras de alguna forma para poder encontrar algo en concreto más rápidamente.</li>
                <li> <h4>Filtro - status de la compra</h4>Como usuario quiero poder mostrar el record de mis compras según el estado de envío en el que se encuentren</li>
               </ul>
            </div>
            
            <Footer />  
        </div>
    )
}
