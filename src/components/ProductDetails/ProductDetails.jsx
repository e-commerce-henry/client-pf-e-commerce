import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { productDetail, addProductWishlist, addProductShoppingCart,createReview} from '../../redux/actions'; 
import { Link } from "react-router-dom";
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import Style from './ProductDetails.module.css'
import {useNavigate} from 'react-router-dom'

/*************************************** */
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react';
import s from '../Review/Review.module.css'
import ReactStars from "react-rating-stars-component";
import Reviews from '../Review/Reviews';
const useStyles = makeStyles((theme)=>({
    modal:{
        position:'absolute',
        width:500,
        height:600,
        backgroundColor:'white',
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        borderRadius:10
    }
}))

export default function ProductDetail(){
    const styles= useStyles();//style modal
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();  
    const userId = useSelector(state => state.idUser)
    const auth = useSelector(state => state.userAuth )  

    const detailsProduct = useSelector ((state) => state.details)
    const price = detailsProduct.price
    const name = detailsProduct.name

    const [modal, setModal] = useState(false);
    const [values, setValues] = useState({
        title:'',
        content:'',
        rating:'',
        userId:3,
        productId:id

    })
    const abrirCerrarModal = () => {
        setModal(!modal)
    }
    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const ratingChanged = (newRating) => {
        setValues({
            ...values,
            rating:newRating.toString()
        })
    };
    const onSubmit = e =>{
        e.preventDefault();
        console.log('values :>> ', values);
        dispatch(createReview(id, values));
        window.location = `/products/${id}`;
    }

    function addShoppingCart(productId){
        alert(`Se ha agregado a tu carrito: "${name}"`)
        dispatch(addProductShoppingCart({productId, price, userId}))
    }

    useEffect (()=> {
        dispatch(productDetail(id));
    }, [dispatch, id])

    

    function addFavs(productId){
        if(auth){
            alert(`Se ha agregado a favoritos: "${name}"`)
            dispatch(addProductWishlist({productId, price, userId}))
        } else {
            navigate(`/profile-details`);
        }
        
    }

    return(
        <>
        <Head/>        
            <div className= {Style.cont}>

                <div className={Style.grid}>
                    <div className={Style.child2}>
                        <div className={Style.producticons}>
                             <button className={Style.productbtns} onClick={() => addFavs(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                </svg>
                            </button>

                             <button className={Style.productbtns} onClick={() => addShoppingCart(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className={Style.titulo}>{detailsProduct.name}</div> <br />
                        <div className={Style.det}><b>Precio: </b>$ {Number(Math.ceil(detailsProduct.price)).toLocaleString()} </div> <br />
                        <div className={Style.det}><b>Marca: </b>{detailsProduct.brand}</div><br /> 
                        <div className={Style.det}><b>Stock: </b>{detailsProduct.stock} unidades </div><br />
                    </div>
                    <img className={Style.img} src= {detailsProduct.img} alt ="img"/>
                </div>                        
                    <div className={Style.descr}>
                        <b>Descripción: </b>
                        <div className={Style.text}>{detailsProduct.description} </div>
                    </div><br />
                
                <hr/>
                <Link to={`/`}>
                    <button className={Style.butt}>Volver</button>
                </Link>                    

            </div> 
            <br/>
{/*             <div className={Style.container_escribir_comentario}>
                <button
                    className={Style.boton_escribir_comentario}
                    onClick={()=>abrirCerrarModal()}
                >
                    ESCRIBIR COMENTARIO
                </button>
            </div>
            
            <br/>
            <Reviews idproduct={id}/>
            <br/> */}
           <Footer/>


{/* *********Modal calificacion******** */}
    <Modal
        open={modal}
        onClose={abrirCerrarModal}
    >   
        <form className={styles.modal} onSubmit={onSubmit} >
            
            <div >
                <button
                    className={s.boton}
                    onClick={()=>abrirCerrarModal()} 
                >X</button>
            </div>
            <div align='center' >
                <h2 className={Style.title}>Tu opinión nos importa ¡Evalúa tu Producto!</h2>
            </div>
            <br/>
            <div >
                <label className={Style.subtitle}>¿Cuántas estrellas le das a este producto? (Selecciona de 1 a 5 estrellas en tu respuesta, siendo 1 la peor valoración y 5 la mejor).*</label>
                <div className={s.estrellas} >
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={42}
                        activeColor="#ffcc1a"
                    />
                </div>
                
            </div>
            <br/>
            <div>
                <label className={Style.subtitle}>
                    Tu Opinión en un Título
                </label>
                <input
                    title="maximo 40 caracteres"
                    maxLength={40}
                    placeholder='Escribe tu opinión del producto en una frase'
                    className={s.caja}
                    type="text"
                    value={values.title}
                    onChange={handleOnChange}
                    name='title'
                />
            </div>
            <br/>
            <div>
                <label className={Style.subtitle}>Cuéntanos más del Producto</label>
                <textarea
                    className={s.description}
                    title="maximo 200 caracteres"
                    placeholder="Ingrese su Comentario"
                    resize="none"
                    value={values.content}
                    onChange={handleOnChange}
                    name="content"
                    maxLength="200"
                >
                </textarea>
            </div> 
            <br/>
            <div >
                <button
                    type="submit"
                    className={s.boton_comentario}
                >PUBLICAR COMENTARIO</button>
            </div>
        </form>
    </Modal>
    </>
    )
};

