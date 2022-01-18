import Style from './Footer.module.css'

function Footer(){
    return(
        <div className={Style.container} >
            <ul>
                <a href='#'>Sobre nosotros</a>
            </ul>
        </div>
    )
};

export default Footer;