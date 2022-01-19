import React,  { useState } from 'react';
import Style from './menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownItem , Dropdown , DropdownMenu, DropdownToggle} from "reactstrap";

export default function Menu(){
    const [dropdown , setDropdown] = useState(false); 
    const openCloseMenu = ()=>{
        setDropdown(!dropdown)
    }
    return(
        <div className={Style.main}>
            <Dropdown isOpen = {dropdown} toggle={openCloseMenu}> 
            {/* direction='right' */}
                <DropdownToggle caret className={Style.fle}>
                    Menu
                </DropdownToggle>
                <DropdownMenu className={Style.dropdownmenu}>
                    <DropdownItem header> categorias</DropdownItem>
                    <DropdownItem>Catgoria 1 </DropdownItem>
                    <DropdownItem>Categoria 2 </DropdownItem>
                    <DropdownItem>Categoria 3</DropdownItem>
                    <DropdownItem>Catgoria 4</DropdownItem>
                    <DropdownItem>Categoria 5 </DropdownItem>
                </DropdownMenu>

            </Dropdown>

        </div>
    )
}

