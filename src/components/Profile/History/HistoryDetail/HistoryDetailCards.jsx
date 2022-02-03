import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Head from "../../../Head/Head";
import Footer from "../../../Footer/Footer";
import {useNavigate} from 'react-router-dom'

export default function HistoryDetailCards(){
    const productos = useSelector(state=> state.products)
    const shoppingCart = useSelector((state) => state.history);
    const navigate = useNavigate();
    const { id } = useParams(); 
    function ordenFindAndDetail(){
        for (let i = 0; i < shoppingCart.length; i++) {
            if(shoppingCart[i].id === id){
                return{
                    
                }
            }
            
        }
    }

    function regresar(){
        navigate('/history')
    }

    return(
        <>
            <Head />
                <div>
                    <button onClick={()=> regresar()}>Regresar</button>
                </div>
                <div>

                </div>
                <p>hola</p>
            <Footer />
        </>
    )
}