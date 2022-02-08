import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getSaleBanner , addProductBanneraCart } from '../../redux/actions';
import Pagination from '../Paginationsalebanner/Pagination2';
import style from './SaleBanner.module.css';
import swal from 'sweetalert';


export default function SaleBanner({discount, productId, name}) {

    const sales = useSelector(state=>state.saleBanner)
    const userId = useSelector (state => state.idUser)
    const auth = useSelector (state => state.userAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

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


    async function addCart(productId, price, img, name){
        if(auth){
            await dispatch(addProductBanneraCart({productId, userId , price, name, img}))
            swal({
                title: "Se ha agregado al carrito:",
                text: `${name}`,                icon: "success",
                button: "Ok"
            })
        }else {
            navigate('/profile-details')
            // swal({
            //     title: "Debes iniciar sesion",
            //     icon: "warning",
            //     button: "Ok"
            // })
        }


    }

    

  return(

    <div className={style.container}>
        <div className={style.carrusel}>
            {
                slicevideogame.map(e => {
                    return (
                        <div className={style.card} >
                            <div className={style.image}>
                                <img src={e.product.img} alt="prueba" />
                            </div>
                            <div className={style.nombres}>
                                {e.product.brand}
                                <div className={style.name_precio} >{e.name}</div>
                            </div>
                            <div className={style.precios} >
                                Antes: $ {Number(Math.ceil(e.product.price)).toLocaleString()}
                            </div>
                            <div className={style.oferta_botton} >
                                <div className={style.oferta_title}>
                                    Oferta con {e.discount}% de descuento
                                </div>
                                <br/>
                                <div className={style.precios_oferta}>
                                    Ahora:
                                    <div>
                                        $ {Number(Math.ceil(Math.round(e.product.price-((e.product.price * e.discount) /100)))).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                            <div className={style.btngrid}>
                                <button className={style.botton_compras} onClick={() => addCart(e.product.id, Math.round(e.product.price-((e.product.price * e.discount) /100)), e.product.img, e.name)}>
                                    Comprar ahora
                                </button>
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

