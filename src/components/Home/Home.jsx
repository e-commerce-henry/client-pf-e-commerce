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
    return(
        <>
        <Head />
        <NavBar />
        <HomeOrganization />
        </>
    )
};

