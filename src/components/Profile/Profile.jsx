import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Profile.module.css'

function Profile(){
    return(
        <>
            <Head />
            <div className={Style.container} >
                ACA VAN TODOS LOS DETALLES DEL PERFIL
            </div>
            <Footer />
        </>
    )
};

export default Profile;