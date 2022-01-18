import Style from './Footer.module.css'

function Footer(){
    return(
        <>
            <div className={Style.container} >
            
                <div><a href='#'>Sobre nosotros</a></div>
                <div><a href="#">Contacto</a></div>
                <div><a href="#">terminos y condiciones</a></div>
                <div><a href="#">Politica de privacidad</a></div>
            
            </div>
            <div className={Style.copy}>
                <p>&copy; E - commerce | 2022</p>
            </div>
        </>

    )
};

export default Footer;