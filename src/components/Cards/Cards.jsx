
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName, orderByPrice, getProducts, filterProductsByCategory, getCategory, filterProductsByBrand } from "../../redux/actions";
import Card from './Card';
import Style from './Cards.module.css';
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import NotFound from "./NotFound";

function valProduct(e){
    if(e.id){
        return(
            <div className={Style.eachcard}>
            <Card 
            key = {e.id}
            productId = {e.id}
            name = {e.name}
            price= {e.price}
            img ={e.img}
            brand={e.brand}
            />
            </div>
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
    let currentProducts = ''
    if (products.length) {
        currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
    }  

    useEffect(() =>{
        dispatch(getProducts())
        dispatch(getCategory())
    },[])

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    let next = () => {
        setCurrentPage(currentPage + 1)
    }

    let prev = () => {
        setCurrentPage(currentPage - 1)
    }

    let ult = () => {
        setCurrentPage(10)
    }

    let prim = () => {
        setCurrentPage(1)
    }

    let brandsArray; 
    if(products.length){
        brandsArray = products.map(e => e.brand)
    }  
    brandsArray = [...new Set(brandsArray)]
    brandsArray = brandsArray.sort()
    

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
        dispatch(filterProductsByCategory(e.target.value));
    };

    function handleFilterBrand(e){
        dispatch(filterProductsByBrand(e.target.value));
    };

    function restablecer(){
        dispatch(getProducts())
    };

    return(
        <div>
        <div className={Style.allcards}>
            <div className={Style.fadeinbck3}>
                { currentProducts.length?
                    currentProducts.map(e =>
                
                    (
                        
                        valProduct(e)
                    
                    )): <NotFound/>
                }
            </div>
        
        <div className={Style.fadeinbck4}>
            <select className={Style.dropdownmenuf1} onChange={(e) => handleSortP(e)}>
                <option hidden>Precio</option>
                <option value="price_asc">Menor a Mayor</option>
                <option value="price_desc">Mayor a Menor</option>
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
                    brandsArray.map( p =>  <option value={p} >{p}</option>)
                }  
            </select>
            <select className={Style.dropdownmenuf1} onChange={e => handleFilterCategory(e)}>
                <option hidden>Categorías</option>
                <option value='none'>Ver todo</option> 
                {
                    categories.map( cat => <option value={cat.name} key={cat.id}>{`${cat.name}`}</option> )
                }               
            </select>
            <button className={Style.restablecer} onClick={restablecer}>Borrar filtros</button>
        </div>
        </div>
        <div className={Style.fadeinbck5}>
            <div className={Style.uno}>
            {currentPage !== 1 ? <button className={Style.pag} onClick={prim}> ◄◄ </button> : <div></div> }
            {currentPage !== 1 ? <button className={Style.pag} onClick={prev}>◄</button> : <div></div> }  
            </div>
            <div className={Style.dos}>
            <Pagination productsPerPage = {productsPerPage}
                allProducts = {products.length}
                pagination = {pagination} />
            </div>
            <div className={Style.tres}>
            {currentPage !== 10 ? <button className={Style.pag} onClick={next}>►</button> : <div></div>}
            {currentPage !== 10 ? <button className={Style.pag} onClick={ult}> ►► </button> : <div></div>}
            </div>
        </div>
    </div>
    )
};

export default Cards;