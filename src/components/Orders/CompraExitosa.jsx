import Style from './CompraExitosa.module.css'
import Head from '../Head/Head.jsx'
import Footer from '../Footer/Footer';

function CompraExitosa(){
    return(
        <>
            <Head />
            <div className={Style.order}>
                <div>Una vez finalizada la compra quiero que el usuario siga viendo los detalles de la misma pero sin posibilidad de modificación (dado que ya fue realizada)</div>
                <div>Quiero que el usuario sea notificado de que ya puede realizar comentario y puntuar el/los producto/s comprado/s.</div>
                
            </div>
            <Footer />
        </>
    )
};

export default CompraExitosa;