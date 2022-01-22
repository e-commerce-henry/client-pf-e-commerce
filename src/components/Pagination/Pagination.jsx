import React from 'react';
import Style from './Pagination.module.css'


export default function Pagination({productsPerPage, allProducts, pagination}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allProducts/productsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav className={Style.thepages}>
            <ul className={Style.ul}>
                {pageNumbers && pageNumbers.map((num) => (
                    <div className={Style.aver}>
                        <li className={Style.number} key={num}>
                            <button className={Style.pag} onClick={() => pagination(num)}>
                                {num}
                            </button>
                        </li>
                    </div>
               ))}
            </ul>
        </nav>
    );
};