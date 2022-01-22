// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { orderByName, orderByPrice, getProducts } from '../../redux/actions';
// import Style from './Filters.module.css'

// function Filters(){
//     const dispatch = useDispatch();
//     const [orden, setOrden] = useState('');

//     const products = useSelector ((state) => state.products);
    
//     useEffect (() => {
//         dispatch(getProducts());
//     }, [dispatch]); 

//     function handleSortN (e) {
//         e.preventDefault();
//         dispatch(orderByName(e.target.value));
//         setOrden(`Order ${e.target.value}`);
//     }
    
//     function handleSortP (e) {
//         e.preventDefault();
//         dispatch(orderByPrice(e.target.value));
//         setOrden(`Order ${e.target.value}`);
//     };

//     return(
//         <div className={Style.flef}>
//             <select className={Style.dropdownmenuf} onChange={(e) => handleSortP(e)}>
//                 <option value="price_asc">Precio ascendente</option>
//                 <option value="price_desc">Precio descendente</option>
//             </select>
//             <select className={Style.dropdownmenuf} onChange={(e) => handleSortN(e)}>
//                 <option value="name_asc">Nombre ascendente</option>
//                 <option value="name_desc">Nombre descendente</option>
//             </select>
//         </div>
//     )
// }

// export default Filters;