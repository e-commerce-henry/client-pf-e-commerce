import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../redux/actions"
import Footer from "../Footer/Footer"
import Head from "../Head/Head"
import NavBar from "../Navbar/NavBar"
import HomeOrganization from "../HomeOrganization/HomeOrganization"
import Pagination from "../Pagination/Pagination"




export default function Home(){

    const allProducts = useSelector ((state) => state.allProducts);

    const dispatch = useDispatch();

    const [currentPage,setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(20);
    const indexOfLastProduct = currentPage * productsPerPage 
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage 
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    useEffect (() => {
        dispatch(getProducts());
    }, [dispatch]); 





    return(
        <>
        <Head />
        <NavBar />
        <HomeOrganization />
        <Pagination productsPerPage = {productsPerPage}
                    allProducts = {allProducts.length}
                    pagination = {pagination} />
        {/* <Footer /> */}
        </>
    )
};

