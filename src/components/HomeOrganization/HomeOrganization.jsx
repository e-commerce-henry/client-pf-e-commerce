import Cards from '../Cards/Cards';
import Style from './HomeOrganization.module.css'
import SaleBanner from '../SaleBanner/SaleBanner'

function HomeOrganization(){
    return(
        <>
        <div className={Style.thebar}>
             <div className={Style.lateral}></div> 
            <div className={Style.central}> <SaleBanner /><Cards />  </div>
        </div>
            
        </>
    )
};

export default HomeOrganization;