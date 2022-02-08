
import React from 'react';

import { Icon } from '@iconify/react';
import './CerrarSeccion.css'
import {useNavigate} from 'react-router-dom';
import {logout} from "../../../redux/actions";
import { useDispatch, useSelector} from 'react-redux'; 


const CerrarSeccion = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuth = useSelector(state => state.userAuth);  

   let onLogout = (e) => {
       e.preventDefault();
       dispatch(logout());
       navigate("/");

   }

  return (
  <div className='logout'> 
      {
          isAuth ? (<Icon onClick={onLogout} icon="ri:logout-circle-r-fill" color="currentColor" width="26" />): null
      }
  </div>
  );
};


export default CerrarSeccion;
