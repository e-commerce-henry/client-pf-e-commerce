import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName, orderByPrice, getProducts } from "../../redux/actions";
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
    const [orden, setOrden] = useState('');
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

    function handleSortN (e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrden(`Order ${e.target.value}`);
    }
    
    function handleSortP (e) {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value));
        setOrden(`Order ${e.target.value}`);
    };

    return(
        <div className={Style.allcards}>
        {
            currentProducts.map(e =>(
                valProduct(e)
            ))
        }
        
        <div className={Style.flef}>
            <select className={Style.dropdownmenuf1} onChange={(e) => handleSortP(e)}>
                <option hidden>Precio</option>
                <option value="price_asc">Precio 🡩</option>
                <option value="price_desc">Precio 🡫</option>
            </select>
            <select className={Style.dropdownmenuf2} onChange={(e) => handleSortN(e)}>
                <option hidden>Nombre</option>
                <option value="name_asc"> A 🡪 Z</option>
                <option value="name_desc">Z 🡪 A</option>
            </select>
        </div>
        
        <Pagination productsPerPage = {productsPerPage}
            allProducts = {products.length}
            pagination = {pagination} />

        

        </div>
    )
};

export default Cards;