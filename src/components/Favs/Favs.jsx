import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Favs.module.css';
import {Link} from 'react-router-dom';

function Favs(){
    return(
        <>
            <Head />
            <div className={Style.container} >
               <h3>ACA VAN TODOS LOS FAVS</h3>
               <ul>
                <li> <h4>Card</h4>Como usuario quiero ver cada card de cada producto que agregue a la lista de favoritos. En el mismo me interesa ver su foto, nombre de producto, precio unitario actual y un botón para eliminarlo de la lista así como también un botón para agregar el producto al carro.</li>
                <li> <h4>Botón de seguir comprando</h4>Como usuario necesito un botón que me permita ir hacia atrás para seguir comprando y poder agregar más productos a la wishlist.</li>
               </ul>    
               <Link to='/'><button type="button" class="btn btn-info">Volver</button></Link>      
            </div>
            <Footer />
        </>
    )
};

export default Favs;