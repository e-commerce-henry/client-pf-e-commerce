import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './brand.module.css'
import { filterProductsByBrand, getProducts } from '../../redux/actions';


export default function Brand(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)

    useEffect(() =>{
        dispatch(getProducts())
    },[])

    function handleFilterBrand(e){
        dispatch(filterProductsByBrand(e.target.value));
    };

    return(
        <div className={Style.brandcontainer}>           
                <select className={Style.dropdownbrand} onChange={e => handleFilterBrand(e)}>
                    <option hidden>Marcas</option>
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Acer</option> 
                    <option value='none'>Amazon</option> 
                    <option value='none'>Apple</option> 
                    <option value='none'>Asus</option>
                </select>
        </div>
    )
}
