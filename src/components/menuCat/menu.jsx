import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownItem , Dropdown , DropdownMenu, DropdownToggle} from "reactstrap";
import { filterProductsByCategory, getCategory } from '../../redux/actions';


export default function Menu(){
    const [dropdown , setDropdown] = useState(false); 
    const openCloseMenu = ()=>{
        setDropdown(!dropdown)
    }

    const dispatch = useDispatch()
    const category = useSelector(state => state.category)

    useEffect(() =>{
        dispatch(getCategory())
    },[])

    function handleFilterCategory(e){
        dispatch(filterProductsByCategory(e.target.value));
    };

    return(
        <div className={Style.main}>            
                <select className={Style.dropdownmenu} onChange={e => handleFilterCategory(e)}>
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

