import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Favs.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFavs from './CardFavs';
import { getWishlist } from '../../redux/actions';

function Favs(){
    const dispatch = useDispatch();
    const productsFavs = useSelector(state => state.favs)
    let userId =  useSelector(state => state.idUser)
    const productos = useSelector( state => state.products)
    const auth = useSelector(state => state.userAuth )


    useEffect(() => {
        dispatch(getWishlist(userId));
    }, [dispatch]);

    function searchAndComplementInfo(id){
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].id === id){
                return {
                    name: productos[i].name,
                    img: productos[i].img,
                    brand: productos[i].brand,
                }
            }
            
        }
    }

    return(
        <>
            <Head />
            <div className={Style.container} >
                <div className={Style.titulofav}>MIS FAVORITOS</div>
                <div className={Style.allcards}>
                {
                        auth? productsFavs[0]?
                        productsFavs[0].wishlistItems.length === 0 ? <div>Lista vacía</div> : productsFavs[0].wishlistItems.map(e => (
                            <CardFavs
                                id = {e.id}
                                key = {e.id}
                                price = {e.price}
                                productId = {e.productId}
                                addInfo = {searchAndComplementInfo(e.productId)}
                            />
                        )):<div>Lista vacía</div> :<div>Debes <Link to='/profile-details'> iniciar sesión</Link></div>
                        }
                </div>   
            </div>
            <Footer />
        </>
    )
};

export default Favs;