import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Head from "../../../Head/Head";
import Footer from "../../../Footer/Footer";
import {useNavigate} from 'react-router-dom'
import HistoryDetailCard from "./HistoryDetailCard";

export default function HistoryDetailCards(){
    const productos = useSelector(state=> state.products)
    const detalle = useSelector((state) => state.historyDetail);
    const navigate = useNavigate();

    function completeDetails(id){
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].id === id){
                return{
                    name: productos[i].name,
                    img: productos[i].img,
                    brand: productos[i].brand
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

                    <div>
                        {
                            detalle.map(e => {
                                return(
                                    <HistoryDetailCard
                                        id = {e.orderId}
                                        quantity = {e.quantity}
                                        price = {e.price}
                                        idProduct = {e.productId}
                                        detail = {completeDetails(e.productId)}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
            <Footer />
        </>
    )
}