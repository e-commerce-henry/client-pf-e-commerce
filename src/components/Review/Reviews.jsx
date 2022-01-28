import React from 'react';
import { useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { getReview } from '../../redux/actions';
import style from './Review.module.css'

export default function Reviews(props) {

  const dispatch = useDispatch();
  const get_review =useSelector(state => state.getreview);
  console.log('get_review :>> ', get_review);

  const tamaño = get_review.length;
  let rati = 0;
  for (let i = 0; i < tamaño; i++) {
      rati += parseInt(get_review[i].rating)    
  }
  //promedio de todos mis reviews
  let promedio = rati/tamaño;

  useEffect(() => {
    dispatch(getReview(props.idproduct))
  }, [dispatch, props.idproduct]);
  

  return (
    
    Math.round(promedio)
    ?<div className={style.container_puntaje} >     
    <label className={style.titulo_review}>Opiniones sobre el Producto</label>   
    <div className={style.cuadro_barras} >
        <div className={style.promedio}>
            <div className={style.numero_promedio}>
              {
                  promedio.toFixed(1)//promedio de todos mis reviews 
              }
            </div>
            
            <ReactStars
                count={5}
                value={promedio.toFixed(1)}
                size={28}
                edit={false}
                // activeColor="#ffd700"
                activeColor="#ffcc1a"
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
            />
            <label className={style.tamaño_opinion}>
                Promedio entre {tamaño} Opiniones
            </label>
        </div>
        <div className={style.caja_puntuacion}  >                
            {/* *********count 5************** */}
            <div className={style.count_star}>
                <label>5  ★</label>
                    <progress
                    max="100"
                    value={((get_review.filter((a) => parseInt(a.rating)===5 )).length)*3}
                    >
                    </progress>
                {(get_review.filter((a) => parseInt(a.rating)===5 )).length}
            </div>
            {/* ************count 4**************** */}
            <div className={style.count_star}>
                <label>4 ★</label>
                <progress
                    max="100"
                    value={((get_review.filter((a) => parseInt(a.rating)===4 )).length)*3}
                >
                </progress>
                {(get_review.filter((a) => parseInt(a.rating)===4 )).length}
            </div>
            {/* **************count 3******************* */}
            <div className={style.count_star}>
                <label>3 ★</label>
                <progress
                    max="100"
                    value={((get_review.filter((a) => parseInt(a.rating)===3 )).length)*3}
                    >
                    </progress>
                {(get_review.filter((a) => parseInt(a.rating)===3 )).length}
            </div>
            {/* **************count 2******************* */}
            <div className={style.count_star}>
                <label>2 ★</label>
                <progress
                    max="100"
                    value={((get_review.filter((a) => parseInt(a.rating)===2 )).length)*3}
                >
                </progress>
                {(get_review.filter((a) => parseInt(a.rating)===2 )).length}
            </div>
            {/* **************count 1******************* */}
            <div className={style.count_star}>
                <label>1 ★</label>
                <progress
                    max="100"
                    value={((get_review.filter((a) => parseInt(a.rating)===1 )).length)*3}
                    >
                </progress>
                {(get_review.filter((a) => parseInt(a.rating)===1 )).length}
            </div>
        </div>
    </div>
        {
            get_review.map((e,index) => 
            <div key={index} className={style.review_comentario} >
            <div>
            {/* vista del conteo de star */}
            <ReactStars
                count={5}
                value={parseInt(e.rating)}
                size={24}
                edit={false}
                // activeColor="#ffd700"
                activeColor="#ffcc1a"
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
            />
            </div>
            <div >
            {
              <div>
                {e.content}
              </div>

            }
            </div>
            
            </div>
            )
          }           
    </div>
    :<div>
        <div className={style.comentario_vacio} >
        <ReactStars
                    count={5}
                    size={28}
                    edit={false}
                    // activeColor="#ffd700"
                    activeColor="#ffcc1a"

                    emptyIcon={<i className="far fa-star"></i>}
                />
            Sin Puntuacion y Comentarios
        </div> 
    </div>

  )
}
