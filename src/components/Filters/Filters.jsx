import React,  { useState } from 'react';
import Style from './Filters.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownItem , Dropdown , DropdownMenu, DropdownToggle} from "reactstrap";

function Filters(){
    const [dropdown , setDropdown] = useState(false); 
    const openCloseMenu = ()=>{
        setDropdown(!dropdown)
    }
    return(
        <div className={Style.main}>
            <Dropdown isOpen = {dropdown} toggle={openCloseMenu}> 
            {/* direction='right' */}
                <DropdownToggle caret className={Style.fle}>
                    Filtrar por
                </DropdownToggle>
                <DropdownMenu className={Style.dropdownmenu}>
                    <DropdownItem header> Filtros</DropdownItem>
                    <DropdownItem>Precio</DropdownItem>
                    <DropdownItem>Marca</DropdownItem>
                    <DropdownItem>Filtro 3</DropdownItem>
                    <DropdownItem>Filtro 4</DropdownItem>
                    <DropdownItem>Filtro 5 </DropdownItem>
                </DropdownMenu>

            </Dropdown>

        </div>
    )
}

export default Filters;