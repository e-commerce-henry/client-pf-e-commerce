import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import {createReview, productDetail} from '../../redux/actions'; 
import { Link } from "react-router-dom";
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import Style from './ProductDetails.module.css'
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
    const { id } = useParams();    

    const detailsProduct = useSelector ((state) => state.details)

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

    useEffect (()=> {
        dispatch(productDetail(id));
    }, [dispatch, id])

    return(
        <>
        <Head/>        
            <div className= {Style.cont}>
            <h3>{detailsProduct.name}</h3>
            <img src= {detailsProduct.img} alt ="img" width= "200px" />
            <h4><b>Marca: </b>{detailsProduct.brand} </h4>
            <h4 ><b>Descripción: </b>
            <div className={Style.text}>{detailsProduct.description} </div></h4>
            <h4><b>Stock: </b>{detailsProduct.stock} </h4>
            <h4><b>Precio: </b>{detailsProduct.price} </h4>
            <hr/>
            <Link to={`/`}>
                <button className={Style.butt}>Volver</button> </Link>
                
            </div> 
            <br/>
            <div className={Style.container_escribir_comentario}>
                <button
                    className={Style.boton_escribir_comentario}
                    onClick={()=>abrirCerrarModal()}
                >
                    ESCRIBIR COMENTARIO
                </button>
            </div>
            
            <br/>
            <Reviews idproduct={id}/>
            <br/>
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
                <h2>Tu opinión nos importa ¡Evalúa tu Producto!</h2>
            </div>
            <br/>
            <div >
                <label>¿Cuántas estrellas le das a este producto? (Selecciona de 1 a 5 estrellas en tu respuesta, siendo 1 la peor valoración y 5 la mejor).*</label>
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
                <label>
                    Tu Opinión en un Título
                </label>
                <input
                    title="maximo 40 caracteres"
                    maxLength={40}
                    placeholder='Escribe tu opinión del Producto en una frase*'
                    className={s.caja}
                    type="text"
                    value={values.title}
                    onChange={handleOnChange}
                    name='title'
                />
            </div>
            <br/>
            <div>
                <label>Cuéntanos más del Producto</label>
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

