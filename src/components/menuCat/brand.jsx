import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './brand.module.css'
import { filterProductsByBrand, getProducts } from '../../redux/actions';


export default function Menu(){
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
                <select className={Style.dropdownmenu} onChange={e => handleFilterBrand(e)}>
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Ver todo</option> 
                    <option value='none'>Ver todo</option> 
       
                </select>
        </div>
    )
}
