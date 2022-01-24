
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName, orderByPrice, getProducts, filterProductsByCategory, getCategory, filterProductsByBrand } from "../../redux/actions";
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
    const categories = useSelector(state => state.categories)
    const [orden, setOrden] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(20);
    const indexOfLastProduct = currentPage * productsPerPage 
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage 
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() =>{
        dispatch(getProducts())
        dispatch(getCategory())
    },[])

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    let brandsArray = products.map(e => e.brand)
    brandsArray = [...new Set(brandsArray)]
    

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

    function handleFilterCategory(e){
    console.log(e.target.value)
        dispatch(filterProductsByCategory(e.target.value));
    };

    function handleFilterBrand(e){
        dispatch(filterProductsByBrand(e.target.value));
    };

    return(
        <div>
        <div className={Style.allcards}>
        {
            currentProducts.map(e =>
           
            (
                valProduct(e)
               
            ))
        }
        
        <div className={Style.flef}>
            <select className={Style.dropdownmenuf1} onChange={(e) => handleSortP(e)}>
                <option hidden>Precio</option>
                <option value="price_asc">Precio 🡩</option>
                <option value="price_desc">Precio 🡫</option>
            </select>
            <select className={Style.dropdownmenuf1} onChange={(e) => handleSortN(e)}>
                <option hidden>Nombre</option>
                <option value="name_asc"> A 🡪 Z</option>
                <option value="name_desc">Z 🡪 A</option>
            </select>
            <select className={Style.dropdownmenuf1} onChange={e => handleFilterBrand(e)}>
                <option hidden>Marcas</option>
                <option value='seeall'>Ver todo</option> 
                {
                    brandsArray.map( p =>  <option value={p}>{p}</option>)
                }  
            </select>
            <select className={Style.dropdownmenuf1} onChange={e => handleFilterCategory(e)}>
                <option hidden>Categorías</option>
                <option value='none'>Ver todo</option> 
                {
                    categories.map( cat => <option value={cat.name} key={cat.id}>{`${cat.name}`}</option> )
                }               
            </select>
        </div>
        </div>
        <div className={Style.paginationn}>
        <Pagination productsPerPage = {productsPerPage}
            allProducts = {products.length}
            pagination = {pagination} /></div>

        </div>
    )
};

export default Cards;