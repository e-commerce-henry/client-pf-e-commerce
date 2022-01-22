import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './menu.module.css'
import { filterProductsByCategory, getCategory } from '../../redux/actions';


export default function Menu(){
    const dispatch = useDispatch()
    const category = useSelector(state => state.category)

    useEffect(() =>{
        dispatch(getCategory())
    },[])

    function handleFilterCategory(e){
        dispatch(filterProductsByCategory(e.target.value));
    };

    return(
        <div className={Style.fle}>            
                <select className={Style.dropdownmenu} onChange={e => handleFilterCategory(e)}>
                    <option hidden>Categorías</option>
                    <option value='none'>Ver todo</option> 
                    {
                            category.map( cat => {
                                const {name, id} = cat
                                return (
                                <option value={name} key={id}>{`${name}`}</option> 
                                )
                            })
                        })               
                </select>
        </div>
    )
}

