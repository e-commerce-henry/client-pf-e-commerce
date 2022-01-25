import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Favs.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/actions';
import CardFavs from './CardFavs';

function valProduct(e){
    if(e.id){
        return(
            <div className={Style.eachcard}>
            <CardFavs 
            key = {e.id}
            id = {e.id}
            name = {e.name}
            price= {e.price}
            img ={e.img}
            brand={e.brand}
            /></div>
        )
    }
}

function Favs(){
    const productsFavs = useSelector(state => state.favs)

    return(
        <>
            <Head />
            <div className={Style.container} >
                <div className={Style.titulo}>MIS FAVORITOS</div>
                <div className={Style.allcards}>
                    {
                        productsFavs.map(e =>
                    
                        (
                            valProduct(e)
                        
                        ))
                    }
                </div>   
            </div>
            <div className={Style.favfooter}><Footer /></div>
        </>
    )
};

export default Favs;