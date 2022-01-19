import Style from './Card.module.css';

function Card(){
    return(
        <>
            <div className={Style.container} >
                <div className={Style.productname}>Nombre del producto</div>
                <div><img className={Style.productimg} src='http://starcomputacion.com.ar/library/timthumb/timthumb.php?src=/imagenes/productos/206050190461cddf30b005f_4.jpg&w=1180&h=546&zc=2' alt='not found' /></div>
                <div className={Style.productprice}>$25.000</div>
                <div className={Style.producticons}>
                    <button className={Style.productbtns}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                    </button>

                    <button className={Style.productbtns}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
        )
    };
    
    export default Card;