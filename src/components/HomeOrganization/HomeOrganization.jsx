import Cards from '../Cards/Cards';
import Style from './HomeOrganization.module.css'
import SaleBanner from '../SaleBanner/SaleBanner'
import Footer from '../Footer/Footer';

function HomeOrganization(){
    return(
        <>
        <div className={Style.thebar}>
             <div className={Style.lateral}></div> 
            <div className={Style.central}> <SaleBanner /><Cards />  </div>
            <div className={Style.footer}> <Footer /> </div>
        </div>
            
        </>
    )
};

export default HomeOrganization;