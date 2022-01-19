import Style from './Profile.module.css'
import {useNavigate} from 'react-router-dom'
import Head from '../Head/Head';
import Footer from '../Footer/Footer';

export default function Profile(){
    const navigate = useNavigate();
    function HandleClick(e){
        navigate(`/${e.target.value}`);
    };

    return(
        <div >
            <Head />
            <div className={Style.container}>
                <button className={Style.btnprofile} type='button' value='profile-details' onClick={(e) =>HandleClick(e)}>Mis datos personales</button>
                <button className={Style.btnprofile} type='button' value='history' onClick={(e) =>HandleClick(e)}>Historial de compras</button>
            </div>
            <Footer />
        </div>
    )
}

