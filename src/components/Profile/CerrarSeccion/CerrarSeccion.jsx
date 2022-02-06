
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
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
  <div className='probando'> 
      {
          isAuth ? (<IconButton color="inherit" onClick={onLogout} > <ExitToAppSharpIcon/></IconButton>): null
      }
  </div>
  );
};


export default CerrarSeccion;
