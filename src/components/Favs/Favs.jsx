import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Favs.module.css'

function Favs(){
    return(
        <>
            <Head />
            <div className={Style.container} >
                ACA VAN TODOS LOS FAVS
            </div>
            <Footer />
        </>
    )
};

export default Favs;