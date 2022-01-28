import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSaleBanner } from '../../redux/actions';
import Pagination from '../Paginationsalebanner/Pagination2';
import style from './SaleBanner.module.css';


export default function SaleBanner() {

    const sales = useSelector(state=>state.saleBanner)
    const dispatch = useDispatch();

    const numberPage =[];
    const [page, setPage] = useState(1);
    const productXpage =3;
    let paginas = Math.ceil(sales.length/productXpage);
        for (let i = 1; i <= paginas; i++) {
            numberPage.push(i);
        }
        const indexUltimo = page*productXpage;
        const indexInicio = indexUltimo - productXpage;
        const slicevideogame = sales.slice(indexInicio, indexUltimo);

    useEffect(() => {
        dispatch(getSaleBanner())
    }, [dispatch]);
    

  return(

    <div className={style.container}>
        <div className={style.carrusel}>
            {
                slicevideogame.map(e => {
                    return (
                        <div className={style.card} >
                            <div className={style.image}>
                                <img
                                    src={e.product.img}  alt="prueba"
                                />
                                <label>
                                    {e.product.brand}
                                    <div className={style.name_precio} >{e.name}</div>
                                </label>
                            </div>
                            <div>
                                <label className={style.precios} >
                                    Antes:
                                    <div>
                                    $.{e.product.price}
                                    </div>
                                </label>
                                <br/>
                                <div className={style.oferta_botton} >
                                    <label className={style.oferta_title}>
                                        Oferta con {e.discount}% de descuento
                                    </label>
                                    <br/>
                                    <label className={style.precios_oferta}>
                                        Ahora:
                                        <div>
                                            $.{Math.round(e.product.price-(e.product.price*(0+'.'+e.discount)))}
                                        </div>
                                    </label>
                                </div>
                               
                                
                            </div>
                        </div>
                    
                    )
                })
            }
        </div>
        <Pagination
                numberPage={numberPage}
                page={page}
                setPage={setPage}
            />
    </div>

  )
}
