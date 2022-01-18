import Style from './Head.module.css'

function Head(){
    return(
        <>
            <div className={Style.container} >head</div>
            <div>Home</div>
            <div>Carrito</div>
            <div>Favoritos</div>
            <div>Usuario</div>
            <div>MARCA DEL E-COMMERCE</div>
        </>
    )
};

export default Head;