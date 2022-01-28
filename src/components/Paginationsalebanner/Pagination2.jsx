import React from "react";
import  './Pagination2.css';


export default function Pagination({page, numberPage,setPage}){

    return(
        <div className='pagination_container' >
                {  
                    numberPage.map((pag,index)=>{
                        return(
                            <div
                                key={index}
                                onClick={()=> setPage(pag)} 
                                className={page === pag ?'active':''}
                            >
                            {pag}
                        </div>
                        )
                    })
                }
        </div>
    )

}