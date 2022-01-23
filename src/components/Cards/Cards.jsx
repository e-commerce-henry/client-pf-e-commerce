import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from './Card';
import Style from './Cards.module.css';
import Pagination from "../Pagination/Pagination";

function valProduct(e){
    if(e.id){
        return(
            <div className={Style.eachcard}>
            <Card 
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


function Cards(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const [currentPage,setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(20);
    const indexOfLastProduct = currentPage * productsPerPage 
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage 
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() =>{
        dispatch(getProducts())
    },[])

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <div className={Style.allcards}>
        {
            currentProducts.map(e =>(
                valProduct(e)
            ))
        }
        <Pagination productsPerPage = {productsPerPage}
            allProducts = {products.length}
            pagination = {pagination} />
        </div>
    )
};

export default Cards;