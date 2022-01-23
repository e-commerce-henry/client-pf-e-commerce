import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getProductName} from "../../redux/actions";
import Style from './NavBar.module.css';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name , setName] = useState("")

function handleInputChange(e){
    setName(e.target.value)
    console.log(name)
}
function handleOnClick(e){
    dispatch(getProductName(name))
}
    return(
        <>
            <div className={Style.containernav} >
            <div>
                <input type='text' placeholder='Search...' onChange={(e) => handleInputChange(e) }/>
                <button onClick ={(e) => handleOnClick(e)} className={Style.butt}>Buscar</button>

            </div>
            </div>
        </>
    )
};

