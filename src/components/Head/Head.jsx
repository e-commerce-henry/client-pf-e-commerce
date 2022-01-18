import Style from './Head.module.css'

function Head(){
    return(
        <>
            <div className={Style.container} >
                <div>Home</div>
                <div>Carrito</div>
                <div>Favoritos</div>
                <div>Usuario</div>
                <div>MARCA DEL E-COMMERCE</div>
            </div>
        </>
    )
};

export default Head;