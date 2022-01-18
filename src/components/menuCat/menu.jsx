import React,  { useState } from 'react';
import './menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownItem , Dropdown , DropdownMenu, DropdownToggle} from "reactstrap";

export default function Menu(){
    const [dropdown , setDropdown] = useState(false); 
    const openCloseMenu = ()=>{
        setDropdown(!dropdown)
    }
    return(
        <div className="main">
            <Dropdown isOpen = {dropdown} toggle={openCloseMenu}> 
            {/* direction='right' */}
                <DropdownToggle caret className='fle'>
                    Menu
                </DropdownToggle>
                <DropdownMenu>
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

